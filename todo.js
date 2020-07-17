//to load the previous

$(document).ready(function(){
    listItems();

});



var options ={weekday : "long" ,month:"short",day:"numeric",year:"numeric"};
var today = new Date();
document.getElementById("date").innerHTML = today.toLocaleDateString("en-GB",options);


var idx=0;


if (localStorage.getItem('todo-list')){  // if  localstorage is not empty
var items = JSON.parse(localStorage.getItem('todo-list'));
}
else{  //if empty then initialize and array
    items=[];
}


document.addEventListener("keyup",function(event){  
    if (event.keyCode == 13){
    
        addList();
    }
});


function trash(index) {
    items.splice(index, 1);
    localStorage.setItem('todo-list', JSON.stringify(items))
    listItems();
  }

  
function addList() {

  var todo = document.querySelector('#typedinput');
  var item = todo.value
  

  if (item == ""){
    alert("type something");
    return;
  }

  items.push({
    value: item,
    index : idx
    
  });
  
  //convert the items to localStorage string
  localStorage.setItem('todo-list', JSON.stringify(items));
  
  // insert the lists itemes 
  listItems();
  
  // clear input box
  todo.value = "";
  idx++;
}



// to display the list on the html
function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {

/*
   list+= '<li>' 
   list+= '<tr>'
   list+= '<td><p class="text" style="display: inline-block;"> '+items[i].value+  '</p></td>'
  list+= '<td><i class="fa fa-trash-o de" onclick="trash('+ i +')"  id=" '+i + '" style="display: inline-block"></i></td>'
  list+= '</tr>' 
  list+=  '</li>'
*/

//list+= '<li>' 
list+= '<tr>'
list+= '<td><p class="text" style="display: inline-block;"> '+items[i].value+  '</p></td>'
list+= '<td><i class="fa fa-trash-o de" onclick="trash('+ i +')"  id=" '+i + '" style="display: inline-block"></i></td>'
list+= '</tr>' 
//list+=  '</li>'


  }
 // document.querySelector("#list_").innerHTML = list;
  document.querySelector("#abc").innerHTML = list;
}
