//instalando programas
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");




//configurando o roteamento para teste no postman
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'))
const port = 3001;




//configurando o acesso ao mongodb
mongoose.connect('mongodb://127.0.0.1:27017/ongPlanetaSustentavel',
{  
    useNewUrlParser: true,
    useUnifiedTopology: true
   
});




//criando a model do seu projeto
const usuarioSchema = new mongoose.Schema({
    email : {type : String, required : true},
    senha : {type : String}
    
});



const loginSchema = new mongoose.Schema({
    nome : {type : String},
    telefone : {type : Number},
    emailEntrar : {type : String, required : true},
    senhaEntrar : {type : String, required : true},
    confirmeSenha : {type : String, required : true}
})

const comentarioOngSchema = new mongoose.Schema({
    comentario : {type : String}
})

const Usuario = mongoose.model("Usuario", usuarioSchema);
const Login = mongoose.model("Login", loginSchema);
const Contact = mongoose.model("Contact", comentarioOngSchema)

//roteamento comentario
app.post("/contact", async(req,res)=>{
    const comentario = req.body.comentario;

    const contact = new Contact({
        comentario : comentario
    })

    try{
        const newContact = await contact.save();
        res.json({error : null, msg : "Mensagem enviada com sucesso!!", contactID : newContact._id});
    } 
    catch(error){
        res.status(400).json((error))
    }
})



//roteamento entrar
app.post("/login", async (req,res)=>{
    const nome = req.body.nome
    const telefone = req.body.telefone
    const emailEntrar = req.body.emailEntrar;
    const senhaEntrar = req.body.senhaEntrar;
    const confirmeSenha = req.body.confirmeSenha;


    const login = new Login({

        nome : nome,
        telefone : telefone,
        emailEntrar : emailEntrar,
        senhaEntrar : senhaEntrar,
        confirmeSenha : confirmeSenha

    })

    if(nome==null || telefone==null || emailEntrar==null || senhaEntrar==null || confirmeSenha==null){
        return res.status(400).json({error: "preencha todos os dados"})
    }

    if(senhaEntrar != confirmeSenha){
        return res.status(400).json({error : "as senhas não coincidem"})
    }

    const emailexiste= await Usuario.findOne({email:emailEntrar})
   if(emailexiste){
        return res.status(400).json({error:"o email cadastrado ja existe "})
    }

    try{
        const newLogin = await login.save();
        res.json({error : null, msg : "Cadastro ok", loginId : newLogin._id});
    } catch(error){
        res.status(400).json({error});
    }
})

//roteamento usuario
app.post("/entrar", async(req, res)=>{
    
    const email = req.body.email;
    const senha = req.body.senha

    

    const usuario = new Usuario({
        
        email : email,
        senha : senha,
        
    })


    if(email==null || senha==null){
        return res.status(400).json({error: "preencha todos os dados"})
    }


    if(emailexiste){
        return res.sendFile(__dirname + "/index.html")
    } else {
        return res.status(400).json({error :"os dados estão errados"})
    }


    try{
        const newEntrar = await entrar.save();
        res.json({error : null, msg : "conta acessada com sucesso", entrarId : newEntrar._id});
    } catch(error){
        res.status(400).json({error});
    }
    

});




//rota para o get de cadastro
app.get("/entrar", async(req, res)=>{
    res.sendFile(__dirname +"/entrar.html");
});
app.get("/login", async(req,res)=>{
    res.sendFile(__dirname +"/login.html") 
})
app.get("/contact", async(req,res)=>{
    res.sendFile(__dirname+ "/contact.html")
})
app.get("/about", async(req,res)=>{
    res.sendFile(__dirname+"/about.html")
})



//rota raiz - inw

app.get("/", async(req, res)=>{
    res.sendFile(__dirname +"/index.html");
});




//configurando a porta
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})