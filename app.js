var btnInput = document.querySelector("#btn-input");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

    var apiUrl = "https://api.funtranslations.com/translate/minion.json"
    
    function getUrlText(text)
    {
        return apiUrl + "?" + "text=" +text;
    }
    
    function errorHandler(error)
    {
        console.error("server down",error);
        alert("server down");
    }
    
    function clickHandler(){
        var urlInput = txtInput.value;
        fetch(getUrlText(urlInput))
        .then(response => response.json())
        .then(json => { 
            var translatedText = json.contents.translated; 
            txtOutput.innerText = translatedText;
            }
            )
        .catch(errorHandler)
    };
    
    txtOutput.addEventListener("click",clickHandler)