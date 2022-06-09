let tabela = createElement("#tabela")
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
            /*
            const itemLista= document.createElement("li")
            itemLista.classList.add("list-group-item")
            itemLista.textContent = `Meu nome é: ${elementos.name} ----- Gênero:${elementos.gender} ---- Altura:${elementos.height}`

            lista.appendChild(itemLista)*/
            document.getElementById("tabela").oppenChild(novaTabela)
        }

        //console.log (dados.results)
        
    } catch (error) {
        
    }

    
}

carregarDados()