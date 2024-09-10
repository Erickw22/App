/* const start= () => {
    let count = 0
    while(count <= 10) {
        console.log(count)
        count ++
    }
}

start() */

const start= () => {

    while(true) {
        let opcao = "sair"
        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                return
        }
    }
}

start() 