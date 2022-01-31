let container= document.getElementById('Goals');
let input = document.getElementById('field')

function createNewGoal(){
  var div = document.createElement("div");
  div.class = "goal";
  div.innerHTML = input.value;
  var newCheckbox = document.createElement("input");
  newCheckbox.type = "checkBox";
  div.appendChild(newCheckbox);
  container.append(div);
  // var Checkbox = document.getElementById('Checkbox').checked
//  } else {
//     text.style.display = "none";
//   }
}



