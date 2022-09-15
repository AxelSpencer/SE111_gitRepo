var fName = document.querySelector(`#first-name`)
var lName = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var emailCon = document.querySelector(`#emailCon`)
var phone = document.querySelector(`#phone`)


function e()
{
    var inputs = document.querySelectorAll(`input[type="text"]`)
    var p = document.querySelectorAll(`p`)
    var spans = document.querySelectorAll(`span`)
    var formCon = document.querySelector(`#confirmation`)

    for(let i=0; i<inputs.length;i++)
    {
        if(inputs[i].value == "")
        {
            p[i].style.color= 'red'
            spans[i].innerText = '*'
            spans[i].style.display = 'inline'
        }

        else if(inputs[2].value !== inputs[3].value)
        {
            p[2].style.color= 'red'
            spans[2].innerText = '*'
            spans[2].style.display = 'inline'

            p[3].style.color= 'red'
            spans[3].innerText = '*'
            spans[3].style.display = 'inline'
        }

        else
        {
            p[i].style.color = 'black'
            spans[i].innerText = ''
            spans[i].style.display = 'inline'
        }  

        if ((inputs[2].value === inputs[3].value && inputs[i].value).length > 0)
        {
            formCon.style.display = `block`
            document.querySelector(`#info`).innerText = `${inputs[0].value} ${inputs[1].value}\n
            ${inputs[2].value}\n
            ${inputs[4].value}`
        }

        else
        {
            formCon.style.display = `none`
        }
    }
    

}