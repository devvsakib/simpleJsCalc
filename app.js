const input = document.getElementById('input'),
clear = document.getElementById('clear'),
equal = document.getElementById('equal'),
allButton = document.querySelectorAll('button');
for (let item of allButton) {
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = "*";
        }
        input.value += buttonText;
        equal.addEventListener('click', ()=>{
            inputs =input.value;
            input.value= eval(inputs)
        })
    })
}
clear.addEventListener('click', ()=>{
    input.value = '';
})
//created by DevvSakib