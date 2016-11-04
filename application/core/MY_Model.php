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

		return $$query->result();
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
}

?>