let string = "";
let buttons = document.querySelectorAll('.button1 ,.button2,.button5,.button6,.button7,.button8,.button9,.button10,.button11,.button12,.button13,.button14,.button15,.button16,.button17,.button18,.button19');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string)
      document.querySelector('input').value = string;
      }       
    
    else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
      }
    else{
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    } 

  })
})