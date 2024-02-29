const page1 = document.querySelector(".page-1")
const page2 = document.querySelector(".page-2")

function messageFortune(){
    const res = document.getElementById('res')
    let messageNumber = Math.round(Math.random()*10)
    togglePage()

    switch (messageNumber){
        case 0:
            res.innerText = '"Você está prestes a encontrar um unicórnio roxo voando sobre sua casa. Esteja preparado!"'
            return
        case 1:
            res.innerText = '"Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."'
            return
        case 2:
            res.innerText = '"O sucesso é a soma de pequenos esforços repetidos dia após dia."'
            return
        case 3:
            res.innerText = '"Grandes oportunidades surgem daqueles que estão dispostos a arriscar."'
            return
        case 4:
            res.innerText = '"A vida é uma jornada, não um destino."'
            return
        case 5:
            res.innerText = '"As melhores coisas da vida muitas vezes vêm de experiências inesperadas."'
            return
        case 6:
            res.innerText = '"A persistência é o segredo do êxito."'
            return
        case 7:
            res.innerText = '"Acredite em si mesmo e tudo será possível."'
            return
        case 8:
            res.innerText = '"A felicidade está dentro de você, não a procure em outro lugar."'
            return
        case 9:
            res.innerText = '"O sorriso é o idioma universal da bondade."'
            return
        case 10:
            res.innerText = '"A sabedoria começa na admiração."'
            return
        default:
            console.log('fail')
            return
    }
}

function restart(){
    togglePage()
}

function togglePage(){
    page1.classList.toggle('hide');
    page2.classList.toggle('hide');
}