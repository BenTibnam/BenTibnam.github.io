// classes and ids
var textAreaID = "usertextarea";

var generateHTML = function(){
    let textAreaElement = document.getElementById(textAreaID);

    // adding a new line so we are able to read the last element
    textAreaElement.value += '\n';

    let textAreaValue = textAreaElement.value;
    let textAreaLength = textAreaValue.length;

    let word = "";
    let options = [];
    for (let i = 0; i < textAreaLength; i++)
    {
        let currChar = textAreaValue[i]

        // checking for a new line stop and pushing word to array if \n is found
        if (currChar == '\n')
        {
            options.push(word);
            word = "";
        }

        // building the word
        else
        {
            word += currChar;
        }
    }

    textAreaElement.value = "";

    // generating the HTML with the word list
    let html = "<select>\n"
    for (option in options)
    {
        html += "\t<option>" + options[option] + "</option>\n";
    }
    html += "</select>"

    textAreaElement.value = html
    
}