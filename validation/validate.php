<?php

	class validator{
		
		public function cleanse_string($string){
			
			
			$output = "";
			
			if (get_magic_quotes_gpc()){
				
				
				$string = stripslashes($string);
				
				
			}
			
			return mysql_real_escape_string($string);
			
			
		}
		
		
		
		
		
		
		
	}





?>