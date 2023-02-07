const container = document.querySelector(".container");
const content = document.createElement(`div`);
content.classList.add(`content`);
container.appendChild(content);


function start() {
    
    squareInput = prompt("Grid size?", 3);
    userInput();
    generateRows();
    generateDivs()    
}


function userInput() {
    
    const subdiv = document.querySelector(".content");
  
    for (let i = 0 ; i < squareInput ; i++) {
     
        const subdivrow = document.createElement(`div`);
        subdivrow.classList.add(`subdivrow`);
        subdiv.appendChild(subdivrow);   
        
}
}

function generateRows() {
  
    const secondrow = document.querySelector(".container");
  
    for (let i = 0 ; i < squareInput ; i++) {

        const rowcon = document.createElement(`div`);
        rowcon.classList.add(`rowcon`);
        secondrow.appendChild(rowcon);  
}
     
}

    function generateDivs() {


        const rowcondivs = document.querySelectorAll(".rowcon");
      

          for (let i = 0 ; i < rowcondivs.length ; i++) { 

                const rowdivs = document.createElement(`div`); 

                rowdivs.classList.add(`rowdivs`);

                // rowcondivs[i].appendChild(rowdivs); 

            for (let n = 0 ; n < rowcondivs.length ; n++) {

                const rowdivs = document.createElement(`div`); 

                rowdivs.classList.add(`rowdivs`);

                rowcondivs[n].appendChild(rowdivs); 
            }  
            
        }

    }

    
            
        
    
            
                
  






    // Excuse the terrible naming conventions in my code but if anyone could push me in the right direction that 
    // would be amazing. I'm trying to do the etch a sketch task but using flex instead of grid.
    // In case it's not obvious what I am doing - I am tryin to generate rows of divs that match the 
    // player input (this bit works). I querySelect the surrounding div and populate based off number of 
    // loops (according to user input). Then it gets weird, in each of the newly created div rows I create
    // a new subset of divs (the generateDivs function), again using a for loop to create an equal number of divs
    // as there are rows of divs i.e. 4 div rows should create 4 divs in each row. However, I can only
    // append a single child element into each row. The only way I can create more is to "brute" force it
    // by adding multiple generateDiv()s in the start function up top but obviously thats no good.



    // function test() {

    // for (i=0;i<=3;i++)
    // {
    //     generateDivs();

    // }}
    

    //     const arrayLength = document.querySelectorAll(".content");

    //     Array.from(arrayLength).forEach(() => {
    //             generateDivs();
    //     });

    // }





start()

// const divs = document.querySelectorAll(`.content`);

// divs.forEach((div) => {

//     div.addEventListener(`mouseover`, function (e) {
//         e.target.style.backgroundColor = "red";

//     });

//     div.addEventListener(`mouseleave`, function (e) {
//         e.target.style.backgroundColor = "cornflowerblue";

//     });

    

// });
    
