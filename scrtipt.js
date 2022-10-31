"use strict"

const headerInput=document.querySelector(".header-input");
const  lowInput=document.querySelector(".low-imput");
const  loginError=document.querySelector(".login-error");
const headerButton=document.querySelector(".header-but");

const pattern= /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



const compareFunc=()=>{


if(!pattern.test(headerInput.value)){

    

    loginError.style.display="block";

    console.log("broken")


}


if(pattern.test(headerInput.value)){

    

    loginError.style.display="none";



}







}





   
headerButton.addEventListener("click",()=>{
    compareFunc()

})





headerInput.addEventListener("keypress",(e)=>{
    console.log(e)

    if(e.key==="Enter"){

        compareFunc()

    }


})
