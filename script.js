    
    
    button()

    let inputValue;  
    // stores input value generated from either 'input' or 'errorInput' function 

    function start() {

        let element = document.querySelector(".container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
    }   // clears the container of child elements (if there are any) ready to input new grid value

        input()
        generateRows(inputValue);
        generateDivs(inputValue);
        cursor();
    }

    function input() {
        value = prompt("Your canvas has a 1:1 fixed ratio, you will only need to enter a single value. No larger than 100. ", 1); 
            if (value > 100) {
                errorInput();
            } else inputValue = value      
    }

    // user can establish their own grid size


    function errorInput() {
        value = prompt("Remember, no larger than 100. Try again.", 101);
            if (value > 100) {
                errorInput();
            } else inputValue = value;
    }

    // alternative prompt in case user enters grid size greater than 100

    
    function button() {

        const buttoncontainer = document.querySelector(`body`);

        const button = document.createElement(`button`);
        button.classList.add(`button`);
        button.textContent = "Blank Canvas"
        buttoncontainer.insertBefore(button, buttoncontainer.firstElementChild);

        button.addEventListener(`click`, start);
    }

    // button to generate prompt for user determined grid size


    function generateRows(inputValue) {
    
        const secondrow = document.querySelector(`.container`);
    
        for (let i = 0 ; i < inputValue ; i++) {

            const rowcon = document.createElement(`div`);
            rowcon.classList.add(`rowcon`);
            rowcon.setAttribute('style', `height: ${500 / inputValue}px; flex-grow: 1;`); 
            // sets height of all "rows" to fit evenly into the parent container

            secondrow.appendChild(rowcon);  
    }

    // generates a number of <div> "rows" based on the value entered by the user
        
    }

    function generateDivs(inputValue) {

        const rowcondivs = document.querySelectorAll(`.rowcon`);

          for (let i = 0 ; i < rowcondivs.length ; i++) { 

                const rowdivs = document.createElement(`div`); 

                rowdivs.classList.add(`rowdivs`);

            for (let n = 0 ; n < rowcondivs.length ; n++) {

                const rowdivs = document.createElement(`div`); 

                rowdivs.classList.add(`rowdivs`);

                rowdivs.setAttribute('style', `height: ${500 / inputValue}px; flex-grow: 1;`);

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
