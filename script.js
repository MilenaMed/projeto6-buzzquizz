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