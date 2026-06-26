       const digit = document.querySelectorAll('.digit')
       const inp = document.getElementById('inp')
       const btn = document.querySelectorAll('.operator')
       const power = document.querySelector('.power')

        function displayNum(s){
              let num = s.innerText
              inp.value += num
        }

       
        let num1 =0
        let currentOp = ''

        power.setAttribute('data-status','off')
        
        power.addEventListener('click',()=>{
              let temp = power.getAttribute('data-status')
              if(temp == 'off'){
                     power.setAttribute('data-status','on')
              }else{
                     power.setAttribute('data-status','off')
                     inp.value = null
                     inp.setAttribute('disabled',true)
                     num1 =0 
                     currentOp =''
              }
        })

               function operatorBtn(op){
                  switch(op){
                     case '+':num1 = Number(inp.value);inp.value=null; currentOp = op;break;
                     case '-':num1 = Number(inp.value);inp.value=null; currentOp = op;break;
                     case '*':num1 = Number(inp.value);inp.value=null; currentOp = op;break;
                     case '/':num1 = Number(inp.value);inp.value=null; currentOp = op;break;
                     case '=':
                     switch(currentOp){
                            case '+' : inp.value = num1+ Number(inp.value);break;
                            case '-' : inp.value = num1- Number(inp.value);break;
                            case '*' : inp.value = num1* Number(inp.value);break;
                            case '/' : inp.value = num1/ Number(inp.value);break;
                     }
                     ;break;
                     case 'clear':inp.value=null;break;
              }
        }
