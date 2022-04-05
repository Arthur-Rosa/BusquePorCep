function montaCep (cep) {
    const cepClear = document.getElementById('cep').value='';

    const tr = document.createElement('tr')
    const cepText = document.createElement('td')
    const logradouro = document.createElement('td')
    const bairro = document.createElement('td')
    const localidade = document.createElement('td')
    const uf = document.createElement('td')
    const u = document.createElement('td')
    cepText.textContent = cep.cep
    logradouro.textContent = cep.logradouro    
    bairro.textContent = cep.bairro
    localidade.textContent = cep.localidade
    uf.textContent = cep.uf

    const tabela = document.getElementById('tabela')
    tabela.appendChild(tr)
    tr.appendChild(cepText)
    tr.appendChild(logradouro)
    tr.appendChild(bairro)
    tr.appendChild(localidade)
    tr.appendChild(uf)
}