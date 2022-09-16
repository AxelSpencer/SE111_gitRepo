function e()
{
    var inputs = document.querySelectorAll(`input[type="text"]`)
    var p = document.querySelectorAll(`p`)
    var spans = document.querySelectorAll(`span`)
    var formCon = document.querySelector(`#confirmation`)
    
    var check = true

    for(let i=0; i<inputs.length;i++)
    {
        if(inputs[i].value == "")
        {
            p[i].style.color= `red`
            spans[i].innerText = `*`
            spans[i].style.display = `inline`
            check = false
        }

        else if(inputs[2].value !== inputs[3].value)
        {
            p[2].style.color= `red`
            spans[2].innerText = `*`
            spans[2].style.display = `inline`

            p[3].style.color= `red`
            spans[3].innerText = `*`
            spans[3].style.display = `inline`
            check = false
        }

        else
        { 
            p[i].style.color = `black`
            spans[i].innerText = ""
            spans[i].style.display = `inline`
        }  

        if (check == true)
        {
            document.querySelector(`#form`).style.display = `none`
            formCon.style.display = `block`
            document.querySelector(`#info`).innerText = `${inputs[0].value} ${inputs[1].value}\n
            ${inputs[2].value}\n
            ${inputs[4].value}`
        }

        else
        {
            document.querySelector(`#form`).style.display = `block`
            formCon.style.display = `none`
        }
    }

    console.log(inputs[0].value)
}
