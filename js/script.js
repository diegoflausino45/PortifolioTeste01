document.addEventListener('DOMContentLoaded', function(){
//Seleção de Elementos
const navProjetos = document.getElementById('nav-projetos')
const navFormacao = document.getElementById('nav-formacao')
const navContatos = document.getElementById('nav-contatos')
const inicio = document.getElementById('inicio')

//Funções
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

AOS.init();


})
