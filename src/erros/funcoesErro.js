export default function trataErros(erro){
    if(erro.code === 'ENOENT'){
        throw new Error('Arquivo inválido.');
    }else{
        return 'Erro na aplicação';
    }
}
