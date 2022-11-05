/*________________________________________TELA1________________________________________*/

const urlAPI = 'https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes';
let id;
const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');

getAPI();

function getAPI(){
    const promisse = axios.get(`${urlAPI}`);
    promisse.then(renderQuizzes);
    
}

function createQuizz(){
    window.location = "tela3.html";
}

function changeLayout(){
    const myQuizzes = document.querySelector('.myQuizzes');
    const ulMyQuizzes = document.querySelector('.ulMyQuizzes');
    const myQuizzesEmpty = document.querySelector('.myQuizzesEmpty');

    if(ulMyQuizzes.innerHTML !== null){
        myQuizzes.classList.remove('hidden');
        myQuizzesEmpty.classList.add('hidden');
    }
}

function renderQuizzes(res){
    const liQuizzes = res.data;
    const ulQuizzes = document.querySelector('.quizzes');

    for(let i = 0; i < liQuizzes.length; i++){
        let quizz = liQuizzes[i];
        let layout = `
        <li onclick="playQuizz(${quizz.id})" class="quizz">
            <div class="gradient"><p>${quizz.title}</p></div>
            <img src="${quizz.image}" alt="">
        </li> 
        `
        ulQuizzes.innerHTML += layout;
    }
}

function playQuizz(id){
    const promisse = axios.get(`${urlAPI}/${id}`);
    promisse.then(renderQuizz);
}

/*________________________________________TELA2________________________________________*/

function renderQuizz(res){
    tela1.classList.add('hidden');
    tela2.classList.remove('hidden');
    const quizz = res.data;
    
    console.log(res);
}

function criarQuiz(){
    //window.location = "tela3.html";
}

/*________________________________________TELA3________________________________________*/

// Criação do Quizz

function confirmarCriação(confirmar){
    // let texto = document.querySelector("#Titulo");
    // let imagURL = document.querySelector("#imgURL");
    let qtddPerg = document.querySelector("#qtdPerg");
    // let qtddNiveis = document.querySelector("#qtdNiveis");
    let nPerguntas = parseInt(qtddPerg.value)
    // let nNiveis = parseInt(qtddNiveis.value)

    // try {
    //     url = new URL(imagURL.value)
    //   } catch(err) {
    //     url = false;
    //   }
    
    //  if( 20 <= texto.value.length && texto.value.length < 65 && nPerguntas >= 3 && nNiveis >= 2 && false !== url){

    //     const novoQuizz = {
    //                 title: texto.value,
    //         	    image: imagURL.value,}

        const $divContainerTela31 = document.querySelector('.conteinerTela31');
        $divContainerTela31.classList.add('desativar');
        const $divContainerTela32 = document.querySelector('.conteinerTela32');
        $divContainerTela32.classList.remove('desativar');

        criarPerguntas()

    // } else {
    // alert("Por favor preencha os dados corretamente")
    // }
}

// Criar perguntas

function criarPerguntas(){
    let qtddPerg = document.querySelector("#qtdPerg");
    let nPerguntas = parseInt(qtddPerg.value);
    const perguntasQ = document.querySelector('.conteinerTela32');
    for(let i = 1; i <= nPerguntas; i++){
        let templatePergFch = `
        <div class="perguntasEditaveis">
            <p class="perguntaNum">Pergunta ${i}</p>
           <ion-icon onclick="abrirPerguntas(this)" name="create-outline" class="icone"></ion-icon>
         </div>
         <div class="perguntasAbertas desativar">
        <div class="duplaCaixas">
            Pergunta ${i}
            <input type="text" size="35" value=" Texto da pergunta" id="textoPerg" class="caixaDigitavel" />
           <input type="text" size="35" value=" Cor de fundo" id="cor" class="caixaDigitavel" />
        </div>
       <div class="duplaCaixas">
             Resposta 
           <input type="text" size="35" value=" Resposta correta" id="respCorreta" class="caixaDigitavel" />
           <input type="text" size="35" value=" URL da imagem" id="UrlImagCorreta" class="caixaDigitavel" />
         </div>
        <div class="duplaCaixas">
        Respostas incorretas
             <input type="text" size="35" value=" Resposta incorreta 1" id="incorreta1" class="caixaDigitavel" />
             <input type="text" size="35" value=" URL da imagem 1" id="imgIncorreta1" class="caixaDigitavel" />
        </div>
        <div class="duplaCaixas">
            <input type="text" size="35" value=" Resposta incorreta 2" id="incorreta2" class="caixaDigitavel" />
            <input type="text" size="35" value=" URL da imagem 2" id="imgIncorreta2" class="caixaDigitavel" />
        </div>
        <div class="duplaCaixas">
            <input type="text" size="35" value=" Resposta incorreta 3" id="incorreta3" class="caixaDigitavel" />
            <input type="text" size="35" value=" URL da imagem 3" id="imgIncorreta3" class="caixaDigitavel" />
        </div>
    </div>
        `;
        
        perguntasQ.innerHTML += templatePergFch;
    }
    const irParaNiveis = document.querySelector('.conteinerTela32');
    let habilitarBotão = 
    `
        <button onclick="requisitosPerguntas(this)" class="prosseguirNiveis">
            Prosseguir para níveis
        </button>`;
        
        irParaNiveis.innerHTML += habilitarBotão;
}

function abrirPerguntas(){
    const $perguntasEditaveis = document.querySelector('.perguntasEditaveis');
        $perguntasEditaveis.classList.add('desativar');
        const $perguntasAbertas = document.querySelector('.perguntasAbertas');
        $perguntasAbertas.classList.remove('desativar');

//  TEM QUE ABRIR A PERGUNTA CLICAADA
}

function requisitosPerguntas(){
    let textoPerg = document.querySelector("#textoPerg");
    let PergCor = document.querySelector("#cor");
    let RespIncorreta1 = document.querySelector("#incorreta1");
    // let validos = ["a","b","c","d","e","f","1","2","3","4","6","5"];
    // let i = indice;

    // conferir se a cor só tem esses dados válidos
    // LIMPAR CAIXA DE TEXTO AO CLICAR NELA

    if( 20 <= textoPerg.value.length && PergCor.value[0] == "#" && PergCor.value.length == 7 && RespIncorreta1.value.length !== 0){
        console.log(textoPerg.value)
        console.log(PergCor.value)
    }else{
         alert("Por favor preencha os dados corretamente")
         }

}
// ao cliclar no editavel abrir perguntas
// seguir requisitos do trello
// só passar para níveis com perguntas todas cumprindo os requisitos