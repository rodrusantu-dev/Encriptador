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