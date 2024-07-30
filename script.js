function validation() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    
    
    var userr=document.getElementById('userr').innerHTML="";
var passs=document.getElementById('passs').innerHTML="";
    var conpasss=document.getElementById('conpasss').innerHTML="";
    var mobilee=document.getElementById('mobilee').innerHTML="";

    if (user == "") {
        document.getElementById('userr').innerHTML = "please fill the user name";
        return false;
    }

    if ((user.length <= 5) || (user.length > 20)) {
        document.getElementById('userr').innerHTML = "**user length must be between 5 to 20";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('userr').innerHTML = "only characters are allowed";
        return false;
    }


    if (pass == "") {
        document.getElementById('passs').innerHTML = "**please write your password";
        return false;

    }
    if ((pass.length <= 5) || (pass.length > 20)) {
        document.getElementById('passs').innerHTML = "**password length must be between 5 and 20";
        return false;
    }
    if (pass != conpass) {
        document.getElementById('conpasss').innerHTML = "password are not matching";
        return false;
    }


    if (conpass == "") {
        document.getElementById('conpasss').innerHTML ="please confirm field";
        return false;

    }

    if (email == "") {
        document.getElementById('emaill').innerHTML = "please write your email";
        return false;

    }

    if (email.indexOf('@') <= 0) {
        document.getElementById('emaill').innerHTML = "@ invalid position";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emaill').innerHTML = ". invalid position";
        return false;
    }
    // smritibajaj@gmail.com
    if(!email.match("@") || !email.match(".com") && !email.match(".in")){
      document.getElementById('emaill').innerHTML = ". invalid position";
    }



    if (mobile == "") {
        document.getElementById('mobilee').innerHTML = "**please write your mobile no";
        return false;

    }
    if (isNaN(mobile)) {
        document.getElementById('mobilee').innerHTML = "**user must write digits only";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('mobilee').innerHTML = "**mobile no. must be 10 digits only";
        return false;
    }
    
    
    
    

}