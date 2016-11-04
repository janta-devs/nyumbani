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
		// print json_encode( $this->input->post() );
		$this->load->library('Search');
		$search = new Search();

		$data  = $this->input->post();

		if( isset( $data ) && !empty( $data ) && count( $data ) != 0 )
		{
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

