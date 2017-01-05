<?php
 class GetEmployees extends CI_Model{

 	function getJoinedTables()
 	{
 		$this->db->select('*');
 		$this->db->from('basic_information');
 		$this->db->join('education_information', 'education_information.login_id = basic_information.login_id','left');
 		$query = $this->db->get();
 		return $query->result();
  	}
 }

?>