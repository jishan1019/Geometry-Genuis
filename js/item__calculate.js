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
    <td> <button>Convert to m</button><sup>2</sup></td>
    `;
    tableContainer.appendChild(tr);
}



let serial = 0;

document.getElementById('btn-triangle').addEventListener('click', function(){
    serial ++;

    const triangleInput = inputToNumber('traingle-input-b','traingle-input-h')

    if(triangleInput <= 0){
        alert('Please Provide Number')
        return
    }else{
        const traingleInputResult = (triangleInput*0.5).toFixed(2);
        const triangleName = getCardItemName('triangle-titel');
        appendElementTable(traingleInputResult,triangleName);
    }

})

