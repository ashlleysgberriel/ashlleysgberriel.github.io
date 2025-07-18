const result=document.querySelector(".result")

const criaItem= (elemHtml, atrib, valor) => {
    const obj= document.createElement(elemHtml)
    obj[atrib]=valor
    return obj
}

receitas.forEach( function(filmes) {
    result.appendChild(criaItem("h3", "textContent", filmes.titulo))
    result.appendChild(criaItem("p", "textContent", filmes.resumo))
    result.appendChild(criaItem("p", "textContent", filmes.generos))
    result.appendChild(criaItem("figura" , "src", filmes.figura))
    result.appendChild(criaItem("figura" , "src", filmes.elenco))

    

/*
result.appendChild(criaItem("li", textContent, receitas.ingredientes))
result.appendChild(criaItem("p", textContent, receitas.preparo))
/*

})