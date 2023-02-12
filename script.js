    
    
    button()

    let inputValue;  
    // stores input value generated from either 'input' or 'errorInput' function
    
    let rgbArray = []

    function start() {

        let element = document.querySelector(".container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }   // clears the container of child elements (if there are any) ready to input new grid value
        
        input()
        generateRows(inputValue);
        generateDivs(inputValue);
        getDivRgb();
        getDivBrightness()
    }
    

    function generateNumber() {
        return Math.floor(Math.random() * 256);     
    }   // will return number between 0 and 255


    function rgbValues() {

        for (let i = 0 ; i < 3 ; i++) {
            rgbArray.push(generateNumber());
        }
    }   // pushes three random values into an RGB array


    function input() {
        value = prompt("Your canvas has a 1:1 fixed ratio, you will only need to enter a single value. No larger than 100. ", 5); 
            if (value > 100) {
                errorInput();
            } else inputValue = value 
    }   // user can establish their own grid size


    function errorInput() {
        value = prompt("Remember, no larger than 100. Try again.", 101);
            if (value > 100) {
                errorInput();
            } else inputValue = value;
    }   // alternative prompt in case user enters grid size greater than 100

    
    function button() {

        const buttoncontainer = document.querySelector(`body`);

        const button = document.createElement(`button`);
        button.classList.add(`button`);
        button.textContent = "Etch that Sketch!"
        buttoncontainer.insertBefore(button, buttoncontainer.firstElementChild);

        button.addEventListener(`click`, start);
    }   // button to generate prompt for user determined grid size


    function generateRows(inputValue) {
    
        const secondrow = document.querySelector(`.container`);
    
        for (let i = 0 ; i < inputValue ; i++) {

            const rowcon = document.createElement(`div`);
            rowcon.classList.add(`rowcon`);
            rowcon.setAttribute('style', `height: ${500 / inputValue}px; flex-grow: 1;`); 
            // sets height of all "rows" to fit evenly into the parent container

            secondrow.appendChild(rowcon);  
        }
    }   // generates a number of <div> "rows" based on the value entered by the user    


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
     }  // generates another row of divs, this time populating those divs inside the previously created row
        // nested for loop to make sure the second set of divs is iterated through the correct number of times

       
    function getDivRgb() {

        const rowDivRtgb = document.querySelectorAll(`.rowdivs`)

        rowDivRtgb.forEach((div) => {
    
        div.addEventListener(`mouseenter`, function (e) {

            let getColor = window.getComputedStyle(div);     
            let divRgb = getColor.getPropertyValue('background-color');

                if (divRgb == "rgb(255, 127, 80)")  {
                    
                    rgbValues() 
                    e.target.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`; 
                    rgbArray.splice(0, 3);
                    
                    div.addEventListener(`mouseleave`, function (e) {     
                    e.target.style.filter = `brightness(0.99)`
                    });
                } 
            });      
        });    
    }   
        // changes div background colour to randomised RGB value for as long as it is not the preset value of
        // 'coral' rgb(255, 127, 80). On mouseleave it sets the div to a new brightness value just under 1
        // to prime it for getDivBrightness(). This creates an imperceptible brightness value change which allows
        // the next function to use that value as its condition in the if statement to darken the targetted div.

    function getDivBrightness() {

        const rowDivRtgb = document.querySelectorAll(`.rowdivs`)

            rowDivRtgb.forEach((div) => {
            div.addEventListener(`mouseover`, function (e) {
        
                if (e.target.style.filter == `brightness(0.99)`) {      
                    e.target.style.filter = `brightness(0.9)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.89)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.89)`) {      
                    e.target.style.filter = `brightness(0.8)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.79)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.79)`) {      
                    e.target.style.filter = `brightness(0.7)`
                    
                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.69)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.69)`) {     
                    e.target.style.filter = `brightness(0.6)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.59)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.59)`) {
                    e.target.style.filter = `brightness(0.5)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.49)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.49)`) {
                    e.target.style.filter = `brightness(0.4)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.39)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.39)`) {
                    e.target.style.filter = `brightness(0.3)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.29)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.29)`) {
                    e.target.style.filter = `brightness(0.2)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.19)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.19)`) {      
                    e.target.style.filter = `brightness(0.1)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.09)`
                        });
                    });


                } else if (e.target.style.filter == `brightness(0.09)`) {
                    e.target.style.filter = `brightness(0.0)`

                    rowDivRtgb.forEach((div) => {
                        div.addEventListener(`mouseleave`, function (e) {
                        e.target.style.filter = `brightness(0.0)`
                        });
                
                    });
                } 
            });                    
        });
    }
    