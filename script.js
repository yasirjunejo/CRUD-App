let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let rollNum = document.querySelector('#rno');
let submitBtn = document.querySelector('.submit');
let table = document.querySelector('table');

let editingRow = null;
submitBtn.addEventListener('click', ()=>{

    if(editingRow){
        // updating row
        editingRow.cells[0].innerText = firstName.value;
        editingRow.cells[1].innerText = lastName.value;
        editingRow.cells[2].innerText = rollNum.value;
        editingRow = null;
    }
    else{
        // Adding new row
        let tr = document.createElement('tr');
        tr.innerHTML =`
            <td>${firstName.value}</td>
            <td>${lastName.value}</td>
            <td>${rollNum.value}</td>
            <td>
                <button class="Edit">Edit</button>
                <button class="Delete">Delete</button>
            </td>
        `;
        table.appendChild(tr);

        // Deleting row
        let delBtn = tr.querySelector('.Delete');
        delBtn.addEventListener('click', ()=>{
            tr.remove();
        });

        // Editing Task
        let editBtn = tr.querySelector('.Edit');
        editBtn.addEventListener('click', ()=>{
            firstName.value = tr.cells[0].innerText;
            lastName.value = tr.cells[1].innerText;
            rollNum.value = tr.cells[2].innerText;
            editingRow = tr;
        });

    }

    firstName.value = '';
    lastName.value = '';
    rollNum.value = '';

});

