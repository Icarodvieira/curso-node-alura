function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(palavra => paragrafo[palavra] > 1);
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo,index) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');   
        if(duplicadas){
            textoFinal += `palavras duplicadas no paragrafo ${index + 1}: ${duplicadas}\n`
        }
    });
    return textoFinal;
}

export { montaSaidaArquivo };