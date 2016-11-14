<?php
class Profile extends CI_Controller{

	public function get_user_info()
	{
		$this->load->model('User_login');
		$user = new User_login();
		$data = $this->session->userdata();
		$data = $user->load_user_data( ['login_id' => $data['login_id']] );

		print json_encode( $data );
	}
	public function getUploads(){
		$this->load->helper('upload_helper');
		@$path = upload_file();
	}
	public function sendBasicInformation($login_id = 3){
		$this->load->model('Basic_information');
		$basic = new Basic_information();

		$data = $this->session->userdata();

		$dataArr = $this->input->post();
		$dataArr['login_id'] = $data['login_id'];

		$insert_id = $basic->insert( $dataArr );

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
	public function getProfileData( )
	{
		$data = $this->session->userdata();
		$login_id = $data['login_id'];


		$this->load->model('Basic_information');
		$basic = new Basic_information();

		$this->load->model('Education_information');
		$education = new Education_information();

		$this->load->model('User_login');
		$user = new User_login();


		$user_login_data = (array)$user->load_user_data(['login_id'=> $login_id]);
		unset($user_login_data['id']);
		$basic_data = (array)$basic->load_user_data(['login_id'=> $login_id]);
		unset($basic_data['id']);
		$education_data = (array)$education->load_user_data( ['login_id'=> $login_id] );
		unset($education_data['id']);

		$education_data['past_jobs'] = $this->StringToArray($education_data['past_job'], ['job','duration','title']);

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
				$new_array[ ][ 'skill' ] = $skill[ $k ];
			}
		}

		$education_data['skills'] = $new_array;

		$UserInfo = array_merge_recursive($education_data, $basic_data, $user_login_data);
		$UserInfo['login_id'] = $UserInfo['login_id'][0]; 

		print json_encode( (object)$UserInfo );

	}

	public function StringToArray( $string, $params ){
		$arr = explode('=', $string);

		if( count( $arr ) < 3 ){
			for ($i=0; $i < count($arr); $i++) 
			{ 
				if( $i == 0 || $i%2 == 0)
					$valOne = explode(',', $arr[$i] );
				else
					$valTwo = explode(',', $arr[$i] );
			}

			for ($k=0; $k < count( $job ); $k++) { 
				if( $valOne[$k] != " " && !empty( $valOne[$k] )){
					$new_arr[] = array_merge_recursive( [$params[1]=> $job[$k]], [$params[2]=> $duration[$k]] );
				}
			}
		}
		else
		{

			$valThree = explode(',', $arr[2]);
			unset($arr[2]);

			for ($i=0; $i < count($arr); $i++) 
			{ 
				if( $i == 0 || $i%2 == 0)
					$valOne = explode(',', $arr[$i] );
				else
					$valTwo = explode(',', $arr[$i] );
			}

			for ($k=0; $k < count( $valOne ); $k++) 
			{ 
				if( $valOne[$k] != " " && !empty( $valOne[$k] ))
				{
					$new_arr[] = array_merge_recursive([$params[0]=>$valOne[$k]],[$params[1]=>$valTwo[$k]],[$params[2]=>$valThree[$k]]);
				}
			}
			return $new_arr;		
		}
	}
}
?>