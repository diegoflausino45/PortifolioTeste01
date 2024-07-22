document.addEventListener('DOMContentLoaded', function(){
//Seleção de Elementos
const projetos = document.querySelectorAll('.projeto1')
const verMais = document.getElementById('ver_mais')
const verMenos = document.getElementById('ver_menos')
const navProjetos = document.getElementById('nav-projetos')
const navFormacao = document.getElementById('nav-formacao')
const navContatos = document.getElementById('nav-contatos')
const inicio = document.getElementById('inicio')

//Funções
function init(){
    ExibirOcultarProjetos()
    scrollParaNavegacao()
}

function ExibirOcultarProjetos(){
    const primeiroProjeto1 = document.querySelector('.projeto1')
    const tituloProjeto = document.querySelector('.titulo-projeto')

    verMais.addEventListener('click', function(){
        projetos.forEach(function(projeto){
            projeto.classList.remove('d-none')
        })

        
        primeiroProjeto1.scrollIntoView({ behavior: 'smooth' })
        verMais.classList.add('d-none')
        verMenos.classList.remove('d-none')
    })

    verMenos.addEventListener('click', function(){
        setTimeout(function(){
            projetos.forEach(function(projeto){
                projeto.classList.add('d-none')
            })
        },500)
        
        tituloProjeto.scrollIntoView({ behavior: 'smooth' })
        verMenos.classList.add('d-none')
        verMais.classList.remove('d-none')
})
}

function scrollParaNavegacao() {
    navFormacao.addEventListener('click', function() {
        const tituloFormacao = document.getElementById('formacao')
        if (tituloFormacao) {
            tituloFormacao.scrollIntoView({ behavior: 'smooth' })
        }
    })

    navContatos.addEventListener('click', function() {
        const tituloContatos = document.getElementById('contatos')
        if (tituloContatos) {
            tituloContatos.scrollIntoView({ behavior: 'smooth' })
        }
    })

    navProjetos.addEventListener('click', function(){
        const tituloProjeto = document.querySelector('.titulo-projeto')
        if (tituloProjeto) {
            tituloProjeto.scrollIntoView({ behavior: 'smooth' })
        }
    })

    inicio.addEventListener('click', function(){
        const perfil = document.querySelector('.navbar')
        perfil.scrollIntoView({ behavior: 'smooth'})
    })
}


//Eventos
init()
})
