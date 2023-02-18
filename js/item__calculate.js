function inputToNumber(inputNmuberIdOne, inputNmuberIdTwo){

    const inputElementOne = document.getElementById(inputNmuberIdOne).value;
    inputElementOne.value = '';
    const inputNumberOne = parseInt(inputElementOne);

    const inputElementTwo = document.getElementById(inputNmuberIdTwo).value;
    inputElementTwo.value = '';
    const inputNumberTwo = parseInt(inputElementTwo);
    const twoInputMultipication = inputNumberOne * inputNumberTwo;
    return twoInputMultipication;
}

function getCardItemName(cardNameId){
    const itemName = document.getElementById(cardNameId).innerText;
    return itemName;
}

function appendElementTable(Pname,PResult){
    const tableContainer = document.getElementById('table-body-container')
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${PResult}</td>
    <td>${Pname}</td>
    <td><button style="background-color: orange; padding:20px border; border-radius: 5px;color:white;">Convert to m</button><sup>2</sup></td>
    `;
    tableContainer.appendChild(tr);
}

function nullValidationChek(inputOneChek,inputTwoChek){
    const elementOneVlid = document.getElementById(inputOneChek).value.length;
    const elementTwoVlid = document.getElementById(inputTwoChek).value.length;

    return (elementOneVlid+elementTwoVlid);
}

let serial = 0;


document.getElementById('btn-triangle').addEventListener('click', function(){
    const validaton = nullValidationChek('traingle-input-b','traingle-input-h')
    serial ++;
    const triangleInput = inputToNumber('traingle-input-b','traingle-input-h')

    if(triangleInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const traingleInputResult = (triangleInput*0.5).toFixed(2);
        const triangleName = getCardItemName('triangle-titel');

        if(validaton <= 0){
            alert('Please Input Number')
            return
        }else{
            appendElementTable(traingleInputResult,triangleName);
        }
        
    }

})

document.getElementById('btn-ractangle').addEventListener('click', function(){
    const validaton = nullValidationChek('ractangle-input-w','ractangle-input-l')
    serial ++;
    const RactangleInput = inputToNumber('ractangle-input-w','ractangle-input-l')

    if(RactangleInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const ractangleInputResult = (RactangleInput).toFixed(2);
        const RactanlgeName = getCardItemName('ractangle-titel');

        if(validaton <= 0){
            alert('Please Input Number')
            return
        }else{
            appendElementTable(ractangleInputResult,RactanlgeName);
        }
    }
})

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const validaton = nullValidationChek('parallelogram-input-b','parallelogram-input-h')
    serial ++;
    const parallelogramInput = inputToNumber('parallelogram-input-b','parallelogram-input-h')

    if(parallelogramInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const parallelogramInputResult = (parallelogramInput).toFixed(2);
        const parallelogramName = getCardItemName('parallelogram-titel');

        if(validaton <= 0){
            alert('Please Input Number')
            return
        }else{
            appendElementTable(parallelogramInputResult,parallelogramName);
        }
    }
})

document.getElementById('btn-rombus').addEventListener('click', function(){
    const validaton = nullValidationChek('rombus-input-d1','rombus-input-d2')
    serial ++;
    const RombusInput = inputToNumber('rombus-input-d1','rombus-input-d2')

    if(RombusInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const rombusInputResult = (RombusInput*0.5).toFixed(2);
        const rombusName = getCardItemName('rombus-titel');

        if(validaton <= 0){
            alert('Please Input Number')
            return
        }else{
            appendElementTable(rombusInputResult,rombusName);
        }
    }
})

document.getElementById('btn-pentagon').addEventListener('click', function(){
    const validaton = nullValidationChek('pentagon-input-p','pentagon-input-b')
    serial ++;
    const PentagonInput = inputToNumber('pentagon-input-p','pentagon-input-b')

    if(PentagonInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const pentagonInputResult = (PentagonInput*0.5).toFixed(2);
        const pentagonName = getCardItemName('pentagon-titel');

        if(validaton <= 0){
            alert('Please Input Number')
            return
        }else{
            appendElementTable(pentagonInputResult,pentagonName);
        }
    }
})


document.getElementById('btn-ellips').addEventListener('click', function(){
    const validaton = nullValidationChek('ellips-input-a','ellips-input-b')
    serial ++;
    const ellipsInput = inputToNumber('ellips-input-a','ellips-input-b')

    if(ellipsInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const ellipsInputResult = (ellipsInput*0.5).toFixed(2);
        const ellipsName = getCardItemName('ellips-titel');

        if(validaton <= 0){
            alert('Please Input Number')
            return
        }else{
            appendElementTable(ellipsInputResult,ellipsName);
        }
    }
})

