const cipher = {
  
 encode: (write, password)=> {
   if (password === "null" || password === 0) {
     throw new TypeError(alert("ingrese un código válido"));     
   }
    let mensEncod = "";
    for (let i = 0; i < write.length; i++) {
      let asciiNum = write.charCodeAt(i); //letra transformada a N°ASCII
      //considero ASCII desde el 32 para tomar los signos por lo que el residuo es 58% por los caracteres incluidos
      let positionNew = (asciiNum - 32 + password) %58 + 32;
      mensEncod += String.fromCharCode(positionNew);
    }
    return mensEncod;
  },

  decode: (writeDos, passwordDos)=>{
    if (passwordDos === "null" || passwordDos === 0) {
      throw new TypeError(alert("ingrese un código válido"));     
    }
    let mensDecod="";
    for (let i = 0; i < writeDos.length; i++) {
      let asciiNumDos = writeDos.charCodeAt(i);
      let positive = asciiNumDos - 32 - passwordDos;
     // obliga a que el valor sea siempre positvo
      while (positive<0) {
        positive = positive + 58;        
      }
      let positionNewDos = positive % 58 + 32;   
      mensDecod += String.fromCharCode(positionNewDos);   
    }
    return mensDecod;
  },
};

export default cipher;


