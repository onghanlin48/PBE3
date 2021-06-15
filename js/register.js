function validate() {
    var submit = true
    if (submit) {

        if (document.getElementById("date").value == "") {
            return false;
        } else {
            var dob = document.getElementById("date").value;
            var dob_year = dob.substr(0, 4)
            var dob_month = dob.substr(5, 7)
            var dob_day = dob.substr(8, 11)

            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth();
            var day = now.getDate();
            checkage = parseFloat(year) - parseFloat(dob_year)
            alert("you are " + (parseFloat(checkage)) + " year old ")
            if (checkage >= 25) {
                alert("You have reached the legal age to create a member account for our restaurant")
            }
            else { alert("Hesitate to create an account because you are under 25 years old") }
        }
        if (document.myForm.Name.value != "" && document.myForm.EMail.value != "" && document.myForm.password.value != "" && document.myForm.repassword.value != "" && document.myForm.date.value != "" && checkage >= 18) { alert("~Successfully create a member account~\nquickly receive coupons and go to our store for consumption.") }
        return (true);
    }

}
function validateEmail() {
    var emailID = document.getElementById("email").value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID\nXXXXX@XXX.XX")
        document.myForm.email.focus();
        return false;
    }
    return (true);
}
function validatepassword() {
    var password = document.getElementById("psw").value;
    var repassword = document.getElementById("psw-repeat").value;

    if (password.length < 6) {
        alert("Password must more then 6 chareter")
        document.myForm.password.focus();
        return false;
    }
    return (true);
}
function validaterepassword() {
    var password = document.getElementById("psw").value;
    var repassword = document.getElementById("psw-repeat").value;

    if (password != repassword) {
        alert("make sure password and repassword same")
        document.myForm.repassword.focus();
        return false;
    }
    return (true);
}