function validation() {
    var valid =true;
    var formlables =document.getElementsByTagName("label");
    var email=document.regform.email.value;
    var re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if (!re.test(email) ) {
        formlables[0].innerHTML= "Email: * [email is incorect]";
        formlables[0].style.color="red";
        valid=false;
    }

    else {
        formlables[0].innerHTML= "Email:";
        formlables[0].style.color="black";
        valid= (valid) ? true : false ;
    }
    var password=document.regform.password.value;
    if(password=="") {
        formlables[1].innerHTML= "Password: * [Required]";
        formlables[1].style.color="red";
        valid=false;
               swal({
                title: "password is required",
                text: "",
                icon: "warning",
                });
    }
    else if (password.length < 4 ) {
        formlables[1].innerHTML= "Password: * [password must be > 4]";
        formlables[1].style.color="red";
        valid=false;
        swal({
            title: "password is greate than 4",
            text: "",
            icon: "warning",
            });
    }

    else {
        formlables[1].innerHTML= "Password:";
        formlables[1].style.color="black";
        valid= (valid) ? true : false ;
    }
    // else if(!isNaN(Email) ){
    //     formlables[0].innerHTML= "Email: * [Text only]";
    //     formlables[0].style.color="red";
    //     valid=false;
    // }
    return valid;
}