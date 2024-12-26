
(async () => {

    const database = require('./db');
    const Pessoa =  require('./pessoa');
    await database.sync();
    
    const novaPessoa = await Pessoa.create({

        nome:'Jorge Batista',
        dt_nasc: '1990-04-08',
        descricao: 'Professor/Programador'

    } );     
}
)();