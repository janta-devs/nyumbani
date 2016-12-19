<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller{
	public $status;
	public $roles;
	function __construct(){
		parent::__construct();
		$this->load->model('Login', 'login', TRUE);
		$this->form_validation->set_error_delimiters('<div class="error">', '</div>');
		$this->status = $this->config->item('status');
		$this->roles  = $this->config->item('role');
	}
	public function index()
	{
		if(empty($this->session->userdata['email'])){
			redirect(site_url().'/home/login');
		}	
		/*homepage*/
		$data = $this->session->userdata;	
		if(($this->session->userdata['role']) != $this->config->item('default_role')){
			$this->load->view('Registration', $data);
		} else {
			$this->load->view('EmployerRegistration', $data);
		}


		// $this->load->view('Registration');
	}
	public function timeline(){
		if(empty($this->session->userdata['email'])){
			redirect(site_url().'/home/login');
		}	
		/*homepage*/
		$data = $this->session->userdata;	
		if(($this->session->userdata['role']) != $this->config->item('default_role')){
			$this->load->view('employee_timeline', $data);
		} else {
			$this->load->view('timeline', $data);
		}
	}
	public function employee_timeline(){
		$data = $this->session->userdata;
		$this->load->view('employee_timeline', $data);
	}
	public function completeReg(){
		$this->load->view('home');
	}

	public function register()
	{
		/*Validating requested input for registration step 1*/
		$this->form_validation->set_rules('fname', 'First Name', 'trim|required|alpha|min_length[3]|max_length[30]');
		$this->form_validation->set_rules('lname', 'Last Name', 'trim|required|alpha|min_length[3]|max_length[30]');
		$this->form_validation->set_rules('email_add', 'Email Address', 'trim|required|valid_email');
		$this->form_validation->set_rules('conf_email', 'Confirm Email', 'trim|required|matches[email_add]');
		$this->form_validation->set_rules('pwd', 'Password', 'trim|required|min_length[6]');
		$this->form_validation->set_rules('conf_pwd', 'Confirm Password', 'trim|required|matches[pwd]');
		$this->form_validation->set_rules('phone', 'Mobile Number', 'trim|required');
		$this->form_validation->set_rules('gender', 'Gender', 'required');

		if($this->form_validation->run() == FALSE){
			$this->load->view('home');

		} else {
			if($this->login->isDuplicate($this->input->post('email_add'))){
				$this->session->set_flashdata('flash_message', 'User email already exists');
				redirect(site_url().'/home/login');
			}else{
				$this->load->library('password');
				//$post = $this->input->post(NULL, TRUE);

				//$cleanPost = $this->security->xss_clean($post);
				$cleanPost = $this->security->xss_clean($this->input->post(NULL, TRUE));

				$hashed = $this->password->create_hash($cleanPost['pwd']);
				$cleanPost['pwd'] = $hashed;
				unset($cleanPost['conf_pwd']);
				///
				//unset($clean['re_password']);
				$id = $this->Login->insertUser($cleanPost);
				//$this->session->set_userdata('id', $id);
				$token = $this->Login->insertToken($id);

				$qstring = $this->base64url_encode($token);

				$url = site_url() . '/home/complete/token/' . $qstring;
				$link = '<a href="' . $url .'">' . $url . '</a>';
				$from_email = 'ochiodhis@gmail.com';
				$to_email = $this->input->post('email_add');
				$subject = 'Verify Your Email Address';
				$message = '';
				$message .= '<strong>You have successfully signed up with janta</strong><br>';
				$message .= '<strong>Please follow this link to complete registration:</strong> <br>' . $link;
				//configure email settings
				$config['protocol'] = 'smtp';
				$config['smtp_host'] = 'ssl://smtp.gmail.com'; //smtp host name
				$config['smtp_port'] = '465'; //smtp port number
				$config['smtp_user'] = $from_email;
				$config['smtp_pass'] = 'Checkmate061987NoOn?!'; //$from_email password
				$config['mailtype'] = 'html';
				$config['charset'] = 'iso-8859-1';
				$config['wordwrap'] = TRUE;
				$config['newline'] = "\r\n"; //use double quotes
				$this->email->initialize($config);

				//send mail
				$this->email->from($from_email, 'Janta - #1 Global workplace');
				$this->email->to($to_email);
				$this->email->subject($subject);
				$this->email->message($message);
				$this->email->send();
			if ($this->email->send() == FALSE){
				//successful email sending
				$this->session->set_flashdata('flash_message','<div class="alert alert-success text-center">You are Successfully Registered! Please confirm the mail sent to your Email-ID!!!</div>');
					redirect(site_url().'/home/login');
			}else{
				//error
				$this->session->set_flashdata('flash_message','<div class="alert alert-danger text-center">Oops! Error.  Please try again later!!!</div>');
					redirect(site_url().'/home/login');
			}
			//$success = '<div class="alert alert-success text-center">You are Successfully Registered! Please confirm the mail sent to your Email-ID!!!</div>';
			//echo $success; //send this via email
			//exit;
			};
		}
	}

	protected function _islocal(){
		return strpos($_SERVER['HTTP_POST'], 'local');
	}
	public function complete()
	{
		$token = base64_decode($this->uri->segment(4));
		$cleanToken = $this->security->xss_clean($token);

		$user_info = $this->Login->isTokenValid($cleanToken); //either false or an array();

		if(!$user_info){
			$this->session->set_flashdata('flash_message', 'Token is invalid or expired');
			redirect(site_url().'/home/login');
		}
		$data = array(
			//'industry'=>$user_info->industry,
			//'specialization'=>$user_info->specialization,
			'fname' => $user_info->fname,
			'lname' => $user_info->lname,
			'phone' => $user_info->phone,
			'role' => $user_info->role,
			'email'=>$user_info->email,
			'login_id'=>$user_info->login_id,
			'token'=>$this->base64url_encode($token)
			);
		$this->form_validation->set_rules('role', 'Role', 'required');
		if($this->form_validation->run() == FALSE){
			$this->load->view('complete-reg', $data);
		} else {
			$post = $this->input->post(NULL, TRUE);

			$cleanPost = $this->security->xss_clean($post);
			$userInfo = $this->login->updateUserInfo($cleanPost);

			if(!$userInfo){
				$this->session->set_flashdata('flash messgae', 'There was a problem updating your record');
				redirect(site_url(). '/home/login');
			}

			//unset($userInfo->role);

			foreach($userInfo as $key=>$val){
				$this->session->set_userdata($key, $val);
			}

			print_r( $this->session->userdata() );
			redirect(site_url(). '/home/');
		}
	}
	public function login()
	{
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'required');

		if($this->form_validation->run() == FALSE) {
			$this->load->view('home');
		} else {
			$post = $this->input->post();
			$clean = $this->security->xss_clean($post);

			$userInfo = $this->login->checkLogin($clean);

			if(!$userInfo){
				$this->session->set_flashdata('flash_message', 'The login was unsuccessful');
				redirect(site_url(). '/home/login');
			}
			foreach($userInfo as $key=>$val){
				$this->session->set_userdata($key, $val);
			}
			$user_role = $this->session->userdata();
			if( $user_role['role'] == 'employer'){
				redirect(site_url(). '/home/timeline/');
			}
			else{
				redirect(site_url(). '/home/employee_timeline/');
				$this->load->view('employee_timeline');
			}
			

			
		}
	}

	public function logout()
	{
		$this->session->sess_destroy();
		redirect(site_url().'/home/login/');
	}
	public function forgot()
	{
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');

		if($this->form_validation->run() == FALSE){
			$this->load->view('forgot');
		} else {
			$email = $this->input->post('email');
			$clean = $this->security->xss_clean($email);
			$userInfo = $this->login->getUserInfoByEmail($clean);

			if(!$userInfo){
				$this->session->set_flashdata('flash_message', 'We can\'t find your email address');
				redirect(site_url().'/home/login');
			}

			if($userInfo->status != $this->status[1]){
				//if user status is not approved
				$this->session->set_flashdata('flash_message', 'Your account is not in approved status');
				redirect(site_url().'/home/login');
			}
			//build token
			$token = $this->login->insertToken($userInfo->login_id);
			$qstring = $this->base64url_encode($token);
			$url = site_url() . '/home/reset_password/token/' . $qstring;
			$link = '<a href="' . $url . '">' . $url . '</a>';

			$message = '';
			$message .= '<strong>A password reset has been requested for this email account</strong><br>';
			$message .= '<strong>Please click:</strong> ' . $link;

			echo $message; //send this via email
			exit;
		}
	}

	public function reset_password()
	{
		$token = $this->base64url_encode($this->uri->segment(4));

		$cleanToken = $this->security->xss_clean($token);

		$user_info = $this->login->isTokenValid($cleanToken); //either false or array();

		if($user_info){
			$this->session->set_flashdata('flash_message', 'Token is invalid of expired');
			redirect(site_url().'/home/login');
		}
		$data = array(
			'userName'=> $user_info->username,
			'email'=>$user_info->email,
			'token'=>$this->base64url_encode($token)
			);
		$this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
		$this->form_validation->set_rules('passconf', 'Passwrod Confirmation', 'required|matches[password]');

		if($this->form_validation->run() == FALSE) {
			$this->load->view('reset_password', $data);
		} else {

			$this->load->library('password');
			$post = $this->input->post(NULL, TRUE);
			$cleanPost = $this->security->xss_clean($post);

			$hashed = $this->password->create_hash($cleanPost['password']);
			$cleanPost['password'] = $hashed;
			$cleanPost['login_id'] = $user_info->login_id;
			unset($cleanPost['passconf']);
			if(!$this->login->updatePassword($cleanPost)){
				$this->session->set_flashdata('flash_message', 'There was a problem changing your password');
			} else {
				$this->session->set_flashdata('flash_message', 'Your password has been successfully changed. You may now login');
			}
			redirect(site_url().'/home/login');
		}
	}
    public function base64url_encode($data) { 
      return rtrim(strtr(base64_encode($data), '+/', '-_'), '='); 
    } 
	public function base64url_decode($data)	{
		return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT));
	}

}

?>