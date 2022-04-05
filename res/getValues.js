const botaoImportar = document.querySelector('[data-add-button]');

botaoImportar.addEventListener('click', function(e){
    e.preventDefault();
    const cep = document.getElementById('cep').value;

    const xhr = new XMLHttpRequest
    xhr.open('GET', `https://viacep.com.br/ws/${cep}/json/`)

    xhr.addEventListener('load', function(){
        const resposta = xhr.responseText
        // console.log(resposta)

        const cepAdd = JSON.parse(resposta)
        // console.log(cepAdd, typeof cepAdd)
        // console.log(cepAdd.cep)

        montaCep(cepAdd)
    })

    xhr.send()
})