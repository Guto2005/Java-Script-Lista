//const é parecido com a variavel a diferença é que seu valor não pode ser alterado durante a execução do código
//a função básica do QuerySelector é buscar elementos no DOM com base em um seletor CSS
const NameInput = document.querySelector("#Name");
const EmailInput = document.querySelector("#Email");
const dayInput = document.querySelector("#day");
const horaInput = document.querySelector("#hora");
const quantidadeInput = document.querySelector("#quantidade");
const addButton = document.querySelector('button[type="submit"]');
const productList = document.querySelector("#product-list");
let totalValueElement = document.querySelector(".totalValue");
const productsContainer = document.querySelector('.products');
let totalValue = 0;

// Função para calcular valores do produto e atualizar a lista
function calculateProductValues(event) {
  event.preventDefault();//basicamente pede para ignorar o evento padrão que seria recarregar a pagina


  // Obtendo valores do input
  const productName = productNameInput.value;
  const productValue = +productValueInput.value; // Convertendo para número

  // Verificando se os campos não estão vazios
  if (productName && productValue) {

    // Exibindo a seção de produtos
    productsContainer.classList.add('show');

    // Criando elementos para o novo produto
    const productItem = document.createElement("li");
    const removeProduct = document.createElement("span");
    removeProduct.classList.add("remove");
    removeProduct.innerHTML = "Remover";

    // Adicionando informações do produto ao item da lista
    productItem.innerHTML = `${productName} R$ ${productValue}`;

    // Adicionando o novo produto à lista
    productList.appendChild(productItem);
    productList.appendChild(removeProduct);

    // Atualizando o valor total
    totalValue += productValue;
    totalValueElement.innerHTML = totalValue;

    // Limpando os campos de input
    productNameInput.value = "";
    productValueInput.value = "";

    // Adicionando um evento de clique para remover o produto
    removeProduct.addEventListener("click", () => {
      productList.removeChild(productItem);
      productList.removeChild(removeProduct);
      totalValueElement.innerHTML = totalValue -= productValue;
    });
  } 
}

// Adicionando um ouvinte de evento para o botão de adicionar
addButton.addEventListener("click", calculateProductValues);

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
