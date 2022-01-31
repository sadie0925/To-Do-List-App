let container= document.getElementById('Goals');
let input = document.getElementById('field')


function createNewGoal(){
  var div = document.createElement("div");
  div.className = "goal";
  // div.innerHTML = input.value;
  var newCheckbox = document.createElement("input");
  newCheckbox.id = "box";
  newCheckbox.type = "checkbox";
  var newLabel = document.createElement("Label");
  newLabel.setAttribute("for", "box");
  newLabel.innerHTML = input.value;

  // var tasks = document.querySelectorAll(.tasks);
  // for (var i = 0; i < tasks.length; i++) {
  //   tasks[i].onclick = function() {
  //     this. classList.toggle('completed')
  //   }
  // }
  // div. createNewGoal ('click',function(){
  // div. style. textDecoration = "line-through"
  div.appendChild(newCheckbox);
  div.appendChild(newLabel);
  container.append(div);
  // }
  // var Checkbox = document.getElementById('Checkbox').checked
//  } else {
//     text.style.display = "none";
//   }
}



