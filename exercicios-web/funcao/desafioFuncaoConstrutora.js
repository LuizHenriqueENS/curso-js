class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


function Pessoa1(nome = 'Sem nome definido'){
    this.nome = nome
    
    this.falar = function(){
        return console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa1('Luiz Henrique')
p2.falar()