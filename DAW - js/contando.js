var stringValue = prompt("Digite sua string: ");
var charValue = prompt("Digite o character: ");

function countChars(string, char)
{
    var splitString = string.split(char);
    console.log("Ocorrências:", splitString.length - 1);
}

countChars(stringValue, charValue);