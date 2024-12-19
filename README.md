# 🏡 Buscar Endereço com CEP

Este projeto implementa uma funcionalidade de busca de endereço utilizando o serviço da API **ViaCEP**. A aplicação preenche automaticamente os campos de um formulário com os dados do endereço correspondente ao CEP fornecido.

## 📋 Funcionalidades

- Busca de endereço a partir do CEP informado.
- Preenchimento automático de:
  - Logradouro (Rua/Endereço).
  - Bairro.
  - Cidade.
  - Estado (UF).
- Exibição de mensagens de erro para CEP inválido.
- Uso de eventos do DOM para uma experiência interativa.

## 🚀 Tecnologias Utilizadas

- **HTML**: Estrutura do formulário.
- **CSS**: Para estilização, caso aplicável.
- **JavaScript**: Lógica de interação e consumo da API ViaCEP.

## 📦 Como Usar

1. Clone este repositório:
   ```bash
   git clone <https://github.com/AndersonMaxX/consulta-cep-api>
   ```
2. Abra o arquivo HTML no navegador.
3. Insira um CEP no campo designado e saia do campo (evento `focusout`).
4. Os campos de endereço serão preenchidos automaticamente se o CEP for válido.

## 🛠️ Estrutura do Código

### Função `buscarEndereco(cep)`
Esta função realiza os seguintes passos:
1. Faz uma requisição para a API ViaCEP com o CEP informado.
2. Converte a resposta para JSON.
3. Verifica se o CEP existe:
   - Caso exista, preenche os campos do formulário com os dados retornados.
   - Caso não exista, exibe uma mensagem de erro no elemento `#erro`.
4. Trata erros de requisição ou CEP inválido.

### Evento `focusout`
Adicionado ao campo de CEP para disparar a função `buscarEndereco` automaticamente quando o campo perde o foco.

```javascript
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscarEndereco(cep.value));
```

## 🔧 Requisitos

- Navegador atualizado com suporte a ES6.
- Conexão com a internet para acessar a API ViaCEP.

## 🖼️ Exemplo de Uso
### Entrada:
CEP: `01001-000`

### Resultado:
- Logradouro: Praça da Sé
- Bairro: Sé
- Cidade: São Paulo
- Estado: SP

## ⚠️ Observações
- A API ViaCEP funciona apenas para CEPs do Brasil.
- Certifique-se de que o CEP está no formato correto (#####-### ou #######).

## 📝 Licença
Este projeto é de livre utilização e distribuição, conforme os termos da licença [MIT](LICENSE).


## 🥁 Experimente Agora!



🔗  [Clique aqui](https://andersonmaxx.github.io/consulta-cep-api/) para acessar o projeto online.

## 🖋️ Autor

[](https://github.com/AndersonMaxX/alura-midi#%EF%B8%8F-autor)

Projeto desenvolvido como parte dos cursos da  [Alura](https://www.alura.com.br/), com minha colaboração na implementação do JavaScript! 🚀😎 .
