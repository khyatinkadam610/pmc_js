var username = document.getElementById("username");
var pass = document.getElementById("pass");
var email = document.getElementById("email");
var contact_no = document.getElementById("contact_no");
pass.onfocus = function () {
  if (pass.value == "ENTER PASSWORD") {
    pass.value = "";
  }
};
contact_no.onfocus = function () {
  if (this.value == "ENTER CONTACT NUMBER") {
    contact_no.value = "";
  }
};
email.onfocus = function () {
  if (this.value == "ENTER EMAIL") {
    email.value = "";
  }
};
username.onfocus = function () {
  if (this.value == "ENTER USERNAME") {
    this.value = "";
  }
};
pass.onblur = function () {
  if (this.value == "") {
    pass.value = "ENTER PASSWORD";
  }
};
username.onblur = function () {
  if (this.value == "") {
    this.value = "ENTER USERNAME";
  }
};
email.onblur = function () {
  if (email.value =="" ) {
    email.value = "ENTER EMAIL";
  }
};

contact_no.onblur = function () {
  if (this.value == "") {
    contact_no.value = "ENTER CONTACT NUMBER";
  }
};