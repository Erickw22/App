/* //Hello world!
let mensagem = "Olá, mundo!"
// "let": onde o valor da variavel pode ser alterado a qualquer momento dentro da aplicação/codigo
mensagem = "italo"

const ola = "Olá, mundo!"
// "const" Onde o valor da variavel não poder ser alterado dentro da aplicação/codigo
// ola = 2 O resultado sera um erro

// {} define o escopo em que se esta trabalhando e excutando as funções

console.log(mensagem);
console.log(ola) */


//Arrays, objetos

/* let metas = [2, "alo"]

console.log(metas[0] + metas[1])

console.log(metas[1]+ " " + metas[0]) */

let meta = {
    value: 'ler um livro por mês',
    checked: true, 
}

let metas = [
    meta, 
    {
        value: "Caminhar 20 minutos todos os dias",
        checked: false,
    }
]

console.log(metas[0].value)



// Manipulação de objetos quando alteramos o valor de alguma das propriedades do objeto
//meta.value = "Não é mais ler um livro"
//meta.log(meta.value)

// function // arrow function
//const criarMeta = () => {}

//function criarMeta () {}