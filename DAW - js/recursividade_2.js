function mod(num, mode)
{
    if(num < 0)
    {
        console.log("O número não é divisível por", mode);
        return false;
    }
    else if (num == 0)
    {
        console.log("O número é divisível por", mode);
        return true;
    }
    else
    {
        mod((num - mode), mode);
    }
}

var numberValue = prompt("Por Favor, digite o numerador: ");
var denoValue = prompt("Por Favor, digite o denominador: ");
mod(numberValue, denoValue);