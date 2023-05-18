
let btnDescriptografar = document.getElementById('descriptografar');   
btnDescriptografar.addEventListener('click', () => {

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

