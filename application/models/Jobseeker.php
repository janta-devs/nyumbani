<?php

class Jobseeker extends CI_Model{

	public function getData( $required_field )
	{
		$this->db->select($required_field);
		$query = $this->db->get('MOCK_DATA');
		return $query;
	}
}
?>