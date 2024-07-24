<?php

require "../model/Contact.php";

const CONTACTCONTROLLER = new ContactController();

CONTACTCONTROLLER->index();


class ContactController
{

    public function index()
    {

        include "../view/base.html";

        if (isset($_POST['submit'])) {
            
            
            $contactEntity = new Contact($_POST['email'],$_POST['firstname'],$_POST['lastname'],$_POST['message']);
            $contactEntity->create($contactEntity);

            header("location: HomeController.php");
            exit;
        }else{
            $this->form();
        }

        include "../view/base/footer.html";
    }

    private function form()
    {
        include "../view/contact/contact.html";
    }
}
