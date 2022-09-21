function e()
{
    var nameVal = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/
    var emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var phoneVal = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    var inputs = document.querySelectorAll(`input[type="text"]`)
    var p = document.querySelectorAll(`p`)
    var spans = document.querySelectorAll(`span`)
    var formCon = document.querySelector(`#confirmation`)
    
    var check = true

    if (check == true)
    {
        spans[0].innerText = ""
        if(inputs[0].value == "")
        {
            p[0].style.color= `red`
            spans[0].innerText += `\nError: First name must be filled`
            spans[0].style.display = `inline`
            check = false
        }
        if (nameVal.test(inputs[0].value) == false)
        {
            p[0].style.color= `red`
            spans[0].innerText += `\nError: First name cannot contain special characters`
            spans[0].style.display = `inline`
            check = false
        }
        if (nameVal.test(inputs[0].value) == true && inputs[0].value.length > 0)
        {
            p[0].style.color = `black`
            spans[0].innerText = ""
            spans[0].style.display = `inline`
        }

        //------------------------------------------------------------------------

        spans[1].innerText = ""
        if(inputs[1].value == "")
        {
            p[1].style.color= `red`
            spans[1].innerText += `\nError: Last name must be filled`
            spans[1].style.display = `inline`
            check = false
        }
        if (nameVal.test(inputs[1].value) == false)
        {
            p[1].style.color= `red`
            spans[1].innerText += `\nError: Last name cannot contain special characters`
            spans[1].style.display = `inline`
            console.log("bro")
            check = false
        }
        if (nameVal.test(inputs[1].value) == true && inputs[1].value.length > 0)
        {
            p[1].style.color = `black`
            spans[1].innerText = ""
            spans[1].style.display = `inline`
        }

        //------------------------------------------------------------------------

        spans[2].innerText = ""
        if(inputs[2].value == "")
        {
            p[2].style.color= `red`
            spans[2].innerText += `\nError: Email must be filled`
            spans[2].style.display = `inline`
            check = false
        }
        if (emailVal.test(inputs[2].value) == false)
        {
            p[2].style.color= `red`
            spans[2].innerText += `\nError: Email format not valid`
            spans[2].style.display = `inline`
            check = false
        }
        if (inputs[2].value !== inputs[3].value)
        {
            p[2].style.color= `red`
            spans[2].innerText += `\nError: Email does not match Email Confirmation`
            spans[2].style.display = `inline`
            check = false
        }

        if(inputs[2].value.length > 0 && emailVal.test(inputs[2].value) == true && inputs[2].value == inputs[3].value)
        {
            p[2].style.color = `black`
            spans[2].innerText = ""
            spans[2].style.display = `inline`
        }

        //------------------------------------------------------------------------

        spans[3].innerText = ""
        if(inputs[3].value == "")
        {
            p[3].style.color= `red`
            spans[3].innerText += `\nError: Email Confirmation must be filled`
            spans[3].style.display = `inline`
            check = false
        }
        if (emailVal.test(inputs[3].value) == false)
        {
            p[3].style.color= `red`
            spans[3].innerText += `\nError: Email Confirmation format not valid`
            spans[3].style.display = `inline`
            check = false
        }
        if (inputs[2].value !== inputs[3].value)
        {
            p[3].style.color= `red`
            spans[3].innerText += `\nError: Email Confirmation does not match Email`
            spans[3].style.display = `inline`
            check = false
        }

        if(inputs[3].value.length > 0 && emailVal.test(inputs[3].value) == true && inputs[2].value == inputs[3].value)
        {
            p[3].style.color = `black`
            spans[3].innerText = ""
            spans[3].style.display = `inline`
        }

        //------------------------------------------------------------------------

        spans[4].innerText = ""
        if(inputs[4].value == "")
        {
            p[4].style.color= `red`
            spans[4].innerText += `\nError: Phone number must be filled`
            spans[4].style.display = `inline`
            check = false
        }

        if (phoneVal.test(inputs[4].value) == false)
        {
            p[4].style.color= `red`
            spans[4].innerText += `\nError: Phone number not valid`
            spans[4].style.display = `inline`
            check = false
        }
        if (phoneVal.test(inputs[4].value) == true && inputs[4].value.length > 0)
        {
            p[4].style.color = `black`
            spans[4].innerText = ""
            spans[4].style.display = `inline`
        }
    }

    var person = {
        fname:inputs[0].value,
        lname:inputs[1].value,
        email:inputs[2].value,
        phone:inputs[4].value
    }

    if (check == true)
    {
        document.querySelector(`#form`).style.display = `none`
        formCon.style.display = `block`
        document.querySelector(`#info`).innerText = `${person["fname"]} ${person["lname"]}\n
        ${person["email"]}\n
        ${person["phone"]}`
    }   
}