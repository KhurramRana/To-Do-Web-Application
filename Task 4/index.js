const rootdiv = document.querySelector("#root");
function showmore() {
  const task = document.createElement("div");
  const textfield = document.createElement("input");
  const val = document.querySelector(".input_text").value;
  textfield.value = val;
  document.getElementsByClassName("input_text")[0].value = "";

  const update = document.createElement("button");
  const del = document.createElement("button");

  update.innerText = "Update";
  del.innerText = "Delete";

  textfield.setAttribute("readonly", "readonly");

  task.appendChild(textfield);
  task.appendChild(update);
  task.appendChild(del);
  rootdiv.appendChild(task);

  update.addEventListener("click", (e) => {
    if (update.innerHTML == "Update") {
      textfield.removeAttribute("readonly");
      textfield.focus();
      update.innerHTML = "Save";
    } else {
      update.innerHTML = "Update";
      textfield.setAttribute("readonly", "readonly");
    }
  });
  del.addEventListener("click", (e) => {
    rootdiv.removeChild(task);
  });
}
