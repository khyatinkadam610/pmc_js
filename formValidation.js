function ValidateForm() {
  var username = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var contact_no = document.getElementById("contact_no").value;
  var mailformat =
    /^[a-zA-Z.]([\.]?\w+)*@[a-zA-Z]+(\.[a-z]{2,3})$/;
  var contact_format=/^[6-9][0-9]{9}$/;
  if (!email.match(mailformat)) {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
  if(!contact_no.match(contact_format))
  { 
    alert("You have entered an invalid contact no!");
    document.form1.contact_no.focus();
    return false;
  }
  if (username=='' || username=="ENTER USERNAME"||email==""||email=="ENTER EMAIL"||contact_no==""||contact_no=="ENTER CONTACT NUMBER" || pass=="••••••••••••••"||pass=="") {
    alert("Y0u can't keep any field empty!");
    return false;
} else {
    return true;
}
}


