function mod2(number)
{
    if(number < 0)
    {
        console.log("O número não é divisível por 2");
        return false;
    }
    else if (number == 0)
    {
        console.log("O número é divisível por 2");
        return true;
    }
    else
    {
        mod2(number - 2);
    }
}

var numberValue = prompt("Por Favor, digite o número desejado: ");
mod2(numberValue);