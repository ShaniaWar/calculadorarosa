let pantalla = document.getElementById('pantalla');
let num1 = "";
let num2 = "";
let op = "";
let nuevo = false;

function num(valor) {
  if (pantalla.value === "0" || nuevo) {
    pantalla.value = valor;
    nuevo = false;
  } else {
    pantalla.value += valor;
  }
}

function oper(signo) {
  num1 = pantalla.value;
  op = signo;
  nuevo = true;
}

function calcular() {
  num2 = pantalla.value;
  let res = 0;

  if (op === "+") res = parseFloat(num1) + parseFloat(num2);
  else if (op === "-") res = parseFloat(num1) - parseFloat(num2);
  else if (op === "*") res = parseFloat(num1) * parseFloat(num2);
  else if (op === "/") {
    if (parseFloat(num2) === 0) {
      pantalla.value = "Error";
      return;
    }
    res = parseFloat(num1) / parseFloat(num2);
  }

  pantalla.value = res;
  nuevo = true;
}

function limpiar() {
  pantalla.value = "0";
  num1 = "";
  num2 = "";
  op = "";
  nuevo = false;
}

function raiz() {
  let valor = parseFloat(pantalla.value);
  pantalla.value = Math.sqrt(valor);
  nuevo = true;
}

function potencia() {
  let valor = parseFloat(pantalla.value);
  pantalla.value = Math.pow(valor, 2);
  nuevo = true;
}
