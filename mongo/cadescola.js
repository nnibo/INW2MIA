//configurar a conexao com o mongo db e o banco de dados

const mongoose = require ("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {useNewUrlParser : true, 
     useUnifiedTopology : true,
        serverSelectionTimeoutMS: 20000,
        
    }
);

// executando a conexao

const db = mongoose.connection;

db.on('error ',console.error.bind(console, 'connection error :'));

db.once('open ',function(){
    console.log("Estamos conectados")
});

