<?php
ini_set('upload_max_filesize', '20M');
ini_set('post_max_size', '80M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);

function upload_file()
{
	if( isset( $_FILES ) && !empty( $_FILES ))
	{
		$file = $_FILES[0];
		$accepted_extensions = ['image/jpeg', 'image/png', 'image/gif'];

		//Collecting the requisite information about the file that has been uploaded
		$name = $file['name'];
		$tmp_name = $file['tmp_name'];
		$type = $file['type'];
		$size = intval( $file['size'] );

		//converting file size into Kbs or Mbs
		$x = (floor($size/1024));
		$x = ( $x < 1000 ) ? $x.' Kb' : (floor($x/1024)).' Mb';

		//Checking if the extension meets systems expectations ('image/jpeg', 'image/png', 'image/gif')
		( in_array($type, $accepted_extensions) == TRUE ) 
		? $new_loc =  "./order_attachments/" : $new_loc = "../order_attachments/";

		//Moving files from the temporary location to the file location 

 		( move_uploaded_file($tmp_name, $new_loc.$name) == TRUE ) ? 
			print json_encode( array("path"=> '/nyumbani/order_attachments/'.$name, "size"=> $x, "type"=>$type) ) : print json_encode(array("error"=>"error uploading file"));
	 }

	 return "/order_attachments/".$name;

}
?>