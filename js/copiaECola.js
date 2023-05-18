
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

/*
const btncopiaECola = document.getElementById('copiaECola');
const saida = document.getElementById('saida');
const entrada = document.getElementById('entrada');
const aviso = document.getElementById('aviso');

function copiaECola() {
  const text = saida.value;
  
  navigator.clipboard.writeText(text)
    .then(() => {
      saida.value = '';
      entrada.value = text;
      aviso.innerHTML = '&nbsp;';
    })
    .catch((error) => {
      console.error('Erro ao copiar para a área de transferência:', error);
    });
}

btncopiaECola.addEventListener('click', copiaECola);
*/