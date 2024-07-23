<?php

class Contact
{
    private $id;
    private $email;
    private $prenom;
    private $nom;
    private $note;
    
    function __construct($email, $prenom, $nom, $note)
    {
        $this->email = $email;
        $this->prenom = $prenom;
        $this->nom = $nom;
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

    public function getPrenom(): string
    {
        return $this->prenom;
    }

    public function getNom(): string
    {
        return $this->nom;
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

    public function setPrenom($newPrenom): Contact
    {
        $this->prenom = $newPrenom;
        return $this;
    }

    public function setNom($newNom): Contact
    {
        $this->nom = $newNom;
        return $this;
    }

    public function setNote($newNote): Contact
    {
        $this->note = $newNote;
        return $this;
    }

}