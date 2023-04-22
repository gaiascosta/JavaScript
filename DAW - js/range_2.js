var minValue = parseInt(prompt("Digite o mínimo: "));
var maxValue = parseInt(prompt("Digite o máximo: "));
var iValue = parseInt(prompt("Digite a variação: "));


function range(min, max, i)
{
    let array = [];
    for(min; min < max; min+=i)
    {
        array.push(min);
    }
    return array;
}

console.log(range(minValue + 1, maxValue, iValue));