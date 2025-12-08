//document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS!</b>";
//alert(10 + 5);


/*console.log("OI isso é um console.log")

let x = 10;
{
    let x = 2;
}
    document.getElementById("texto").innerHTML = x; //se colocar dentro do scopo de cima, x passa a ser 2, mas o x global é 10, pois o let funciona assim
*/

//FUNCOES:

function soma(valor1, valor2){

    return valor1 + valor2;

}

document.getElementById("texto").innerHTML = soma(1, 99);

function helloword(){
    alert("Olá amigos! ");
}
//Objetos:
const carro = {
    marca:"chevrolet",
    modelo:"onix",
    ano:2024,
    placa:"EJG0F32",
    buzina: function () {alert('biiiiiiiiiiiiiii')},
    completo: function(){
        return "A marca é " +  this.marca + " e o modelo e "+this.modelo;
    },
    idade: function(atual){
        var idade = atual - this.ano;
        return "A idade do seu carro é " + idade + " ano";
    }
};

console.log(carro);
alert(carro.ano);
document.getElementById("texto").innerHTML = (carro.modelo);
carro.buzina();
document.getElementById("texto2").innerHTML = (carro.completo());
document.getElementById("texto3").innerHTML = (carro.idade(2025));

