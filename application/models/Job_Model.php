<?php
class Job_Model extends CI_Model {
	function __construct () {
		parent:: __construct();
	}
	public function readAll() {
		$query = $this->db->from('jobs');
		$query = $this->db->order_by("profession", "asc");
		$query = $this->db->get();

		return json_encode($query);

	}
}