<?php
class Profile extends CI_Controller{

	public function get_user_info()
	{
		$this->load->model('User_login');
		$user = new User_login();

		$data = $user->load_user_data( ['login_id' => 2] );

		print json_encode( $data );
	}
	public function getUploads(){
		$this->load->helper('upload_helper');
		@$path = upload_file();
	}
	public function sendBasicInformation($login_id = 3){
		$this->load->model('Basic_information');
		$basic = new Basic_information();


		$data = $this->input->post();
		$data['login_id'] = $login_id;

		$insert_id = $basic->insert( $data );

		print json_encode(['insert_id' => $insert_id]);

	}
	public function sendEducationInformation( $login_id = 3){

		$this->load->model('Education_information');
		$education = new Education_information();

		$data = $this->input->post();
		$data['login_id'] = $login_id;

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
	public function sendSkillInformation($login_id = 3)
	{
		$this->load->model('Education_information');
		$education = new Education_information();

		$data = $this->input->post();
		$data['login_id'] = $login_id;

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
	public function getProfileData( $login_id = 3)
	{
		$this->load->model('Basic_information');
		$basic = new Basic_information();

		$this->load->model('Education_information');
		$education = new Education_information();

		$basic_data = (array)$basic->load_user_data(['login_id'=> $login_id]);
		$education_data = (array)$education->load_user_data( ['login_id'=> $login_id] );

		$past_job = explode(',', $education_data['past_job']);

		$count = count( $past_job );
		unset( $past_job[$count - 1 ]);

		$education_data['past_job'] = $past_job;

		$skills = explode('=', $education_data['skills']);
		
		for ($i=0; $i < count($skills); $i++) 
		{ 
			if( $i == 0 || $i%2 == 0)
				$skill = explode(',', $skills[$i] );
			else
				$mode = explode(',', $skills[$i] );
		}

		$new_array = [];
		for ($k=0; $k < count( $skill ); $k++) { 
			if( $skill[ $k ] != " " && !empty( $skill[ $k ] ) ){
				$new_array[ ][ $skill[ $k ] ] = $mode[ $k ];
			}
		}

		$education_data['skills'] = $new_array;


		print json_encode( (object)$education_data );
	}
}
?>