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

function random_bg_color(elementIdHover) { 
    var x = Math.floor(Math.random() * 256); var y = Math.floor(Math.random() * 256); var z = Math.floor(Math.random() * 256); var bgColor = "rgb(" + x + "," + y + "," + z + ")"; console.log(bgColor); document.getElementById(elementIdHover).style.background = bgColor;
}



document.getElementById('HoverColor').addEventListener('mouseenter',function(){
    document.getElementById('HoverColor').style.backgroundColor = random_bg_color('HoverColor');
})

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

