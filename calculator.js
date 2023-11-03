document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('.button');
    let string = "";
  
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
          try {
            string = eval(string);
            input.value = string;
          } catch (error) {
            input.value = 'Error';
            string = '';
          }
        } else if (e.target.innerHTML == 'AC') {
          string = "";
          input.value = string;
        } else if (e.target.innerHTML == 'DE') {
          string = string.substring(0, string.length - 1);
          input.value = string;
        } else if (e.target.innerHTML == '√') {
          string = Math.sqrt(eval(string));
          input.value = string;
        } else if (e.target.innerHTML == 'x²') {
          string = Math.pow(eval(string), 2);
          input.value = string;
        }  else if (e.target.innerHTML == 'x³') {
            string = Math.pow(eval(string), 3);
            input.value = string;
        }
        else if (e.target.innerHTML == 'Deg') {
          string = eval(string) * (Math.PI / 180);
          input.value = string;
        } else {
          string += e.target.innerHTML;
          input.value = string;
        }
      });
    });
  });
  