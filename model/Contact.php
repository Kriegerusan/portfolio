<?php

class Contact
{
    private $id;
    private $email;
    private $firstname;
    private $lastname;
    private $note;
    
    function __construct($email, $firstname, $lastname, $note)
    {
        $this->email = $email;
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->note = $note;
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

    public function getfirstname(): string
    {
        return $this->firstname;
    }

    public function getNom(): string
    {
        return $this->lastname;
    }

    public function getNote(): string
    {
        return $this->note;
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

    public function setfirstname($newfirstname): Contact
    {
        $this->firstname = $newfirstname;
        return $this;
    }

    public function setNom($newNom): Contact
    {
        $this->lastname = $newNom;
        return $this;
    }

    public function setNote($newNote): Contact
    {
        $this->note = $newNote;
        return $this;
    }

}