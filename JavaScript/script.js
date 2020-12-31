function validateForm(event){
    var email = document.getElementById("Email").value
    var password = document.getElementById("Password").value
    var cpassword = document.getElementById("CPassword").value
    var DOB = document.getElementById("DOB").value
    var gender1 = document.getElementsByClassName("gender")
    var gender0 = "Genderless"

    var age = BoomerCalculator(new Date(DOB))

    for (let i = 0; i < gender1.length; i++) {
        if(gender1[i].checked){
            gender0 = gender1[i].value
            break
        }
    }
    var agree = document.getElementById("Agree").checked

    var validpassword = false
    var number = false
    var caps = false
    var smol = false
    var plength = false
    
    for (let i=0; i<password.length; i++){
        if(isNaN(password.charAt(i)) == false){
            number = true
        }if(password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) caps = true;
        if(password.charCodeAt(i) > 96 && password.charCodeAt(i) < 123) smol = true;
    }
    
    if(password.length < 8){
        event.preventDefault()
        alert("Password must contain at least 8 characters")
    }else{
        plength = true
    }

    if(number && caps && smol && plength) validpassword = true;

    if(validpassword == false){
        event.preventDefault()
        alert("Must contain Capital letter, number and small letter")
    }

    if(age < 15){
        event.preventDefault()
        alert("You must be 15 or above to register")
    }

    if(password !== cpassword){
        event.preventDefault()
        alert("Confirm Password must match")
    }

    if(gender0 === "Genderless"){
        event.preventDefault()
        alert("Please select a gender")
    }

    if(agree == false){
        event.preventDefault()
        alert("You must agree to Register")
    }
}

function BoomerCalculator(dob) { 
    var difference = Date.now() - dob.getTime();
    var boomer = new Date(difference); 
  
    return Math.abs(boomer.getUTCFullYear() - 1970);
}
