<?php

class MY_Crud extends CI_Model{

	public const TABLE = "abstract";


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
	public function update( $primary_key, $unique_field, $data ){

		//primary_key   => This represents the field in the database which is going to be searched
		//unique_field  => this is a value from the user which needs to be searched in the specified field e.g. email or id

		$this->db->where($primary_key, $unique_field);
		return ( ($this->db->update($this::DB_TABLE, $new_data) === True ) ) ? true : false;
	}
	public function insert( $data )
	{
		if ($this->check( $data ) == false )
		{
			$this->db->insert($this::TABLE, $data );
			return $this->db->insert_id();
		}
		else
		{
			return $this->update( $primary_key, $unique_field, $data );
		}
	}
	public function load_user_data( $user_unique_id )
	{
		$query = $this->db->get_where($this::TABLE, $user_unique_id);
		return $query->row();
	}
	public function delete( $user_id )
	{
		return ($this->db->delete( $this::TABLE, $user_id )) ? true : false;
	}
}

?>