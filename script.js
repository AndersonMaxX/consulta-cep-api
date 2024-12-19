// Função assíncrona que busca o endereço com base no CEP fornecido
async function buscarEndereco(cep) {
    // Obtém o elemento HTML que exibe mensagens de erro
    var mensagemErro = document.getElementById('erro');

    // Limpa qualquer mensagem de erro exibida anteriormente
    mensagemErro.innerHTML = "";

    try {
        // Faz uma requisição para a API ViaCEP, passando o CEP fornecido
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        // Converte a resposta da API para um objeto JSON
        var consultaCEPConvertido = await consultaCEP.json();

        // Verifica se a API retornou um erro indicando que o CEP não existe
        if (consultaCEPConvertido.erro) {
            // Lança um erro para ser tratado no bloco "catch"
            throw Error('CEP não existente!');
        }

        // Obtém os elementos HTML correspondentes aos campos do endereço
        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        // Preenche os campos do formulário com os dados retornados pela API
        endereco.value = consultaCEPConvertido.logradouro; // Rua/Logradouro
        bairro.value = consultaCEPConvertido.bairro;       // Bairro
        cidade.value = consultaCEPConvertido.localidade;   // Cidade
        estado.value = consultaCEPConvertido.uf;           // Estado (UF)

        // Exibe os dados do endereço no console (útil para depuração)
        console.log(consultaCEPConvertido);

        // Retorna os dados do endereço para uso adicional, se necessário
        return consultaCEPConvertido;

    } catch (erro) {
        // Se um erro ocorrer (CEP inválido ou outro problema), exibe uma mensagem
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;

        // Exibe detalhes do erro no console (útil para depuração)
        console.log('Algo deu errado:', erro);
    }
}

// Obtém o elemento HTML do campo de CEP
var cep = document.getElementById('cep');

// Adiciona um evento ao campo de CEP que será disparado ao perder o foco
cep.addEventListener("focusout", () => buscarEndereco(cep.value));
