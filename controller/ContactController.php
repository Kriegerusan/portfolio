<?php
include "../view/base.html";


CreateContactForm();


include "../view/base/footer.html";


function CreateContactForm(){
    

    if(isset($_POST['submit'])){
        

        header($_SERVER['PHP_SELF']);
        // exit;
    }

    include "../view/contact/contact.html";
}