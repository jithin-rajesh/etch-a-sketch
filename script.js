let container = document.querySelector(".container");

for (let i = 0; i< 256; i++)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add("newDiv");
    newDiv.setAttribute("style", `background-color: white; height: ${30}; width : 30px; margin: 0 0; `);
    container.appendChild(newDiv);
}