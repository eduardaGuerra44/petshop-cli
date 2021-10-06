const cachorros = require('./database/cachorros.json');
const fs = require('fs');
module.exports = {
    listar: function () {
        console.table(cachorros)
    },
    descrever: function (pos) {
        if (pos >= cachorros.length || pos < 0) {
            console.error("Cachorro inexistente!");
            return;
        }
        let c = cachorros[pos];
        console.log(`Nome: ${c.nome}, 
        Data de Nascimento: ${c.dataDeNascimento},
        Peso: ${c.peso},
        Sexo: ${c.sexo},`)
        if (c.castrado) {
            console.log('Castrado: Sim');
        } else {
            console.log('Castrado: Não')
        }
        console.log('Vacinas')
        console.table(c.vacinas)
        console.log('Serviços')
        console.table(c.servicos)

    },
    adicionar: function (nome, sexo, castrado, dataDeNascimento, peso,) {
        let cachorros = {
            nome: nome,
            sexo: sexo,
            castrado: castrado,
            dataDeNascimento: dataDeNascimento,
            peso: peso,
            vacinas: [],
            servicos: []


        };
        cachorros.push(cachorros)
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros))

        
    },

    vacinar: function(pos, nomeDaVacina){
         //verificar se um cachorro existe
        if(pos >= cachorros.length || pos < 0){
            console.log('Cachorro Inexistente');
            return; 

        }
        let novaVacina={
            nome: nomeDaVacina,
            data: (new Date()).toISOString().substr(0,10)

        }
        cachorros[pos].vacinas.push(novaVacina); 
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros, null, 4))
    }
   
    
    




   



}





