//Selectors
const shoppingInput = document.querySelector('.shopping-input');
const shoppingButton = document.querySelector('#shopping-button');
const shoppingList = document.querySelector('.shopping-list');
const filterOption=document.querySelector(".filter-shopping");

//Event Listeners
shoppingButton.addEventListener('click', addShopping);
shoppingList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterShopping);


//Functions

function addShopping(event) {
    //Prevent form from submitting
    event.preventDefault();

    const entry = shoppingList.getElementsByTagName('li');

    for (let i = 0; i < entry.length; i++) {
        text = entry[i].innerText;
        lastSpace = text.lastIndexOf(" ");
        value = text.substring(0, lastSpace);
        if(value === shoppingInput.value) {
            alert("Maaf ada item yang sama");
            shoppingInput.focus();
            return;
        }
    }
    //Shopping DIV
    const shoppingDiv = document.createElement("div");
    shoppingDiv.classList.add("shopping");
    //Create LI
    const newShopping = document.createElement('li');
    newShopping.innerText = shoppingInput.value;
    newShopping.classList.add('shopping-item');
    shoppingDiv.appendChild(newShopping);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    shoppingDiv.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    shoppingDiv.appendChild(trashButton);
    //APPEND TO LIST
    shoppingList.appendChild(shoppingDiv);
    //Clear Shopping INPUT VALUE
    shoppingInput.value = "";
} 
function deleteCheck(e) {
    const item = e.target;
    //DELETE SHOPPING
    if (item.classList[0] === "trash-btn") {
        const shopping = item.parentElement;
        shopping.classList.add("fall");
        shopping.remove(); 
    }   
    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const shopping = item.parentElement;
        shopping.classList.toggle("completed");
    }
}