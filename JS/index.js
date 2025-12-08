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

//EVENTOS:
//onclick:
function eventoClick(){
    alert("Acionou um evento de click")
    document.body.style.background = "yellow";
}

//ondblclick:
function eventoDBLclick(){
    alert("Acionou um evento de duplo click")
    document.body.style.background = "blue";
}

//onmouseover e onmouseout
function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";

}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"
}

//mousemove:
function moveMouse(){
    let p = document.getElementById("texto5");
    //p.append("O mouse moveu :)")
}
//mousedown e mouseup
function clicou(){
    let p = document.getElementById("texto6");
    p.append("Vc clicou!! ");
}

function soltouClique(){
    let p = document.getElementById("texto7");
    p.append("Soltou o clique bb! ");
}
//onfocus:
function limpaTexto(){
    document.getElementById("campoTexto").value = ""
}

//onchange:
function mudou(){
    console.log('mudou');  
}

/*
onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela
*/ 
