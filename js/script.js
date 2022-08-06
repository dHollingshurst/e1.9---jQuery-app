// jQuery

// 1. adding a new item to the list
let inputValue = $('#input').val();
let li = $('<li></li>');
li.append(inputValue);


if (inputValue === '') {
    alert("you must write something!");
} else {
    let list = $('#list');
    list.append(li);
}

// 2. crossing out an item. not sure why we can't do this with just li.on event
function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});

// 3 adding the delete button "X"
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem() {
    li.addClass("delte");
}
// 3.1 adding .delete from css

// 4. reordering the items
$('#list').sortable();