//Split serve pra animação das letras aparecendo lentamente //
//forEach faz um loop de cada letra da parte digitando//
//Declaramos duas variaveis, Letras e o I é o Index valor de cada letra//
// o + serve pra ir somando e aparecer todas as letras e não ficar só trocando//

function escrevendoLetra (){
function ativaLetra(eLemento){
    const arrTexto = eLemento.innerHTML.split('')
    eLemento.innerHTML = ''
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
                eLemento.innerHTML += letra
      }, 75 * i)    
    })

}

const titulo = document.querySelector('.digitando')
ativaLetra(titulo)
}

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
})
