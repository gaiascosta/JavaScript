var minValue = parseInt(prompt("Digite o mínimo: "));
var maxValue = parseInt(prompt("Digite o máximo: "));

function range(min, max)
{
    let array = [];
    for(min; min < max; min++)
    {
        array.push(min);
    }
    return array;
}

console.log(range(minValue + 1, maxValue));