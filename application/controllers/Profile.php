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

		
		$this->load->library('Search');
		$s = new Search();
		$s->auto_suggest('i am looking for a engin');


	}
	public function getUploads(){
		$this->load->helper('upload_helper');
		@$path = upload_file();
	}
	public function sendBasicInformation(){
		$this->load->model('Basic_information');
		$basic = new Basic_information();


		$data = $this->input->post();
		$data['login_id'] = 2;

		$insert_id = $basic->insert( $data );

		print json_encode(['insert_id' => $insert_id]);

	}
	public function sendEducationInformation(){

		$this->load->model('Education_information');
		$education = new Education_information();

		$data = $this->input->post();
		$data['login_id'] = 2;

		$past_job = "";
		foreach ($data as $key => $value) {
			if( preg_match('/past_job/i', $key))
			{
				$past_job.=$value . ', ';
				unset($data[$key]);
			}
		}

		$data['past_job'] = $past_job;

		$insert_id = $education->insert( $data );

		print json_encode(['insert_id' => $insert_id]);

	}
	public function sendSkillInformation()
	{
		$this->load->model('Education_information');
		$education = new Education_information();

		$data = $this->input->post();
		$data['login_id'] = 2;

		$skill = "";
		$mode = "";
		$skill_data = "";
		foreach ($data as $key => $value) {
			if( preg_match('/skill/i', $key))
			{
				$skill.=$value.' ,';
				unset($data[$key]);
			}
			else if( preg_match('/mode/i', $key) ){
				$mode.=$value. ', ' ;
				unset($data[$key]);
			}
			$skill_data = $skill.'='.$mode;
		}

		$data['skills'] = $skill_data;

		($education->update('login_id', $data['login_id'], $data )) ? 
		print json_encode(['update_status' => true]) : print json_encode(['update_status' => false]);

	}
}
?>