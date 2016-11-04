<?php
class Login extends CI_Model {
	public $status;
	public $roles;

	function __construct(){
		//calling the model constructor 
		parent::__construct();
		$this->status = $this->config->item('status');
		$this->roles = $this->config->item('roles');
	}

	public function insertUser($d)
	{
		$string = array(
			'fname' => $d['fname'],
			'lname' => $d['lname'],
			'email'	=> $d['email_add'],
			'password' => $d['pwd'],
			'phone' => $d['phone'],
			'gender' => $d['gender'],
			'role'	=> $this->roles[0],
			'status' => $this->status[0]
			);
		$q = $this->db->insert_string('user_login', $string);

		$this->db->query($q);
		return $this->db->insert_id();
	}

	public function isDuplicate($email)
	{
		$this->db->get_where('user_login', array('email' => $email), 1);
		return $this->db->affected_rows() > 0 ? TRUE : FALSE;
	}

	public function insertToken($login_id)
	{
		$token = substr(sha1(rand()), 0, 30);
		$date = date('Y-m-d');

		$string = array(
				'token' => $token,
				'login_id' => $login_id,
				'created' => $date
			);
		$query = $this->db->insert_string('tokens', $string);
		$this->db->query($query);
		return $token . $login_id;
	}
	public function isTokenValid($token)
	{
		$tkn = substr($token, 0, 30);
		$uid = substr($token, 30);

		$q = $this->db->get_where('tokens', array(
				'tokens.token' => $tkn,
				'tokens.login_id' => $uid), 1);
		if($this->db->affected_rows() > 0){
			$row = $q->row();            
            
            $created = $row->created;
            $createdTS = strtotime($created);
            $today = date('Y-m-d'); 
            $todayTS = strtotime($today);
            
            if($createdTS != $todayTS){
                return false;
			}
            
            $user_info = $this->getUserInfo($row->login_id);
            return $user_info;
            
        }else{
        	return false;
        }
	}
	public function sendEmail($to_email)
	{
        $from_email = "no-reply@janta.co.ke";
        $subject = "Verify Your Email Address";
        $message = "Dear User, <br/><br/>Please click on the activation link below to verify your email address and activate your account.<br/><br/>http://localhost/nyumbani/index.php/user/verify/' .md5($to_email) . '<br/><br/><br/>Thank You<br/>Janta Team";
        //email setting configuration 
        $config['protocol'] ='smtp';
        $config['smtp_host'] = 'localhost';
        $config['smtp_port'] = '465';
        $config['smtp_user'] = $from_email;
        $config['smtp_pass'] = 'dexter123?!';
        $config['mailtype'] = 'html';
        $config['charset'] = 'iso-8859-1';
        $config['wordwrap'] = TRUE;
        $config['newline'] = "\r\n"; //use double quotes
        $this->email->initialize($config);
        
        //send mail
        $this->email->from($from_email, 'Mydomain');
        $this->email->to($to_email);
        $this->email->subject($subject);
        $this->email->message($message);
        return $this->email->send();

	}
	public function getUserInfo($login_id)
	{
        $q = $this->db->get_where('user_login', array('login_id' => $login_id), 1);  
        if($this->db->affected_rows() > 0){
            $row = $q->row();
            return $row;
        }else{
            error_log('no user found getUserInfo('.$login_id.')');
            return false;
        }

	}
	public function updateUserInfo($post)
	{
        $data = array(
               'role' => $post['role'],
               'last_login' => date('Y-m-d h:i:s A'), 
               'status' => $this->status[1]
               );
        $this->db->where('login_id', $post['login_id']);
        $this->db->update('user_login', $data); 
        $success = $this->db->affected_rows(); 
        
        if(!$success){
            error_log('Unable to updateUserInfo('.$post['login_id'].')');
            return false;
        }
        
        $user_info = $this->getUserInfo($post['login_id']); 
        return $user_info; 

	}
	public function checkLogin($post)
	{
        $this->load->library('password');       
        $this->db->select('*');
        $this->db->where('email', $post['email']);
        $query = $this->db->get('user_login');
        $userInfo = $query->row();
        
        if(!$this->password->validate_password($post['password'], $userInfo->password)){
            error_log('Unsuccessful login attempt('.$post['email'].')');
            return false; 
        }
        
        $this->updateLoginTime($userInfo->login_id);
        
        unset($userInfo->password);
        return $userInfo; 
	}
	public function updateLoginTime($login_id)
	{
		$this->db->where('login_id', $login_id);
        $this->db->update('user_login', array('last_login' => date('Y-m-d h:i:s A')));
        return;
	}
	public function getUserInfoByEmail($email)
	{
        $q = $this->db->get_where('user_login', array('email' => $email), 1);  
        if($this->db->affected_rows() > 0){
            $row = $q->row();
            return $row;
        }else{
            error_log('no user found getUserInfo('.$email.')');
            return false;
        }

	}
    
    public function updatePassword($post)
    {   
        $this->db->where('login_id', $post['login_id']);
        $this->db->update('user_login', array('password' => $post['password'])); 
        $success = $this->db->affected_rows(); 
        
        if(!$success){
            error_log('Unable to updatePassword('.$post['login_id'].')');
            return false;
        }        
        return true;
    } 
}