
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

