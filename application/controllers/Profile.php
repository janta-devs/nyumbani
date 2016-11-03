<?php
class Profile extends CI_Controller{
	public function get_user_info()
	{
		$this->load->model('User_login');
		$user = new User_login();

		$data = $user->load_user_data( ['login_id' => 2] );

		print json_encode( $data );
	}
	public function getdata()
	{

	}
	public function getUploads(){
		$this->load->helper('upload_helper');
		@$path = upload_file();
	}
}
?>