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
	public function get_jobs(){
		//loading the search library and instantiating the class
		$this->load->library('Search_jobs');
		$search = new Search_jobs();

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
		$logged_in_user = $this->session->userdata();
		$this->load->model('Job_Model');
		$job = new Job_Model();

		$data = $this->input->post();
		$data['login_id'] = $logged_in_user['login_id'];
		$data = $this->security->xss_clean($data);

		$insert_id = $job->insert( $data );
	}
	public function uploadAttachment()
	{
		$this->load->helper('upload_helper');
		@$path = upload_file();
	}
	public function Categories()
	{
		$this->load->model('Jobseeker');
		$job = new Jobseeker();

		$categories = $job->getData('profession')->result();

		foreach ($categories as $row) {
			$new_arr[] = $row->profession;
		}

		$new_arr = array_unique($new_arr);

		foreach ($new_arr as $key => $value) {
			$final_array[] = $value;
		}
		print json_encode( $final_array );
	}
	public function getJobCategories()
	{
		$this->load->library('Search_jobs');
		$search = new Search_jobs();
		$logged_in_user = $this->session->userdata();
		$data['job'] = $logged_in_user['profession'];
		if( isset( $data ) && !empty( $data ) && count( $data ) != 0 )
		{
			$results = $search->get_terms( $data['job'] );
			print( $results );
		}
	}
}

