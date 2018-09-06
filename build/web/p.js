$(document).ready(function () {

});
    function valida(f) {
        var ok = true;
        var ok1=true;
        var ok2 = true;
        // var checkboxf=document.getElementById("masculino");
        // var checkboxm = document.getElementById("femenino");
        var ed = document.getElementById("edad").value;
        var nn = document.getElementById("nNombre").value;
        var patt = new RegExp(/^[A-Za-z\s]+$/g);
        var ok2 = patt.test(nn);
        console.log("res"+ok2);
        var msg = "Debes escribir algo en los campos:\n";
        var msg1 = "el campo edad solo soporta numeros \n";
        var msg2 = "el campo nombre solo soporta letras y espacios \n";

        if (f.elements[0].value == "") {

            msg += " Usuario\n";
            ok = false;
        }
        if (f.elements["edad"].value == "") {
            msg += "edad";
            ok = false;
        }
        if (ok == false){
            alert(msg);
        }
        //valida campo de texto
        if (ok2 == false){
            alert(msg2);
        }
        ///campo numerico
        if (isNaN(ed)) {
            ok1= false;
        }
        if (ok1 == false)
            alert(msg1);
        return ok;
    

    }
 function color(g) {
     //console.log(g.value);

     var checkBoxm = document.getElementById("masculino");
     var marcadof=true;

     var frame = document.getElementById("pp");
     if (checkBoxm.checked == true) {
         frame.style.backgroundColor = " #67d039"; 
         marcadof=false; 
     } 
     else  {
         marcadof=true;
         frame.style.backgroundColor = "#edd633";  
     } 
//return marcadof;
     console.log(marcadof);
 }

function reSize() {
    try {
        var oBody = ifrm.document.body;
        var oFrame = document.all("ifrm");

        oFrame.style.height = oBody.scrollHeight + (oBody.offsetHeight - oBody.clientHeight);
        oFrame.style.width = oBody.scrollWidth + (oBody.offsetWidth - oBody.clientWidth);
    }
    //An error is raised if the IFrame domain != its container's domain
    catch (e) {
        window.status = 'Error: ' + e.number + '; ' + e.description;
    }
}