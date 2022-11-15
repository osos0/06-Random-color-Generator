const divEl = document.querySelector(".conaner");
// console.log(divEl.innerHTML);

function ranColor() {
  for (let i = 0; i < 30; i++) {
    const creatEl = document.createElement("div");
    creatEl.classList.add("colorDef");
    // creatEl.classList.add("colorDef");  //another answer
    const inOfColor = "0123456789abcdef";
    let num1 = Math.floor(Math.random() * inOfColor.length);
    let num2 = Math.floor(Math.random() * inOfColor.length);
    let num3 = Math.floor(Math.random() * inOfColor.length);
    let num4 = Math.floor(Math.random() * inOfColor.length);
    let num5 = Math.floor(Math.random() * inOfColor.length);
    let num6 = Math.floor(Math.random() * inOfColor.length);
    let val = `#${inOfColor[num1]}${inOfColor[num2]}${inOfColor[num3]}${inOfColor[num4]}${inOfColor[num5]}${inOfColor[num6]}`;
    creatEl.style.backgroundColor = `${val}`;
    creatEl.innerHTML = `${val}`;
    divEl.appendChild(creatEl);
  }
}
ranColor();
