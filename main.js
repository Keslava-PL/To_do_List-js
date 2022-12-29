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
      
      showList(checkedTable);
      
    }
  } else {
    showList(mainList);
  }
}

//showing checkbox list
function showList(list) {
  clearCheckedList();

if (list.length > 0) {

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
 //check if word is on the list
if(checkRepeating(texto.value)===true)
{
  alert('Ufff... Zadanie o tej nazwie juz znajduje się na liście!');
}
else if(texto.value === ""){
  alert('Podaj nazwę zadania :)')
}
else{
  mainList.push({titleBar: texto.value, checking: false});

  console.log(mainList);
   showList(mainList);
}

});

function checkRepeating(word){
 let answer = false;
  if(mainList.length>0){
    mainList.forEach(function(index){
      if(index.titleBar === word){
        console.log("w");
        answer = true;
      } 
    });
  }
  
  return answer;
}

completedCheck.addEventListener("change", checkedMarkedOn);
