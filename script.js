/*________________________________________TELA1________________________________________*/

const urlAPI = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';
let id;

getAPI()

function getAPI(){
    const promisse = axios.get(`${urlAPI}`);
    promisse.then(renderQuizzes);
}

function renderQuizzes(res){
    const liQuizzes = res.data;
    const ulQuizzes = document.querySelector('.quizzes');

    ulQuizzes.innerHTML = "";

    for(let i = 0; i < liQuizzes.length; i++){
        let quizz = liQuizzes[i];
        ulQuizzes.innerHTML += `
        <li onclick="playQuizz(${quizz.id})" class="quizz">
            <div class="gradient"><p>${quizz.title}</p></div>
            <img src="${quizz.image}" alt="">
        </li> 
        `
    }
}

function playQuizz(id){
    const promisse = axios.get(`${urlAPI}/${id}`);
    promisse.then(renderQuizz);
}

/*________________________________________TELA2________________________________________*/

function renderQuizz(res){
    window.location = "tela2.html";
    const quizz = res.data;
}

/*________________________________________TELA3________________________________________*/

// Criação do Quizz

function confirmarCriação(confirmar){
    let texto = document.querySelector("#Titulo");
    let imagURL = document.querySelector("#imgURL");
    let qtddPerg = document.querySelector("#qtdPerg");
    let qtddNiveis = document.querySelector("#qtdNiveis");
    let nPerguntas = parseInt(qtddPerg.value)
    let nNiveis = parseInt(qtddNiveis.value)

    try {
        url = new URL(imagURL.value)
      } catch(err) {
        url = false;
      }
    
     if( 20 <= texto.value.length && texto.value.length < 65 && nPerguntas >= 3 && nNiveis >= 2 && false !== url){

        const novoQuizz = {
                    title: texto.value,
            	    image: imagURL.value,}

        const $divContainerTela31 = document.querySelector('.conteinerTela31');
        $divContainerTela31.classList.add('desativar');
        const $divContainerTela32 = document.querySelector('.conteinerTela32');
        $divContainerTela32.classList.remove('desativar');

    } else {
    alert("Por favor preencha os dados corretamente")
    }
}

// Criar perguntas
