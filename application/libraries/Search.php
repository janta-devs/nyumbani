<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Search {

	//Defined global variables

	public $professions_result = [];
	public $city_result = [];
	public $unified_search_terms = [];
	public $db_results = [];
	public $term = "";

	public $model;

	public function __construct()
	{

		$CI =& get_instance();
		$CI->load->model('Jobseeker');
		$this->model = new Jobseeker();

		$prof = $this->model->getData('profession');
		$loc = $this->model->getData('city');

		$this->DBdata( $prof, $loc );
	}
	//	Getting the terms typed in the client 
	public function get_terms( $term = "" )
	{
		$this->term = strip_tags( $term );

		/*
		*	@param search_term/statement
		*	@purpose the set of functions belong traverses through the string and picks up select key terms 
		* 	this ensures that only the relevant information is matched and searched
		*/
		if( isset( $this->term) && !empty( $this->term ) )
		{
			foreach( $this->db_results['profession'] as $key => $value )
			{
				/*
				* Leave the "@" delimeters in the REGEX,otherwise it 
				* throws some undefined errors of 'unknown mofifier "c"'
				*/
				if (preg_match("@".preg_quote($value)."@i", $this->term))
				{
					/*
					* @preg_match searches for the key term within the string recieved from the client
					* @in_array it ensures that no duplicate entries are stored in the array
					*/
					if( !in_array($value, $this->professions_result))
					{
						$this->professions_result[] = $value;
					}
					if( count($this->professions_result) != 0 ){
						$this->unified_search_terms['profession'] = $this->professions_result;
					}
				}
			}

			foreach ($this->db_results['city'] as $key => $value) 
			{
				if (preg_match("@".preg_quote($value)."@i", $this->term))
				{
					if( !in_array($value, $this->city_result))
					{
						$this->city_result[] = $value;
					}
					if( count( $this->city_result != 0 ) ){
						$this->unified_search_terms['city'] = $this->city_result;
					}
				}
			}

			$res = $this->refactor();

			return $res;
		}
		else
		{
			print("Enter your search term in the searchbox\n\n\n");
		}
	}

	// refactoring the data fetched from the database 

	public function DBdata($profession, $city)

	{
		/*
		*Preg_Match only allows the search of one phrase at a time
		*as such, I have to trim the professional titles from long sentences to only the first word in the sentence
		*/
		foreach ( $profession->result() as $row ) {
			$v = explode(' ', (string)trim($row->profession) );
			if( strlen($v[0]) > 3 )
			{
				$this->db_results['profession'][] = $v[0];
			}
		}
		foreach ( $city->result() as $row ) {
			$v = explode(' ', (string)trim($row->city) );
			if( strlen($v[0]) > 3 )
			{
				$this->db_results['city'][] = $v[0];
			}
		}
		return ( $this->db_results );
	}

	//creating an array that can be sent to the database for the result search

	public function refactor()
	{
		// refactoring the information gotten from the search into searcheable SQL queries
		// e.g. SELECT * FROM `SOME_TABLE.FIELD` WHERE `profession` LIKE %{$this->unified_search_terns["profession"]}% etc
		
		$search_terms = [];

		if( count( $this->unified_search_terms ) != 0 && !empty( $this->unified_search_terms ))
		{
			foreach ($this->unified_search_terms as $k => $v)
			{
				foreach ($v as $key => $value) 
				{
					$search_terms[$k] = $value;
				}
			}
			$query = $this->model->search( $search_terms );

			return json_encode( $query->result() );
		}
		else
		{
			//return json_encode( ['message' => 'There are no results for the term '.$this->term.''] );
			return $this->auto_suggest( $this->term );
		}

	}

	//provides suggestions of the most likely terms the client might have wanted to search for instead

	public function auto_suggest( $term )
	{
		// create an autosuggesting system that will be checking the first 2 letters of the search term and tried to find a match

		$merged_data = array_merge($this->db_results['profession'], $this->db_results['city'] );
		$suggestions = [];
		$client_suggestions = [];
		$main_array = [];
		
		//removing the last 2 characters from the search term

			foreach( $merged_data as $key => $value )
			{

				$v = substr( $value , 0 , -3 );
				/*
				* Leave the "@" delimeters in the REGEX,otherwise it 
				* throws some undefined errors of 'unknown mofifier "c"'
				*/
				if (preg_match("@".preg_quote($v)."@i", $term))
				{
					$suggestions[] = $value;
				}
			}

			$suggestions = array_keys( array_count_values( $suggestions ) );

			for ($i=0; $i < 3; $i++) 
			{ 
				$main_array[] = ["suggestion_{$i}" => $suggestions[$i]];
			}
			return ( json_encode( (object)['message' => $main_array] ) );
	}

}
?>