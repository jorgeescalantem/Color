
    function valida(f) {
        var ok = true;
        var ok1=true;
        var ed = document.getElementById("edad").value;
        var nn = document.getElementById("nNombre").value;
        var patt = new RegExp(/^[A-Za-z\s]+$/g);
        var ok2 = patt.test(nn);
        //console.log("res"+ok2);
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
     var checkBoxm = document.getElementById("masculino");
     var checkBoxf = document.getElementById("femenimo");
     var marcadof=true;
     var marcadom = true;
     var msgmarca="debe seleccionar un genero";


     var frame = document.getElementById("pp");
     if (checkBoxm.checked == true ) {
         frame.style.backgroundColor = "#67d039 ";
        marcadom;
         marcadof=false; 
     } else if (checkBoxf.checked == true) {
         marcadom = false;
         marcadof;
         frame.style.backgroundColor = "#edd633";  
     } 
     else  {
         frame.target;
         alert(msgmarca);
     } 
    }



