"use strict"

const headerInput = document.querySelector(".header-input");

const lowInput = document.querySelector(".low-input");



const loginError = document.querySelector(".login-error");

const loginErrorLow = document.querySelector(".login-error-low");

const lowButton = document.querySelector(".low-but");

const headerButton = document.querySelector(".header-but");

const pattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



const compareFunc = () => {


    if (!pattern.test(headerInput.value)) {



        loginError.style.display = "block";

        headerInput.style.borderColor = "red";

        console.log("broken")


    }


    if (pattern.test(headerInput.value)) {



        loginError.style.display = "none";

        headerInput.style.borderColor = "#07043B";



    }




}



const compareFuncLow = () => {


    if (!pattern.test(lowInput.value)) {



        loginErrorLow.style.display = "block";

        lowInput.style.border = "1px solid red";

        console.log("broken")


    }


    if (pattern.test(lowInput.value)) {



        loginErrorLow.style.display = "none";

        lowInput.style.borderColor = "#07043B";



    }







}







lowButton.addEventListener("click", () => {
    compareFuncLow()
})





lowInput.addEventListener("keypress", (e) => {
    console.log(e)

    if (e.key === "Enter") {

        compareFuncLow()

    }


})









headerButton.addEventListener("click", () => {
    compareFunc()

})





headerInput.addEventListener("keypress", (e) => {
    console.log(e)

    if (e.key === "Enter") {

        compareFunc()

    }


})
