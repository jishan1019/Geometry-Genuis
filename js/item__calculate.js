function inputToNumber(inputNmuberIdOne, inputNmuberIdTwo){

    const inputElementOne = document.getElementById(inputNmuberIdOne).value;
    const inputNumberOne = parseInt(inputElementOne);

    const inputElementTwo = document.getElementById(inputNmuberIdTwo).value;
    const inputNumberTwo = parseInt(inputElementTwo);

    if(inputElementOne.length <= 1 && inputElementTwo.length <=1){
        alert('Please Input Number');
        return
    }else if(inputNumberOne <= 0 && inputNumberTwo<= 0){
        alert('Please Input Positive Number');
        return
    }else{
        const twoInputMultipication = inputNumberOne * inputNumberTwo;
        return twoInputMultipication;
    }
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
    <td> <button>Convert to m</button><sup>2</sup></td>
    `;
    tableContainer.appendChild(tr);
}



let serial = 0;

document.getElementById('btn-triangle').addEventListener('click', function(){
    serial ++;

    const triangleInput = inputToNumber('traingle-input-b','traingle-input-h')

    const traingleInputResult = (triangleInput*0.5).toFixed(2);
    const triangleName = getCardItemName('triangle-titel');
    appendElementTable(traingleInputResult,triangleName);




})

