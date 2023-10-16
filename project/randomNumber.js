// let number1;
// let numbre2;
// alert('AT FIRST YOU NEED TO INSERT 2 RANGE FROM WHERE TO WHERE YOU GEUSS NUMBER');
// number1=prompt('ENTER THE FIRST NUMBER');
// numbre2=prompt('Enter the last range of your game');

// const { count } = require("console");
// const { resourceUsage } = require("process");

// for(let i=1;i<3;i++){
//     const geussNumber=Math.floor(Math.random()*(numbre2-number1)+number1);
//     alert(`Now You have only ${3-i} attempt left`);
//     let number3=prompt('Please Geuss your Number');
//     if(number3===geussNumber){
//         alert('Congratulation!!! You are Win');
//     }else{
//         alert('Your Geuss Wrong Number')
//     }
    
// }

// alert('You Lose The Game');

class randomGeuss {
    constructor() {
        this.minValInput = document.querySelector(".minV");
        this.maxValInput = document.querySelector(".maxV");
        this.form1 = document.getElementById("setValueForm");
        this.form2 = document.getElementById("guessForm");
        this.guessInput = document.querySelector(".gV");
        this.minVal = null; 
        this.maxVal = null;
    }

    setForm1() {
        this.form1.addEventListener('submit', (event) => {
            event.preventDefault();
            const minVal = parseInt(this.minValInput.value);
            const maxVal = parseInt(this.maxValInput.value);

            if (!isNaN(minVal) && !isNaN(maxVal) && minVal<maxVal) {
                this.minVal = minVal;
                this.maxVal = maxVal;
                this.showBar('You have Successfully set the Value!', 'green');
            } else {
                this.showBar('Please Set the Correct value of Min and Max !', 'red');
            }
        });
    }

    guessForm2() {
        if (!isNaN(this.minVal) && !isNaN(this.maxVal)&&!isNaN(this.guessInput.value)) {
            let attempts = 3; 
            this.form2.addEventListener('submit', (event) => {
                event.preventDefault();
                const guess = parseInt(this.guessInput.value); //because Input field can return string we use parseInt to converts it into integer

               //checking that is the input of geuss is null or not

               if (isNaN(guess)) {
                this.emptyInput();
                return;
            }

                let guessNumber = Math.floor(Math.random() * (this.maxVal - this.minVal) + this.minVal);
                console.log(guessNumber);
                if (guess === guessNumber) {
                    this.showBar('You have guessed: ' + guess + ' Congratulation!!! You win', 'blue');
                    this.emptyInput();
                   
                } else {
                    attempts--;
                    if (attempts > 0) {
                        this.showBar('You have guessed: ' + guess + ' This is not correct. ' + attempts + ' attempt(s) left', 'black');
                    } else {
                     
                        this.showBar('You have guessed: ' + guess + '[Out of attempts] GAME OVER', 'red');
                        this.emptyInput();           
                    }
                   
                }
            });
        } else {
            this.showBar('Invalid values for Min and Max or Please make a guess!', 'red');
        }
    }
    

    showBar(message, color) {
        let result = document.querySelector('.showResult');
        result.innerHTML='';
        let div = document.createElement('div');
        let h4 = document.createElement('h4');
        h4.textContent = message;

        div.appendChild(h4);

        div.style.width = '650px';
        div.style.height = '30px';
        div.style.background = color;
        div.style.borderRadius = '5px';

        h4.style.marginLeft = '50px';
        h4.style.color = 'white';
        h4.style.fontFamily = 'monospace';
        h4.style.fontSize = '18px';

        result.appendChild(div);
        
        setTimeout(()=>{
            result.innerHTML='';
        },4000)
      
    }

    emptyInput(){
        this.minValInput.value='';
        this.maxValInput.value='';
        this.guessInput.value='';
    }
}

function mainRandom() {
    let random = new randomGeuss();
    let result = document.querySelector('.showResult');
    result.innerHTML='';
    random.setForm1();
    random.guessForm2();
    

}

mainRandom();


