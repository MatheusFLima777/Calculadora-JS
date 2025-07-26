const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

let currentValue = '';
let firstValue = '';
let operator = '';

function updateDisplay() {
  resultDisplay.textContent = currentValue || firstValue;
  console.log(firstValue, currentValue, operator);
}

buttons.forEach(button => {
  const value = button.getAttribute('data-value');
  const text = button.textContent.trim();

  // Números (botões com data-value)
  if (value !== null) {
    button.addEventListener('click', () => {
      currentValue += value;
      updateDisplay();
    });
   
  }
  
  // CE - limpar tudo
  else if (text === 'CE') {
    button.addEventListener('click', () => {
      currentValue = '';
      firstValue = '';
      operator = '';
      updateDisplay();
    });
  }

  // C - apagar último dígito
  else if (text === 'C') {
    button.addEventListener('click', () => {
      currentValue = currentValue.slice(0, -1);
      updateDisplay();
    });
  }

  // Porcentagem
  else if (text === '%') {
    button.addEventListener('click', () => {
      if (currentValue !== '') {
        const num = parseFloat(currentValue);
        currentValue = (num / 100).toString();
        updateDisplay();
      }
    });
  }

  // Soma
  else if (text === '+') {
    button.addEventListener('click', () => {
      if (currentValue !== '') {
        firstValue = currentValue;
        operator = '+';
        currentValue = ''; // limpa para o segundo número
        updateDisplay();
      }
    });
  }

    // Subtração
    else if (text === '-') {
        button.addEventListener('click', () => {
          if (currentValue !== '') {
            firstValue = currentValue;
            operator = '-';
            currentValue = ''; // limpa para o segundo número
            updateDisplay();
          }
        });
    
      }

  // Multiplicação
  else if (text === '*') {
    button.addEventListener('click', () => {
      if (currentValue !== '') {
        firstValue = currentValue;
        operator = '*';
        currentValue = ''; // limpa para o segundo número
        updateDisplay();
        
      }
    
    });
  }
    // Divisão
    else if (text === '÷') {
        button.addEventListener('click', () => {
          if (currentValue !== '') {
            firstValue = currentValue;
            operator = '/';
            currentValue = ''; // limpa para o segundo número
            updateDisplay();
            
          }
        
        });
      }

      // Mais ou menos 
      else if (text === '±') {
        button.addEventListener('click', () => {
          if (currentValue !== '') {
            const num = parseFloat(currentValue);
            currentValue = (-num).toString();
            updateDisplay();
          }
        });
      }
      



  // Igual
  else if (text === '=') {
    button.addEventListener('click', () => {

      if (firstValue !== '' && currentValue !== '') {
        console.log('firstValue:', firstValue);
        console.log('currentValue:', currentValue);
        console.log('operator:', operator);
        console.log(typeof firstValue);
        console.log(typeof currentValue);

        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(currentValue);
        let result = 0;

        if (operator === '+') {
          result = num1 + num2;
        } else if(operator === '-'){
            result = num1 - num2;
        }else if(operator === '*'){
            result = num1 * num2;
        }else if(operator === '/'){
            result = num1 / num2;
        }
        
        currentValue = result.toString();
        firstValue = '';
        operator = '';
        updateDisplay();
      }
    });
  }
});
