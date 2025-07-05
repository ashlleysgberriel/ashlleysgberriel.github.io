const result=document.querySelector(".result")

const criaItem= (elemHtml, atrib, valor) => {
    const obj= document.createElement(elemHtml)
    obj[atrib]=valor
    return obj
}

receitas.forEach( function(receita) {
    result.appendChild(criaItem("h3", "textContent", receita.nome))
    result.appendChild(criaItem("p", "textContent", receita.descricao))
    result.appendChild(criaItem("img" , "src", receita.foto))
/*
result.appendChild(criaItem("li", textContent, receitas.ingredientes))
result.appendChild(criaItem("p", textContent, receitas.preparo))
*/
//teste
})