// armazena as notas dos alunos 
var medias = []
var mediaGeral = 0
// controle da quantidade de alunos
var ln = 0

function adicionar(nome,nota1,nota2,nota3,nota4) {
    document.querySelector('tbody').innerHTML += 

    `<tr id=tr${ln}>
        <td class=tabela-nome> ${nome} </td>
        <td> ${nota1} </td>
        <td> ${nota2} </td>
        <td> ${nota3} </td>
        <td> ${nota4} </td>
        <td class=media> </td>
        <td class=situacao> </td>
        <td class=mediaFinal> </td>
        <td>
            <div class="botao-nota">
                <button class="botao-nota1" onclick="remove(${ln})">
                    <img src="/img/Delete.png">       
                </button>
            </div>
        </td>
    </tr>`
    
    ln += 1
}

function direcionar(){
    
    if (!document.getElementById('nome').value){
        alert('Nome vazio! Insira um nome e tente novamente')
        return
    }

    let nome = document.getElementById('nome').value
    let n1  = parseFloat(document.getElementById('nota1').value)
    let n2  = parseFloat(document.getElementById('nota2').value)
    let n3  = parseFloat(document.getElementById('nota3').value)
    let n4  = parseFloat(document.getElementById('nota4').value)

    media = (n1 + n2 + n3 + n4) / 4
    // arrumar metodo para inserir na posição correta
    medias.push(media)
    mediaGeral += media
 
    adicionar(nome,n1,n2,n3,n4)

    // limpa os inputs depois de usar
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''
    document.getElementById('nota4').value = ''
    
    // controle das linhas
}

// Pega o valor da nota e coloque na tabela,alem da situação e nivel correspodente a media geral
function calcularMedia(){

    // calculo da media geral
    mediaGeral = mediaGeral / ln
    document.getElementById('mediaFinal').innerHTML = `A média geral é ${mediaGeral}`
    
    // alteração dos campos de cada aluno
    for (i = 0; i < ln + 1;i++){
        document.getElementsByClassName('media')[i].innerHTML = medias[i] 
        
        document.getElementsByClassName('situacao')[i].style.color = 'white'
        
        // define a situação do aluno
        if (medias[i] >= 70){
            document.getElementsByClassName('situacao')[i].style.background = 'green'
            document.getElementsByClassName('situacao')[i].innerHTML = 'Aprovado'
        }else if(medias[i] >= 50){
            document.getElementsByClassName('situacao')[i].style.background = 'yellow'
            document.getElementsByClassName('situacao')[i].innerHTML = 'Recuperação'
            
        }else{
            document.getElementsByClassName('situacao')[i].style.background = 'red'
            document.getElementsByClassName('situacao')[i].innerHTML = 'Reprovado'
        }
        
        // determina a posição do aluno media geral
        if (medias[i] > mediaGeral) {
            document.getElementsByClassName('mediaFinal')[i].innerHTML = 'Acima' 
        }else if (medias[i] == mediaGeral){
            document.getElementsByClassName('mediaFinal')[i].innerHTML = 'Mediano' 
        }else {
            document.getElementsByClassName('mediaFinal')[i].innerHTML = 'Baixo' 
        }
    }
}

// Função para limpar a tabela
function remove(linha){
    lnRemove = document.querySelector(`#tr${linha}`)
    document.querySelector('tbody').removeChild(lnRemove)

    ln -= 1
    medias.pop(linha)
}

function validarNumero(num){

    if (num.value[-1] == 'e') num.value 

    if (num.value > 100) {
        alert('Coloque um valor entre 0 e 100')
        num.value = '100'
    }


}