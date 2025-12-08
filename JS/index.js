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
    
