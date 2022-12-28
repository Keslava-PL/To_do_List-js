var mainList = [];
var ul = document.getElementById("checkList");
var addButton = document.getElementById("addButton");
var completedCheck = document.getElementById("completedCheck");

function checkedMarkedOn() {
  //console.log('in');
  if (completedCheck.checked) {
    let checkedBoxList = document.querySelectorAll(".checkListBox");
    let checkedTable = [];

    if (checkedBoxList.length > 0) {
      for (var i = 0; i < checkedBoxList.length; i++) {
        if (checkedBoxList[i].checked) {
          checkedTable.push(checkedBoxList[i].name);
        }
      }
      console.log("i",checkedTable);
      showList(checkedTable);
      
    }
  } else {
    showList(mainList);
  }
}

//showing checkbox list
function showList(lista) {
  clearCheckedList();

  if (lista.length > 0) {
    for (var i = 0; i < mainList.length; i++) {
      var li = document.createElement("li");
      li.className = "checkedLiPoint";
      var check = document.createElement("input");

      check.type = "checkbox";
      check.className = "checkListBox";
      check.name = lista[i];
      check.value = "value";

      li.appendChild(document.createTextNode(lista[i]));
      li.appendChild(check);

      ul.appendChild(li);
    }
  }
}

//clearing list and clearing mainList table;
function clearCheckedList() {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
    console.log("test");
  }
}

addButton.addEventListener("click", function () {
  const texto = document.getElementById("textInput");
  mainList.push(texto.value);
  showList(mainList);
});

completedCheck.addEventListener("change", checkedMarkedOn);
