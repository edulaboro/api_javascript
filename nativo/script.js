// ASYNC informa que a função é assincrona
async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"

    // AWAIT aguarda a informação ser recebida
    
    try { 
        let resultado = await fetch(url)
        
        const dados = await resultado.json()
        
        // ELEMENTOS é uma nomeclatura gerada pelo desenvolvedor e NAME é um elemento da API
        for (elementos of dados.results) {
            console.log ('Sou ${elementos.name} nasci no ano ${elementos.birth_year}')
        }

        //console.log (dados.results)
        
    } catch (error) {
        
    }

    
}

carregarDados()