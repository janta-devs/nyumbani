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


}