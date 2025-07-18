function saudacao() {
    console.log("Olá, bem-vindo ao sistema!");
}
saudacao();

let dataHora = new Date();
function mostraHora(data) {
    alert(`A hora atual é ${data.getHours()}:${data.getMinutes()}`);
}
mostraHora(dataHora);

let largura = 3;
let altura = 4;
function calculaAreaDoRetangulo(largura, altura) {
    let total = largura * altura;
    console.log(`A área do retângulo é ${total}`);
}
calculaAreaDoRetangulo(largura, altura);

let num = 8;
function ePar(numero) {
    let resultado = numero % 2;
    if (resultado == 0)
        return true;
    else return false;
}
console.log(`O número ${num} é ${ePar(num)} para par`);

let nome = "Ash";
let n1 = 80;
let n2 = 70;
let n3 = 90;

let media = (n1 + n2 + n3) / 3;

function avaliarAluno(media) {
    if (media >= 70) {
        return `Aluna aprovada`;
    } else {
        return `Aluna reprovada`;
    }
}

console.log(`A aluna é ${nome}, tem média ${media} e sua situação é: ${avaliarAluno(media)}`);
