<?php
class DatabaseConnection{

    public static function connect(){
        $connectionsArray = parse_ini_file("../config/DBConnection.ini", true);
        $connectionProperties = $connectionsArray['local connection'];
        $host = $connectionProperties['host'];
        $port = $connectionProperties['port'];
        $user = $connectionProperties['user'];
        $password = $connectionProperties['password'];
        $database = $connectionProperties['database'];
        var_dump($connectionProperties);

        try{
            $pdo = new PDO("mysql:host=$host;dbname=$database", $user, $password);
        }catch(Exception $e){
            print_r("Erreur : " . $e->getMessage());
            die;
        }

        return $pdo;
    }
}