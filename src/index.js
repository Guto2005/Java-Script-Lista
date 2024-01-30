//const é parecido com a variável a diferença é que seu valor não pode ser alterado durante a execução do código
//a função básica do QuerySelector é buscar elementos no DOM com base em um seletor CSS
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

/*uma função de um elemento html(objeto) nada mais é
do que um evento ou seja, uma ação do usuário naquele elemento
*/
buttonElement.onclick = ev => {
  ev.preventDefault();

  //console.log(inputElement.value)
 

  //verifica se o campo input realmente recebeu um valor
  if (inputElement.value) {

    /*createElement =  cria um elemento html para ser utilizado
    posteriormente*/
    const textElement = document.createElement("span");
    //innerHTML = insere um valor dentro do elemento(tag) html especificado
    textElement.innerHTML = inputElement.value;
    /**createElement =  cria um elemento html button para ser utilizado
    posteriormente*/ 
    const btnElement = document.createElement("button");
    //innerHTML = insere um valor dentro do elemento(tag) html especificado, nesse caso será a tag button
    btnElement.innerHTML = "Remover";

    /* /*createElement =  cria um elemento html para ser utilizado
    posteriormente, nesse caso será o li */
    const liElement = document.createElement("li");
  /** appendChild = adiciona na última posição do elemento pai o valor que foi passado a ele, nesse caso está sendo passado aquilo que o usuário digitou no campo input*/
    liElement.appendChild(textElement);
    liElement.appendChild(btnElement);
    

    btnElement.onclick = () => {
      /**removeChild = remove o filho especificado no removeChild, nesse caso
       * será o liElement
       */
      ulElement.removeChild(liElement)  
    }

    ulElement.appendChild(liElement);
    inputElement.value = "";
  }

};
