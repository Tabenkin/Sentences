<?php
        
        $db_hostname='localhost';
        $db_database='Sentences';
        $db_username='root';
        $db_password='root';
        
        $db_server = mysql_connect($db_hostname, $db_username, $db_password);
        
        if(!$db_server) echo die("Unable to connect to MySQL: " . mysql_error());
        
        mysql_select_db($db_database) or die("Unable to select $db_database: " . mysql_error());
?>