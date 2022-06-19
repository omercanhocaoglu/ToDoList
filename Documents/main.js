

let toDoListForm = document.querySelector("#todolistform");

toDoListForm.addEventListener("submit", ToDoListSubmit);

let ToDoListInput = document.querySelector("#todolistinput");



function ToDoListSubmit (event) {

    event.preventDefault();
    console.log("İşlem Yapılıyor...")

    if (ToDoListInput.value) {AddItem(ToDoListInput.value), ToDoListInput.value=""}

   
};


const AddItem = (item) => {
    let ulDom = document.querySelector("#todolistul");

    let createLiDom = document.createElement("li");

   

    createLiDom.innerHTML = `${item}`;

    createLiDom.classList.add("list-group-item", "text-start");

    


    ulDom.append(createLiDom);

};









// Saat Eklentisi buradadır.
setInterval(Timer, 1000);
function Timer () {
    const t = new Date();

    document.querySelector("#timer").innerHTML = t.toLocaleTimeString();
};




