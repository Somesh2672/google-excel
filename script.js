const tHeadRow = document.getElementById('table-heading-row');
const tBody = document.getElementById('table-body');
const boldButton=document.getElementById('bold-btn');
const italicsButton = document.getElementById('italics-btn');
const underlineButton = document.getElementById('underline-btn');

let currentCell;
const columns = 26;
const rows = 100;

for (let col = 0; col < columns; col++) {
    let th = document.createElement('th');
    // col -> 0 
    th.innerText= String.fromCharCode(col+65);
    tHeadRow.append(th);
}

for (let row = 1; row <= rows; row++) { // Row -> 1-100
    // i create a tr
    let tr=document.createElement('tr');
    // number cell
    let th= document.createElement('th');
    // injecting number in th
    th.innerText=row;
    tr.append(th);
    for(let col=0;col<columns;col++){ //COL-> 0->26 // A->Z
        let td = document.createElement('td');
        td.setAttribute('contenteditable','true');
        // unique row and unique col
        // ColRow
        td.setAttribute('id',`${String.fromCharCode(col+65)}${row}`)
        td.addEventListener('focus',(event)=>onFocusFn(event));
        tr.append(td);
    }
    tBody.append(tr);
}

function onFocusFn(event){
    currentCell=event.target;
    document.getElementById('current-cell').innerText=currentCell.id;
    if(currentCell.style.fontWeight==='bold'){
        boldButton.style.backgroundColor='yellow';
    }
    else boldButton.style.backgroundColor='transparent';
}

boldButton.addEventListener('click',()=>{
    if(currentCell.style.fontWeight==='bold'){
        currentCell.style.fontWeight='normal';
    }
    else {
        currentCell.style.fontWeight='bold';
        boldButton.style.backgroundColor='yellow';
    }

    // currentCell.style.fontWeight = currentCell.style.fontWeight==='bold'? 'normal':'bold';
})

italicsButton.addEventListener('click',()=>{
    if(currentCell.style.fontStyle==='italic'){
        currentCell.style.fontStyle='normal';
    }
    else currentCell.style.fontStyle='italic';
})

underlineButton.addEventListener('click',()=>{
    if(currentCell.style.textDecoration==='underline'){
        currentCell.style.textDecoration='none';
    }
    else currentCell.style.textDecoration='underline';
})

// sundays is very 