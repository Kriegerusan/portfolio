<?php
require "../libs/DatabaseConnection.php";

class ContactSQL{

    const INSERT_REQUEST = "INSERT INTO contacts (email, lastname, firstname, message) values (:email, :lastname, :firstname, :message);";

    public static function create(Contact $contact)
    {
        try{

        $request = DatabaseConnection::connect()->prepare(self::INSERT_REQUEST);
        $request->bindValue(":email", $contact->getEmail());
        $request->bindValue(":lastname", $contact->getLastname());
        $request->bindValue(":firstname", $contact->getFirstname());
        $request->bindValue(":message", $contact->getMessage());
        
        $request->execute();


        }
        catch(Exception $e)
        {
            echo "Erreur : " . $e->getMessage();
        }



    }

}