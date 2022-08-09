function cutSymbolsFromText(text){
    let bannedSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', '\'', '"', '\\', '|', '<', ',', '>', '.', '?', '/'];
    let alertedUser = false;
    let sanitizedWord = "";
    for (let i = 0; i < text.length; i++)
    {
        let currChar = text[i];
        let charBanned = false;
        // checking if the current character is banned
        for (let j = 0; j < bannedSymbols.length; j++){
            let symbol = bannedSymbols[j]
            if (currChar == symbol){
                charBanned = true;
            }

            // alerting user once to banned character found
            if(charBanned && !alertedUser){
                alert(`The illegal symbol '${currChar}' found in option value ${text}. The output may no longer work properly.`);
                alertedUser = true;
            }
        }

        // skipping run if current character is banned
        if (charBanned)
        {
            continue;
        }

        sanitizedWord += currChar;
    }
    
    return sanitizedWord
}

function generateHTML(){
    let options = {
        "selectClassName": document.getElementById("select-class-text").value,
    };

    // getting a list of options    
    let textArea = document.getElementById("usertextarea");
    
    // adding a new line so we can get all option elements
    textArea.value += "\n"; 

    let word = "";
    let optionList = [];
    for (let i = 0; i < textArea.value.length; i++){
        let currChar = textArea.value[i];
        if (currChar == '\n')
        {
            optionList.push(word);
            word="";
            continue;
        }

        word += currChar;
    }

    console.log(optionList)

    textArea.value = "";
    let html="";
    // checking if we need to add a class to the tag
    if (options.selectClassName != "")
    {
        html = `<select class="${options.selectClassName}">\n`;
    }
    else
    {
        html = "<select>\n";
    }


    for(let i = 0; i < optionList.length; i++)
    {
        let optionValue = cutSymbolsFromText(optionList[i].toLowerCase());

        let optionHTML = `\t<option value="${optionValue}">${optionList[i]}</option>\n`;
        html += optionHTML;
    }

    html += "</select>";
    textArea.value = html;
}