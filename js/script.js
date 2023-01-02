//*** BLOCO - CRIPTOGRAFAR ***
let btncriptografar = document.getElementById('criptografar');   
btncriptografar.addEventListener('click', () => {

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
                "Digite ou Cole Algo Para Criptografar";
            }
    }

    encriptar()

});

//*** BLOCO - DESCRIPTOGRAFAR ***
let btndescriptografar = document.getElementById('descriptografar');   
btndescriptografar.addEventListener('click', () => {

    const desencriptar = () => {
    const txtColado = document.getElementById('entrada').value;
  
    if (txtColado !== '') {
      const txtCripto = txtColado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
      document.getElementById('saida').value = txtCripto;
      document.getElementById('entrada').value = '';
      document.getElementById('aviso').innerHTML = '&nbsp';
    } else {
      document.getElementById('aviso').innerText =
        'Digite ou Cole Algo Para Descriptografar';
    }
  };
  desencriptar()
});

//*** BLOCO - COPIA E COLA ***
let btncopiaECola = document.getElementById('copiaECola');   
btncopiaECola.addEventListener('click', () => {

    async function  copiaECola(){  

			let text = document.getElementById("saida").value;
			await navigator.clipboard.writeText(text);
			document.getElementById("saida").value = "";
			document.getElementById("entrada").value = text;
			document.getElementById("aviso").innerHTML = "&nbsp";
	}

    copiaECola()

});


//*** BLOCO - LIMPAR CAMPOS ***
let btnlimpar = document.getElementById('limpar');   
btnlimpar.addEventListener('click', () => {

    function  limpar(){  

        document.getElementById("saida").value = "";
        document.getElementById("entrada").value = "";
        document.getElementById("aviso").innerHTML = "&nbsp";
	}

    limpar()

});