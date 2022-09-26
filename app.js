function getnumber(num){
    var res = document.getElementById("result")
    res.value +=num 
    
}

function getresult(){
    var resul = document.getElementById("result")
    resul.value = eval(resul.value)
    
}


function getclear(){
    var cleared = document.getElementById("result");
    cleared.value = "";
    
}