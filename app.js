var btnInput = document.querySelector("#btn-input");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

    function errorHandler(error)
    {
        console.error("server down")
    }
    function getUrlText(text)
    {
        return "https://api.funtranslations.com/translate/minion.json?text="+text;
    }
    function clickHandler()
    {
        fetch(getUrlText(txtInput.value))
        .then(response => response.json())
        .then(json => txtOutput.innerText = json.contents.translated)
    }
    txtOutput.addEventListener("click",clickHandler);