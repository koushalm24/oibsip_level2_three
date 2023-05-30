let addbtn = document.getElementById("add");
let input = document.getElementById("input");
let todolist = document.getElementById("todolist");

addbtn.addEventListener("click", () => {
    if(input.value==""){
        alert("Input Required")
        // Trigger the button element with a click
    }else{

        add();
    }
});
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      if(input.value==""){
        alert("Input Required")
        // Trigger the button element with a click
    }else{

        addbtn.click();
    }
    }
  });
const add = () => {
  todolist.innerHTML += `
<li>
<div class="mainvalue">
${input.value}
</div>
 <button class="trash">Remove</button>
</li>

`;

  input.value = "";
  const savedata = () => {
    let data = [];
    data.push(todolist.innerHTML);
    localStorage.setItem("mylists", JSON.stringify(data));
  };
  savedata();

  let lists = document.querySelectorAll(".trash");

  lists.forEach((list) => {
    list.addEventListener("click", () => {
      list.parentElement.remove();

      savedata();
    });
  });
};

const load = () => {
  data = localStorage.getItem("mylists");
  if (data) {
    data = JSON.parse(data);

    todolist.innerHTML = data;
  }
};

load();
let lists = document.querySelectorAll(".trash");

lists.forEach((list) => {
  list.addEventListener("click", () => {
    list.parentElement.remove();
    savedata();
  });
});





const savedata = () => {
  let data = [];
  data.push(todolist.innerHTML);
  localStorage.setItem("mylists", JSON.stringify(data));
};
