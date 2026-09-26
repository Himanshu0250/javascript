const buttons = document.querySelector('.button')
const body = document.querySelector("body")

button.forEach(function (buttons){
    console.log(buttons)
    buttons.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)

        if(e.target.id == 'grey'){
            body.style.backgrounColor = e.target.id
        }
        if(e.target.id == 'yellow'){
            body.style.backgrounColor = e.target.id
        }
        if(e.target.id == 'blue'){
            body.style.backgrounColor = e.target.id
        }
        if(e.target.id == 'white'){
            body.style.backgrounColor = e.target.id
        }
        if (e.target.id == 'purple') {
            body.style.backgroundColor = e.target.id;
    }
    })
})