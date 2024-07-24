<?php

require "ContactSQL.php";

class Contact
{
    private $id;
    private $email;
    private $firstname;
    private $lastname;
    private $message;
    
    function __construct($email, $firstname, $lastname, $message)
    {
        // $this->email = $email;
        // $this->firstname = $firstname;
        // $this->lastname = $lastname;
        // $this->message = $message;
        $this
        ->setEmail($email)
        ->setFirstname($firstname)
        ->setLastname($lastname)
        ->setMessage($message);
        return $this;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getFirstname(): string
    {
        return $this->firstname;
    }

    public function getLastname(): string
    {
        return $this->lastname;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setId($newId): Contact
    {
        $this->id = $newId;
        return $this;
    }

    public function setEmail($newEmail): Contact
    {
        $this->email = $newEmail;
        return $this;
    }

    public function setFirstname($newFirstname): Contact
    {
        $this->firstname = $newFirstname;
        return $this;
    }

    public function setLastname($newLastname): Contact
    {
        $this->lastname = $newLastname;
        return $this;
    }

    public function setMessage($newMessage): Contact
    {
        $this->message = $newMessage;
        return $this;
    }

    public function create(Contact $contactEntity)
    {
        ContactSQL::create($contactEntity);
    }

}