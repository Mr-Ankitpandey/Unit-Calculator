let fromunit = document.getElementById('from-unit');
let tounit = document.getElementById('to-unit');
let button = document.getElementById('btn');
let ans = document.getElementById('calculated');
var change = document.getElementById('change');
let reset = document.getElementById('rst-btn');

change.addEventListener('click', function(){
    let temp;
    temp = fromunit.value;
    fromunit.value = tounit.value;
    tounit.value = temp;
});

button.addEventListener('click', function() {
    let number = document.getElementById('input').value;
    let fromselected = fromunit.value;
    let toselected = tounit.value;
    let answer;

    if(number == ''){
        alert('Please Enter any Number First');
    }
    else{
        if(fromselected == 'Celsius')
        {
            if(toselected == 'Celsius'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Fahrenheit'){
                answer = (number * (9/5)) + 32;
                ans.innerText = `${number}\u00B0C = ${answer}\u00B0F`;
            }
            else if(toselected == 'Kelvin'){
                answer = parseFloat(number) + 273.15;
                ans.innerText = `${number}\u00B0C = ${answer}\u00B0K`;
            }
        }
        else if(fromselected == 'Fahrenheit')
        {
            if(toselected == 'Fahrenheit'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Celsius'){
                answer = ((number - 32) * (5/9)).toFixed(2);
                ans.innerText = `${number}\u00B0CF = ${answer}\u00B0C`;
            }
            else if(toselected == 'Kelvin'){
                answer = (((number - 32) * (5/9)) + 273.15).toFixed(2);
                ans.innerText = `${number}\u00B0F = ${answer}\u00B0K`;
            }
        }
        else if(fromselected == 'Kelvin')
        {
            if(toselected == 'Kelvin'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Celsius'){
                answer = (parseFloat(number) - 273.15).toFixed(2);
                ans.innerText = `${number}\u00B0K = ${answer}\u00B0C`;
            }
            else if(toselected == 'Fahrenheit'){
                answer = (((number - 273.15) * (9/5)) + 32).toFixed(2);
                ans.innerText = `${number}\u00B0K = ${answer}\u00B0F`;
            }
        }
    }
});