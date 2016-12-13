<?php
class MY_Model extends CI_Model{

	const TABLE = "abstract";


	public function check( $data )
	{
		$this->db->get_where($this::TABLE, $data );
		$affected_rows = $this->db->affected_rows();
		return ( $affected_rows === 1 ) ? true : false;
	}
	public function get($limit = 0, $offset = 0 )
	{
		if( isset( $limit ))
		{
			$query = $this->db->get($this::TABLE, $limit, $offset );
		}
		else
		{
			$query = $this->db->get( $this::TABLE );
		}

		return $query->result();
	}
	public function update( $field_name, $login_id, $data )
	{

		//field_name   => This represents the field in the database which is going to be searched
		//login_id  => this is a value from the user which needs to be searched in the specified field e.g. email or id

		$this->db->where($field_name, $login_id);
		return ( ($this->db->update($this::TABLE, $data) === True ) ) ? true : false;
	}
	public function insert( $data, $field_name = "", $login_id = "" )
	{
		if ($this->check( $data ) == false )
		{
			$this->db->insert($this::TABLE, $data );
			return $this->db->insert_id();
		}
		else
		{
			return $this->update( $field_name, $login_id, $data );
		}
	}
	public function load_user_data( $user_unique_id_array )
	{
		$query = $this->db->get_where($this::TABLE, $user_unique_id_array );
		return $query->row();
	}
	public function delete( $user_id )
	{
		return ($this->db->delete( $this::TABLE, $user_id )) ? true : false;
	}
	public function getData( $required_field )
	{
		$this->db->select($required_field);
		$query = $this->db->get( $this::TABLE );
		return $query;
	}
	function search( $query )
	{
		$this->db->like( $query );
		$query = $this->db->get( $this::TABLE );
		return $query;
	}
	function getRecommendations($employee_login_id = 2){
		$query = $this->db
              ->select('employee_login_id, count(employee_login_id) AS recommendations')
              ->group_by('employee_login_id')
              ->get($this::TABLE, $employee_login_id);
        return $query->result();
	}
	public function addWithoutChecking( $data ){
		//adds to db without checking if the value already exists
		
		$this->db->insert($this::TABLE, $data );
		return $this->db->insert_id();
	}
	public function getEmployeeBids($employee_login_id ){
		$query = $this->db->select('*')->where("employee_login_id = {$employee_login_id}")->get( $this::TABLE );
		return $query->result();
	}
	public function getOrderBids( $order_id ){
		$query = $this->db->select('*')->where("order_id = {$order_id}")->get( $this::TABLE );
		return $query->result();
	}
	public function getEmployerOrders( $login_id ){
		$query = $this->db->select('*')->where("login_id = {$login_id}")->get( $this::TABLE );
		return $query->result();
	}
	public function getMessages( $field ,$arr_with_params ){
		/*
		* $field is the field to be checked while selecting
		* @param $arr_with_params its an array with a key and value
		* @example ['login_id' => 2]
		*/
		$query = $this->db->select('*')->where("{$field} = {$arr_with_params[$field]}")->get( $this::TABLE );
		return $query->result();
	}
	public function updater($field_to_change = "", $value_to_updateWith = "", $id_of_row = "", $data){
		$this->db->set($field_to_change, $value_to_updateWith );
		$this->db->where($id_of_row, $data[$id_of_row]);
		return ($this->db->update( $this::TABLE ) == true ) ? true : false;
	}
}

?>