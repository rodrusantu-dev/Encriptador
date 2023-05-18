//*** BLOCO - CRIPTOGRAFAR ***
const btnCriptografar = document.getElementById('criptografar');
const entrada = document.getElementById('entrada');
const saida = document.getElementById('saida');
const aviso = document.getElementById('aviso');

const substituicoes = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
};

function encriptar() {
  const txtDigitado = entrada.value;

  if (txtDigitado !== '') {
    const txtCripto = txtDigitado.replace(/[eiou]/g, match => substituicoes[match]);
    saida.value = txtCripto;
    entrada.value = '';
    aviso.innerHTML = '&nbsp;';
  } else {
    aviso.innerText = 'Digite ou Cole algo Para Criptografar';
  }
}

btnCriptografar.addEventListener('click', encriptar);
