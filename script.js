/*________________________________________TELA1________________________________________*/

const urlAPI = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';

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
        <li class="quizz">
            <div class="gradient"><p>${quizz.title}</p></div>
            <img src="${quizz.image}" alt="">
        </li> 
        `
    }
}

/*________________________________________TELA2________________________________________*/

/*________________________________________TELA3________________________________________*/