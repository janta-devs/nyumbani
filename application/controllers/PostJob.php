<?php

class PostJob extends CI_Controller{
	public function job(){
		if( !isset( $this->session->userdata['email']))
		{
			redirect(site_url().'/home/login');
		}
		else
		{
			$this->load->view('postjob');
		}
		
	}
}

?>