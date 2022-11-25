function formValidation(){
    let a1 = document.getElementById("name");
    let a2 = document.getElementById("address");
    let a3 = document.getElementById("email");
    let a4 = document.getElementById('password');
    let a5 = document.getElementById('cpassword');
if(a1.value == null || a1.value ==''){
    alert("Name must entered");
    
    return false;
}
else if(a2.value == null || a2.value == ''){
    alert("Address must entered");
    
    return false;
}
else if(a3.value == null || a3.value == ''){;
alert("Email must entered");

return false;
}

else if(a4.value < 6){
    alert("Password greater than 6 character");
    
    return false; 
}

else if(a4.value !== a5.value){
    alert("Password must be same");
    
    return false; 
}
else{
    alert("form is valid");
    return true;
}


}