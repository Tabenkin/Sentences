<?php

	class validator{
		
		public function escape_string($string){
			
			
			$output = "";
			
			if (get_magic_quotes_gpc()){
				
				
				$string = stripslashes($string);
				
				
			}
			
			return mysql_real_escape_string($string);
			
			
		}
		
		public function strip_html_entities($string){
			
			
				return htmlentities($string);
			
		}
		
		
		
		
		
		
		
	}





?>