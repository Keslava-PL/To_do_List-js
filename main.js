// -- GLOBAL VARIABLES -- //

let mainList = []; // mainList catches all object with preferences to create checkbox
let ul = document.getElementById("checkList"); // grabs list of ul list in app
let addButton = document.getElementById("addButton"); // grabs Add Button
let completedCheck = document.getElementById("completedCheck"); // grabs Completed Checks checkbox

// -- FUNCTIONS -- //

//Function changes value of attribute on mainList (checking) when checbox is clicked;
function fMarked(e) {
  if (e.target && e.target.matches("input.checkListBox")) {

    //find index of e.targeted element in mainList
    const index = mainList.indexOf(
      mainList.find((o) => o.titleBar === e.target.name)
    );
    
    //if targeted element is checked or unchecked change value of checking in mainList
    if (e.target.checked === true) {
      mainList[index].checking = true;

    } else {
      mainList[index].checking = false;
    }
  }
}
// Function shows only checboxes which are checked or shows all checkboxes
// Return value: void
function checkedMarkedOn() {
  //console.log('in');
  if (completedCheck.checked) {
    let checkedBoxList = document.querySelectorAll(".checkListBox");
    let checkedTable = [];

    if (checkedBoxList.length > 0) {
      for (let i = 0; i < checkedBoxList.length; i++) {
        if (checkedBoxList[i].checked) {
          checkedTable.push({
            titleBar: String(checkedBoxList[i].name),
            checking: true,
          });
        }
      }

      showList(checkedTable);
    }
  } else {
    showList(mainList);
  }
}
//Function creates new checbox, adds checkboxe's preferences
// Returns value: void
function showList(list) {
  clearCheckedList();

  if (list.length > 0) {
    list.forEach(function (item) {
      let li = document.createElement("li");
      li.className = "checkedLiPoint";
      let check = document.createElement("input");

      check.type = "checkbox";
      check.className = "checkListBox";
      check.name = item.titleBar;
      check.value = "value";

      //If checkbox is checked show him as checked
      if (item.checking === true) {
        check.checked = true;
      }
      li.appendChild(document.createTextNode(item.titleBar));
      li.appendChild(check);

      ul.appendChild(li);
    });
  }
}
//Function clears list view
//return value: void
function clearCheckedList() {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
    
  }
}
// function checks reapitings in mainList
// return value: bool
function checkRepeating(word) {
  let answer = false;
  if (mainList.length > 0) {
    mainList.forEach(function (index) {
      if (index.titleBar === word) {
        console.log("w");
        answer = true;
      }
    });
  }
  return answer;
}

// -- EVENT LISTENERS -- //

// Listener adds new checkbox
addButton.addEventListener("click", function () {
  const texto = document.getElementById("textInput");

  //check if word is on the list & return answer if is no added or is already exist
  if (checkRepeating(texto.value) === true) {
    alert("Ufff... A task with this name is already on the list!");
  } else if (texto.value === "") {
    alert("Enter the name of the task :)");
  } else {
    mainList.push({ titleBar: texto.value, checking: false });

    showList(mainList);
    texto.value = "";
  }
});

// Listener shows only cheboxes wich are checked
completedCheck.addEventListener("change", checkedMarkedOn);

//Listener is reacting on the clicking in new added checboxes
ul.addEventListener("click", fMarked);


