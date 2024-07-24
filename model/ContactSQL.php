<?php
class ContactSQL{

    public function create(Contact $contact)
    {
         $request = "INSERT INTO contact (email,lastname,firstname,message) values (:email, :lastname, :firstname, :message);";
         
    }

}