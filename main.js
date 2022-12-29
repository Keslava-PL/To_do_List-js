let mainList = [];
let ul = document.getElementById("checkList");
let addButton = document.getElementById("addButton");
let completedCheck = document.getElementById("completedCheck");

function checkedMarkedOn() {
  //console.log('in');
  if (completedCheck.checked) {
    let checkedBoxList = document.querySelectorAll(".checkListBox");
    let checkedTable = [];

    if (checkedBoxList.length > 0) {
      for (let i = 0; i < checkedBoxList.length; i++) {
        if (checkedBoxList[i].checked) {
          checkedTable.push({titleBar:String(checkedBoxList[i].name), checking: true });
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
function showList(list) {
  clearCheckedList();
console.log("view",list)
  if (list.length > 0) {
    /*for (let i = 0; i < list.length; i++) {
     
     
      let li = document.createElement("li");
      li.className = "checkedLiPoint";
      let check = document.createElement("input");

      check.type = "checkbox";
      check.className = "checkListBox";
      check.name = list[i].titleBar.toString();
      check.value = "value";
      if(list[i].checking === true){
        check.checked = true;
      }

      li.appendChild(document.createTextNode(list[i]));
      li.appendChild(check);

      ul.appendChild(li);
    }
*/
list.forEach(function (item){
  
  let li = document.createElement("li");
  li.className = "checkedLiPoint";
  let check = document.createElement("input");

  check.type = "checkbox";
  check.className = "checkListBox";
  check.name = item.titleBar;
  check.value = "value";

  if(item.checking===true)
  {
    check.checked = true;
  }
  li.appendChild(document.createTextNode(item.titleBar));
  li.appendChild(check);

  ul.appendChild(li);

});


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
 // mainList.push(texto.value);
 mainList.push({titleBar: texto.value, checking: false});

 console.log(mainList);
  showList(mainList);
});

completedCheck.addEventListener("change", checkedMarkedOn);
