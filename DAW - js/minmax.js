var firstNumber = prompt('Por favor, digite o número desejado: ');
var secondNumber = prompt('Por favor, digite o número desejado: ');

function min(a, b)
{
    if (a < b)
    {
        return a;
    }
    else if(a > b)
    {
        return b;
    }
    else
    {
        return "São iguais";
    }
}
function max(a, b)
{
    if (a < b)
    {
        return b;
    }
    else if(a > b)
    {
        return a;
    }
    else
    {
        return "São iguais";
    }
}

console.log("Mínimo: ", min(firstNumber, secondNumber));
console.log("Máximo: ", max(firstNumber, secondNumber));