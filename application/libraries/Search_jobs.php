<?php
//defined('BASEPATH') OR exit('No direct script access allowed');


class Search_jobs {

	//Defined global variables

	public $professions_result = [];
	public $location_result = [];
	public $job_title_result = [];
	public $unified_search_terms = [];
	public $db_results = [];
	public $term = "";

	public $model;

	public function __construct()
	{

		$CI =& get_instance();
		$CI->load->model('Job_model');
		$this->model = new Job_model();

		$prof = $this->model->getData('profession');
		$loc = $this->model->getData('location');
		$job_title = $this->model->getData('job_title');

		$this->DBdata( $prof, $loc, $job_title );
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

			foreach ($this->db_results['location'] as $key => $value) 
			{
				if( preg_match("@".preg_quote($value)."@i", $this->term) )
				{
					if( !in_array( $value, $this->location_result) )
					{
						$this->location_result[] = $value;
					}
					if( count( $this->location_result != 0 ) )
					{
						$this->unified_search_terms['location'] = $this->location_result;
					}
				}
			}

			foreach ($this->db_results['job_title'] as $key => $value) 
			{
				if(preg_match("@".preg_quote($value)."@i", $this->term))
				{
					if( !in_array($value, $this->job_title_result))
					{
						$this->job_title_result[] = $value;
					}
					if( count( $this->location_result != 0 ) ){
						$this->unified_search_terms['job_title'] = $this->job_title_result;
					}
				}
			}


			$res = $this->refactor( $this->unified_search_terms );

			return $res;
		}
		else
		{
			print("Enter your search term in the searchbox\n\n\n");
		}
	}

	// refactoring the data fetched from the database 

	public function DBdata($profession, $location, $job_title)

	{
		/*
		*Preg_Match only allows the search of one phrase at a time
		*as such, I have to trim the professional titles from long sentences to only the first word in the sentence
		*/
		foreach ( $profession->result() as $row ) 
		{
			$v = explode(' ', (string)trim($row->profession) );

			if( strlen($v[0]) > 3 )
			{
				$this->db_results['profession'][] = (string)$v[0];
			}
			else if( count($v) > 1 && strlen($v[1]) > 3 )
			{
				$this->db_results['profession'][] = (string)$v[1];
			}
		}
		foreach ( $location->result() as $row ) 
		{
			$v = explode(' ', (string)trim($row->location) );
			if( strlen($v[0]) > 3 )
			{
				$this->db_results['location'][] = (string)$v[0];
			}
			else if( count($v) > 1 && strlen($v[1]) > 3 )
			{
				$this->db_results['location'][] = (string)$v[1];
			}
		}
		foreach ( $job_title->result() as $row ) 
		{
			$v = explode(' ', (string)trim($row->job_title) );
			if( strlen($v[0]) > 3 )
			{
				$this->db_results['job_title'][] = (string)$v[0];
			}
			else if( count($v) > 1 && strlen($v[1]) > 3 )
			{
				$this->db_results['job_title'][] = (string)$v[1];
			}
		}

		return ( $this->db_results );
	}

	//creating an array that can be sent to the database for the result search

	public function refactor( $data )
	{
		// refactoring the information gotten from the search into searcheable SQL queries
		// e.g. SELECT * FROM `SOME_TABLE.FIELD` WHERE `profession` LIKE %{$this->unified_search_terns["profession"]}% etc
		
		$search_terms = [];

		if( count( $data ) != 0 && !empty( $data ))
		{
			foreach ($data as $k => $v)
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

		$merged_data = array_merge_recursive($this->db_results['profession'], $this->db_results['location'] , $this->db_results['job_title']);
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