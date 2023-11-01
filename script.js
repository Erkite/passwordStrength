// Your solution goes here 
function isStrongPassword(password) {
 

 let num = 8;
 let b = false;
 
 for(let i = 0; i < password.length; i++)
    {
       if(password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91)
       {
          b = true;
 
       }
    }
 
 
 
 if(password.indexOf("password") >= 0)
 {
    return(false);
 }
 else if(b === false)
 {
    return(false);
 }
 else if(password.length < 8)
 {
    return(false);
 }
 else
 {
    return(true);
 }
 }
 