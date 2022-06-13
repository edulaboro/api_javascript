let lista = document.querySelector("#lista")
let tabela = document.querySelector("#tabela")
let campoBusca = document.querySelector("#campo")
let btnFiltrar = document.querySelector("#filtrar")


//let lista = document.querySelector("#lista")
// ASYNC informa que a função é assincrona
async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"

    // AWAIT aguarda a informação ser recebida
    
    try { 
        let resultado = await fetch(url)
        
        const dados = await resultado.json()
        
        // ELEMENTOS é uma nomeclatura gerada pelo desenvolvedor e NAME é um elemento da API
        for (elementos of dados.results) {
            //console.log (`Sou ${elementos.name} nasci no ano ${elementos.birth_year}`)
            console.log(elementos)
            //Criando elementos html dinamicamente
           
            const linha = document.createElement("tr")
            const tdNome = document.createElement("td")
            const tdGender = document.createElement("td")
            const tdHeight = document.createElement("td")

            //Criando o conteúdo das colunas

            tdNome.textContent = elementos.name
            tdGender.textContent = elementos.gender
            tdHeight.textContent = elementos.height

            // Adicionando os elementos em suas respectivas tags MAE/PAI

            linha.appendChild(tdNome)
            linha.appendChild(tdGender)
            linha.appendChild(tdHeight)

            tabela.appendChild(linha)

        }

        //console.log (dados.results)
        
    } catch (error) {
        
    }

    
}

async function filtrarDados(idPersonagem){
    const url = `https://swapi.dev/api/people/${idPersonagem}/?format=json`
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        console.log(dados)

    } catch (error) {
        console.log("O erro é o seguinte: ", error)
    }
}

//carregarDados()
btnFiltrar.addEventListener("click", (evento)=>{
    evento.preventDefault()
    if(campoBusca.value !="" && campoBusca.value >=1 && campoBusca.value <= 82){
        filtrarDados(campoBusca.value)
    }
    else{
        alert("Insira um valor válido no campo para pesquisar")
    }

})