<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('timeline');
	}
	public function search(){
		$this->load->library('Search');
		$search = new Search();

		$data  = $this->input->post();

		if( isset( $data ) && !empty( $data ) && count( $data ) != 0 ){
			$results = $search->get_terms( $data['search_term'] );
			print $results;
		}

	}
	public function search(){
		$this->load->library('Search');
		$search = new Search();

		$data  = $this->input->post();

		if( isset( $data ) && !empty( $data ) && count( $data ) != 0 ){
			$results = $search->get_terms( $data['search_term'] );
			print $results;
		}

	}
}
