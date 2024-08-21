const nodemailer = require("nodemailer");

/* const config = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nikolas.boyle88@ethereal.email',
        pass: '1DMWQZBhvafpVWU21P'
}; */
const config = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'keagan.runte@ethereal.email',
        pass: 'rgn8nXYx15uAb72XCk'
    }
}; 

const servidor = nodemailer.createTransport(config);

function enviarEmail(nome, mail, callback)
{
    let conteudo = "<p>Nome: " + nome +"</p>"
    + "<p> Email: " + mail + "</p>";

    let email = {
    from: "edir@prof.com",
    to: "jhenni.bueno@gmail.com",
    subject: "teste de email",
    html: conteudo
    };
        
    servidor.sendMail(email, callback);
}

module.exports = enviarEmail;