let toDoList = (function () {

// jQuery

// 1. adding a new item to the list
let btn = $('#button');
let input = $('#input').val()

function newItem() {
    let li = $('<li></li>');
    let inputValue = input.val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("you must write something!");
    } else {
        let list = $('#list');
        list.append(li);
    }
}




// 2. crossing out an item. not sure why we can't do this with just li.on event
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", crossOut);

// 3 adding the delete button "X"
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append("X");
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem() {
    li.addClass("delete");
}
// 3.1 adding .delete from css

// 4. reordering the items
$('#list').sortable();
});