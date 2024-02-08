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
        if(fromselected == 'Kilogram')
        {
            if(toselected == 'Kilogram'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Gram'){
                answer = number * 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Miligram'){
                answer = number * (1e+6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Pound'){
                answer = (number * 2.20462).toFixed(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Tonne'){
                answer = number / 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Gram')
        {
            if(toselected == 'Gram'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Kilogram'){
                answer = number / 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Miligram'){
                answer = number * 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Pound'){
                answer = (number / 453.6).toFixed(6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Tonne'){
                answer = (number / (1e+6)).toExponential(2);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Miligram')
        {
            if(toselected == 'Miligram'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Kilogram'){
                answer = number / (1e+6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Gram'){
                answer = number / 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Pound'){
                answer = (number / 453600).toExponential(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Tonne'){
                answer = (number / (1e+9)).toExponential(2);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Pound')
        {
            if(toselected == 'Pound'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Kilogram'){
                answer = (number * 0.453592).toFixed(5);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Miligram'){
                answer = number * 453592;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Gram'){
                answer = (number * 453.592).toFixed(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            } 
            else if(toselected == 'Tonne'){
                answer = (number / 2204.62).toFixed(8);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
        else if(fromselected == 'Tonne')
        {
            if(toselected == 'Tonne'){
                ans.innerText = `${number} ${fromselected}`;
            }
            else if(toselected == 'Kilogram'){
                answer = number * 1000;
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Miligram'){
                answer = number * (1e+9);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
            else if(toselected == 'Gram'){
                answer = number * (1e+6);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            } 
            else if(toselected == 'Pound'){
                answer = (number * 2204.62).toFixed(4);
                ans.innerText = `${number} ${fromselected} = ${answer} ${toselected}`;
            }
        }
    }
});

reset.addEventListener('click', function(){
    document.getElementById('input').value = '';
    ans.innerText = ""
})