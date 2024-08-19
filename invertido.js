
console.log("digite > ");

process.stdin.on("data", function(valor){
    let novo = valor.toString();
    console.log(inverso(novo));
    console.log("digite > ");
});