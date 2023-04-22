var word = prompt('Por favor, digite a palavra desejada: ').toLowerCase;

word = word.replace(" ", "");
var wordReverse = word.split("").reverse().join("");

if (word == wordReverse)
{
    console.log("Essa palavra é um palíndromo");
}
else
{
    console.log("Essa palavra não é um palíndromo");
}