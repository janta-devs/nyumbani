<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Timeline extends CI_Controller {

	public function index()
	{
		$this->load->view('timeline');
	}
	public function postJob (){
		$this->load->view('post-job');
	}
	public function createJob () {
		//$profession = new Profession ();
		$results= $this->Job_Model->readAll();
		echo $result;
	}
	public function get()
	{
		//loading the search library and instantiating the class
		$this->load->library('Search');
		$search = new Search();

		//getting data from the user's form

		$data  = $this->input->post();

		if( isset( $data ) && !empty( $data ) && count( $data ) != 0 )
		{
			//calling the get_terms method to thus do the search and return a json object with results either affirmative or contrary
			
			$results = $search->get_terms( $data['search_term'] );
			print( $results );
		}
	}
	public function profile (){
		$this->load->view('profile');
	}
	public function create_order()
	{
		$data = $this->input->post();
		$this->load->model('Job_Model');
		$job = new Job_Model();

		$data['login_id'] = 2;
		$data = $this->security->xss_clean($data);
		
		$insert_id = $job->insert( $data );

	}
	public function uploadAttachment(){
		$this->load->helper('upload_helper');
		@$path = upload_file();
	}
}

