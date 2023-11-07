for (let row = 2; row <=7; row++){

    let textForRow = '';
    
    for (let column =3; column <=8; column++){
      if (column <=3){
        textForRow += '#';
      } 
      else if (row == 3- column) {
        textForRow += '#';
      }
      else {
        textForRow += '.'
      }
    }
    console.log(textForRow);
    
    }
    
    
    // 2.
    
    for (let row = 1; row <=5; row++){
    
      let textForRow = '';
    
      for (let column =1 ; column <= 8; column++){
        if (column === 3 || row === column) {
          textForRow += '#';
        } 
        else if (row == column)  {
          textForRow += '#';
        }
        else {
          textForRow += '.'
        }
      }
      console.log(textForRow);
    
      }
      for (let row = 1; row <= 5; row++) {
        let textForRow = '';
    
        for (let column = 1; column <= 8; column++) {
          if (column === 6 ) {
            textForRow += '#';
          } else {
            textForRow += '.';
          }
        }
    
        console.log(textForRow);
      }
    
     //steg 3//
     const readline = require('readline');
    
     const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
     }); 
    
     function displayMenu() {
      console.log("Menu");
      console.log("0.Display Figure 1");
      console.log("0.Display Figure 2");
     }
    function displayFigure1(){
      console.log("1")
      console.log("2")
      console.log("3")
      console.log("4")
      console.log("5")
    }
    function displayFigure2(){
      console.log("1")
      console.log("2")
      console.log("3")
      console.log("4")
      console.log("5")
      console.log("4")
      console.log("5")
      }
    function askForFigure(){
      displayMenu();
    
    
      rl.question('Enter the number of the figure you want to display:', (answer) => {
        if (answer ==='0'){
          displayFigure1()
    
        } else if (answer === '1') {
            displayFigure2();
        } else {
            console.log('Invalid input. Please enter either "0" or "1".');
        }
    
        rl.close();
    });
    }
    const readline = require('readline');
    
     const readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout
     }); 
    
     function displayMenu() {
      console.log("Menu");
      console.log("0.Display Figure 1");
      console.log("1.Display Figure 2");
     }
    function displayFigure1(){
      console.log("1")
      console.log("2")
      console.log("3")
      console.log("4")
      console.log("5")
    }
    
    function askForFigure(){
      displayMenu();
    
    
      rl.question('Enter the number of the figure you want to display:', (answer) => {
        if (answer === '0' ){
          displayFigure1()
    
        } else if (answer === '1') {
            displayFigure2();
    
        } else {
            console.log('Invalid input. Please enter either "0" or "1".');
        }
    
        rl.close();
    });
    }
    askForFigure();
    