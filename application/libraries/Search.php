<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Search {

	//Defined global variables

	public $professions_result = [];
	public $location_result = [];
	public $unified_search_terms = [];
	public $db_results = [];

	public $model;

	public function __construct()
	{

		$CI =& get_instance();
		$CI->load->model('Jobseeker');
		$this->model = new Jobseeker();

		$prof = $this->model->getData('profession');
		$loc = $this->model->getData('location');

		$this->DBdata( $prof, $loc );
	}

	public function get_terms( $term = "" )
	{
		$sanitized_data = strip_tags( $term );

		/*
		*	@param search_term/statement
		*	@purpose the set of functions belong traverses through the string and picks up select key terms 
		* 	this ensures that only the relevant information is matched and searched
		*/
		if( isset( $sanitized_data) && !empty( $sanitized_data ) )
		{


			foreach( $this->db_results['profession'] as $key => $value )
			{
				/*
				* Leave the "@" delimeters in the REGEX,otherwise it 
				* throws some undefined errors of 'unknown mofifier "c"'
				*/
				
				if (preg_match("@".$value."@i", $sanitized_data))
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
				if (preg_match("@".$value."@i", $sanitized_data))
				{
					if( !in_array($value, $this->location_result))
					{
						$this->location_result[] = $value;
					}
					if( count( $this->location_result != 0 ) ){
						$this->unified_search_terms['location'] = $this->location_result;
					}
				}
			}

			$this->refactor();
		}
		else
		{
			print("Enter your search term in the searchbox\n\n\n");
		}
			
		
	}
	public function DBdata($profession, $location)
	{
		/*
		*Preg_Match only allows the search of one phrase at a time
		*as such, I have to trim the professional titles from long sentences to only the first word in the sentence
		*/
		foreach ( $profession->result() as $row ) {
			$v = explode(' ', (string)trim($row->profession) );
			$this->db_results['profession'][] = $v[0];
		}
		foreach ( $location->result() as $row ) {
			$v = explode(' ', (string)trim($row->location) );
			$this->db_results['location'][] = $v[0];
		}
		return ( $this->db_results );
	}

	public function refactor()
	{
		// refactoring the information gotten from the search into searcheable SQL queries
		// e.g. SELECT * FROM `SOME_TABLE.FIELD` WHERE `profession` LIKE %{$this->unified_search_terns["profession"]}% etc
		
		$search_terms = [];

		foreach ($this->unified_search_terms as $k => $v)
		{
			foreach ($v as $key => $value) 
			{
				$search_terms[$k] = $value;
			}
		}

		$query = $this->model->search( $search_terms );

		print json_encode( $query->result() );
	}

}


?>