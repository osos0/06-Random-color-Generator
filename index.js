const divEl = document.querySelector(".conaner");
// console.log(divEl.innerHTML);

for (let i = 0; i < 30; i++) {
  const creatEl = document.createElement("div");
  creatEl.classList.add("colorDef");
  divEl.appendChild(creatEl);
}
