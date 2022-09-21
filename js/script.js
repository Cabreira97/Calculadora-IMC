//IMC DATA
const data = [{
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
]
// Seleção de elementos
const imcTable = document.querySelector("#imc-table");
 //querySelector esta selecioando 
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");
//Funções
function createTable(data) {
  data.forEach((item) => { //Esta percorrendo minha array com forEach

    const div = document.createElement("div") //estou criando uma div com createElement
    div.classList.add("table-data") //criando a class Table-data

    const classification = document.createElement("p") //estou criando a tag p para escrever com innerHTML a menssagem 
    classification.innerHTML = item.info

    const info = document.createElement("p")
    info.innerHTML = item.classification

    const obesity = document.createElement("p")
    obesity.innerHTML = item.obesity


    div.appendChild(info)
    div.appendChild(classification) // Estou botando em ordem o que deve aparecer na tela 

    div.appendChild(obesity)

    imcTable.appendChild(div) //Estou bottando na tabela as informações da div
  });
}
function cleanInputs(){ // passando o valor vazio após a função ser exercutada
  heightInput.value = "";
  weightInput.value = "";
}
//Inicialização do projeto
createTable(data);// estou chamando a função

//Eventos

//Limpando os inputs ao aperta o botão
clearBtn.addEventListener("click", (e) =>{//adicionando um evento
  e.preventDefault()
  cleanInputs()
})