import cipher from './cipher.js';

console.log(cipher);

//funcion para botones

    document.getElementById("encode").addEventListener("click", (e) => {
        e.preventDefault()
        document.getElementById("root").style.display="none";
        document.getElementById("pageTwo").style.display="block";
    });

    document.getElementById("decode").addEventListener("click", (e) => {
        e.preventDefault()
        document.getElementById("pageThree").style.display="block";
        document.getElementById("pageTwo").style.display="none";
        document.getElementById("root").style.display="none"
    });

    document.getElementById("returnHome").addEventListener("click", ()=>{
        document.getElementById("root").style.display="block";
        document.getElementById("pageTwo").style.display="none";
    });

    document.getElementById("pageRoot").addEventListener("click", ()=>{
        document.getElementById("pageThree").style.display="none";
        document.getElementById("root").style.display="block";
    });

    document.getElementById("clean").addEventListener("click", ()=> {
        write.value = "";
        result.value = "";
        password.value = "";
    });

    document.getElementById("cleanDos").addEventListener("click", ()=> {
        writeDos.value = "";
        resultDos.value = "";
        passwordDos.value = "";
    });

//función de cipher//

//llamar write para que quede en mayúscula//
//que tome el valor de write//
//que tome el valor de password//

//página dos

    document.getElementById("write").addEventListener("keyup", ()=> {
        write.value = write.value.toUpperCase();        
    });

    document.getElementById("send").addEventListener("click", ()=> {
        let write = document.getElementById("write").value;
        let password = parseInt(document.getElementById("password").value);
        document.getElementById("result").value = cipher.encode(write, password);
    });
     
//página tres

    document.getElementById("writeDos").addEventListener("keyup", ()=> {
        writeDos.value = writeDos.value.toUpperCase();        
    });

     document.getElementById("sendDos").addEventListener("click", ()=> {
        let writeDos = document.getElementById("writeDos").value;
        let passwordDos = parseInt(document.getElementById("passwordDos").value);
        document.getElementById("resultDos").value = cipher.decode(writeDos, passwordDos);
   });
