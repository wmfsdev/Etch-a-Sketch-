

    function start() {
        
        squareInput = prompt("Grid size?", 30); // user can establish their own grid size
        generateRows();
        generateDivs();
        cursor();
    }


    function generateRows() {
    
        const secondrow = document.querySelector(`.container`);
    
        for (let i = 0 ; i < squareInput ; i++) {

            const rowcon = document.createElement(`div`);
            rowcon.classList.add(`rowcon`);
            rowcon.setAttribute('style', `height: ${1000 / squareInput}px; flex-grow: 1;`); 
            // sets height of all "rows" to fit evenly into the parent container

            secondrow.appendChild(rowcon);  
    }

    // generates a number of <div> "rows" based on the value entered by the user
        
    }

    function generateDivs() {

        const rowcondivs = document.querySelectorAll(`.rowcon`);

          for (let i = 0 ; i < rowcondivs.length ; i++) { 

                const rowdivs = document.createElement(`div`); 

                rowdivs.classList.add(`rowdivs`);

            for (let n = 0 ; n < rowcondivs.length ; n++) {

                const rowdivs = document.createElement(`div`); 

                rowdivs.classList.add(`rowdivs`);

                rowdivs.setAttribute('style', `height: ${1000 / squareInput}px; flex-grow: 1;`);

                rowcondivs[n].appendChild(rowdivs); 
            }  
            
        }

    }

    // generates another row of divs, this time populating those divs inside the previously created row
    // nested for loop to make sure the second set of divs is iterated through the correct number of times


    function cursor() {
  
        const test = document.querySelectorAll(`.rowdivs, .rowcon`)
  
            test.forEach((div) => {

            div.addEventListener(`mouseover`, function (e) {
                e.target.style.backgroundColor = "cornflowerblue";

            });

        });

            test.forEach((div) => {

            div.addEventListener(`mouseleave`, function (e) {
                e.target.style.backgroundColor = "coral";

            });

        });

    }

    // querySelector for each "square" in the grid to create a "hover" effect for the cursor


    start()


