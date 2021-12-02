export function salvarCadastroDoProdutor(data) {
    let dataString = JSON.stringify(data);
    localStorage.setItem('cadastro_produtor', dataString);
}

export function lerCadastroDoProdutor() {
    return JSON.parse(localStorage.getItem('cadastro_produtor'));
}