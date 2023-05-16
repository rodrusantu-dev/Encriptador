//*** BLOCO - CRIPTOGRAFAR ***
let btnCriptografar = document.getElementById('criptografar');   
btnCriptografar.addEventListener('click', () => {

    function  encriptar(){  

        const txtDigitado = document.getElementById("entrada").value;
    
            if (txtDigitado != "") {
                const txtCripto = txtDigitado
                .split(/e/g)
                .join('enter')
                .split(/i/g)
                .join('imes')
                .split(/a/g)
                .join('ai')
                .split(/o/g)
                .join('ober')
                .split(/u/g)
                .join('ufat');
                document.getElementById("saida").value = txtCripto;
                document.getElementById("entrada").value = "";
                document.getElementById("aviso").innerHTML = "&nbsp";
            } else {
                document.getElementById("aviso").innerText = 
                "Digite ou Cole algo Para Criptografar";
            }
    }
    encriptar()
});