<?php
class Jobs extends CI_Controller 
{
	public function index ()
	{
		$this->load->view('post-job');
	}
	public function AddRecommendation()
	{
		$this->load->model('Recommendations');
		$recommendation = new Recommendations();
		$data = $this->input->post();
		$res = $recommendation->insert( $data, 'employee_login_id', $data['employee_login_id']);
		print ( is_numeric( $res ) == true ) ? json_encode(['message' => true]) : 
		($res == true ) ? json_encode(['message' => 'exists']) : '';
	}
	public function GetBids(){
		$this->load->model('Recommendations');
		$recommendation = new Recommendations();

		$sess_data = $this->session->userdata();
		$employee_login_id = $sess_data['login_id'];

		print json_encode($recommendation->getEmployeeBids( $employee_login_id ) );
	}
	public function GetMyOrders(){
		$this->load->model('Job_Model');
		$Job_Model = new Job_Model();

		$this->load->model('Recommendations');
		$recommendation = new Recommendations();

		$sess_data = $this->session->userdata();
		$login_id = $sess_data['login_id'];

		$orders = $Job_Model->getEmployerOrders( $login_id );

		foreach ($orders as $row) {
			$res = $recommendation->getOrderBids( $row->order_id );
			$row->interested_employees = $res;
		}

		print json_encode( $orders );
	}
	public function GetMyMessages(){
		$this->load->model('Messages');
		$Messages = new Messages();
		$sess_data = $this->session->userdata();
		$msgs= $Messages->getMessages('to_id', ['to_id'=>$sess_data['login_id']]);
		
		foreach( $msgs as $row ){
			$row->timestamp = date( 'Y-m-d H:i:s', strtotime($row->timestamp));
		}	
		print json_encode( $msgs );		
	}
	public function GetMySentMessages(){
		$this->load->model('Messages');
		$Messages = new Messages();
		$sess_data = $this->session->userdata();
		$msgs= $Messages->getMessages('from_id', ['from_id'=>$sess_data['login_id']]);

		foreach( $msgs as $row ){
			$row->timestamp = date( 'Y-m-d H:i:s', strtotime($row->timestamp));
		}	
		print json_encode( $msgs );
	}
	public function SendMessage(){
		$this->load->model('Messages');
		$Messages = new Messages();

		$data = $this->input->post();
		foreach ($data as $key => $value) {
			if( $key == 'message_title' ||  $key == 'message_body' ){
				strip_tags( trim($value) );
			}
		}
		$res = $Messages->insert( $data );
		print ( is_numeric($res) ) ? json_encode(['message'=>true]) : json_encode(['message'=>false]);
	}

}