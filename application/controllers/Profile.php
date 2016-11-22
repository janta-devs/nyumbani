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
		/*
		* It has to be changed to properly format the data in the new database design
		*
		*/

		// $this->load->model('Education_information');
		// $education = new Education_information();

		// $data = $this->input->post();
		// $data['login_id'] = $login_id;

		// $past_job = "";
		// foreach ($data as $key => $value) {
		// 	if( preg_match('/past_job/i', $key))
		// 	{
		// 		$past_job.=$value . ', ';
		// 		unset($data[$key]);
		// 	}
		// }

		// $data['past_job'] = $past_job;

		// $insert_id = $education->insert( $data );

		// print json_encode(['insert_id' => $insert_id]);

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
		$data['id'] = 2;
		if( isset( $data ) && !empty($data))
		{

			$login_id = $data['id'];
			$this->load->model('Basic_information');
			$basic = new Basic_information();

			$this->load->model('Education_information');
			$education = new Education_information();

			$this->load->model('User_login');
			$user = new User_login();

			$this->load->model('Recommendations');
			$recommendation = new Recommendations();

			$user_login_data = (array)$user->load_user_data(['login_id'=> $login_id]);
			unset($user_login_data['id']);
			$basic_data = (array)$basic->load_user_data(['login_id'=> $login_id]);
			unset($basic_data['id']);
			$education_data = (array)$education->load_user_data( ['login_id'=> $login_id] );
			unset($education_data['id']);
			$recomm = (Array)$recommendation->getRecommendations( $login_id )[0];
			unset($recomm['employee_login_id']);

			$past_job = $this->job_refactor( $education_data['past_job']);
			$education_data['past_job'] = $past_job;

			$primary_history = $this->school_history_refactor($education_data['primary_history']);
			$education_data['primary_history'] = $primary_history;
			
			$secondary_history = $this->school_history_refactor($education_data['secondary_history']);
			$education_data['secondary_history'] = $secondary_history;

			$university_history = $this->school_history_refactor($education_data['university_history']);
			$education_data['university_history'] = $university_history;

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

			$UserInfo = array_merge_recursive($education_data, $basic_data, $user_login_data, $recomm);
			$UserInfo['login_id'] = $UserInfo['login_id'][0]; 
			print json_encode( (object)$UserInfo );
		}
		

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
	public function job_refactor( $jobs ){
		$variables = explode('=', $jobs);
		$job = explode(',',$variables[0]);
		$duration = explode(',',$variables[1]);
		$title = explode(',',$variables[2]);

		for ($i=0; $i < count($job); $i++) { 
			if( !empty($job[$i]) && $job[$i] != " " ){
				$new_array[] = array_merge_recursive(['job'=>$job[$i]],['duration'=>$duration[$i]],['title'=>$title[$i]]);
			}
		}

		return $new_array;
	}
	public function school_history_refactor( $history ){
		$variables = explode(',', $history);

		for ($i=0; $i < count($variables) ; $i++) { 
			if( !empty($variables[$i]) && $variables[$i] != " "){
				$new_array = array_merge_recursive(['institution'=>$variables[0]],['grade'=>$variables[1]],['certificate_link'=>$variables[2]]);
			}
		}

		return $new_array;
	}
	public function getRecommendations(){
		$this->load->model('Recommendations');
		$recommendation = new Recommendations();

		$res = $recommendation->getRecommendations();

		print ( $res );
	}
}
?>