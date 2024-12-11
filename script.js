let container = document.querySelector(".container");

let range = 32;



let slider = document.querySelector(".slider");

slider.addEventListener("input", function()
{
    clearColors();
    let rangeText = document.querySelector(".rangetext");
    rangeText.textContent = `${this.value} x ${this.value}`;

    range = this.value;
    updateContainer();
})


let newDivs = [];
function updateContainer()
{
    const currentDivs = container.children.length;
    const totalDivs = range * range;
    const boxSize = 480/range;

    if (currentDivs > totalDivs)
    {
        for (let i = currentDivs - 1; i>=totalDivs; i--)
        {
            container.removeChild(container.lastChild);
        }
    }
    else if (currentDivs < totalDivs)
    {
        for (let i = currentDivs; i < totalDivs; i++)
        {
            let newDiv = document.createElement('div');
            newDiv.classList.add("newDiv");
            newDiv.addEventListener('mouseover',function()
            {
                newDiv.style.backgroundColor = "white";
            });
            container.appendChild(newDiv);
            newDivs.push(newDiv);

            
        }

    }

    Array.from(container.children).forEach(newDiv => {
        newDiv.style.width = `${boxSize}px`;
        newDiv.style.height = `${boxSize}px`;
    });

}
function clearColors()
    {
        console.log('RESET');
        newDivs.forEach(div =>
        {
            div.style.backgroundColor = "black";
        }
        );
    }
resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', clearColors());

updateContainer();


function clearColors()
{
    console.log('RESET');
    newDivs.forEach(div =>
    {
        div.style.backgroundColor = "black";
    }
    );
}
resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', clearColors);






