/*________________________________________TELA1________________________________________*/

const urlAPI = 'https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes';
let id;

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
    window.location = "tela2.html";
    const quizz = res.data;
}

function criarQuiz(){
    window.location = "tela3.html";
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
        <div class="conteinerperguntas" onclick="abrirPerguntas(this)">
        <div class="perguntasEditaveis">
            <p class="perguntaNum">Pergunta ${i}</p>
           <ion-icon name="create-outline" class="icone"></ion-icon>
         </div>
         <div class="perguntasAbertas desativar">
        <div class="duplaCaixas">
            Pergunta ${i}
            <input type="text" size="35" placeholder=" Texto da pergunta" id="textoPerg" class="caixaDigitavel" />
           <input type="text" size="35" placeholder=" Cor de fundo" id="cor" class="caixaDigitavel" />
        </div>
       <div class="duplaCaixas">
             Resposta 
           <input type="text" size="35" placeholder=" Resposta correta" id="respCorreta" class="caixaDigitavel" />
           <input type="text" size="35" placeholder=" URL da imagem" id="UrlImagCorreta" class="caixaDigitavel" />
         </div>
        <div class="duplaCaixas">
        Respostas incorretas
             <input type="text" size="35" placeholder=" Resposta incorreta 1" id="incorreta1" class="caixaDigitavel" />
             <input type="text" size="35" placeholder=" URL da imagem 1" id="imgURL1" class="caixaDigitavel" />
        </div>
        <div class="duplaCaixas">
            <input type="text" size="35" placeholder=" Resposta incorreta 2" id="incorreta2" class="caixaDigitavel" />
            <input type="text" size="35" placeholder=" URL da imagem 2" id="imgURL2" class="caixaDigitavel" />
        </div>
        <div class="duplaCaixas">
            <input type="text" size="35" placeholder=" Resposta incorreta 3" id="incorreta3" class="caixaDigitavel" />
            <input type="text" size="35" placeholder=" URL da imagem 3" id="imgURL3" class="caixaDigitavel" />
        </div>
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

function abrirPerguntas($divCompleta){
    const $perguntasEditaveis = $divCompleta.querySelector('.perguntasEditaveis');
    $perguntasEditaveis.classList.add('desativar');

    const $perguntasAbertas = $divCompleta.querySelector('.perguntasAbertas');
    $perguntasAbertas.classList.remove('desativar');
}

function requisitosPerguntas(){
    let textoPerg = document.querySelector("#textoPerg");
    let PergCor = document.querySelector("#cor");
    let RespIncorreta1 = document.querySelector("#incorreta1");
    let RespIncorreta2 = document.querySelector("#incorreta2");
    let RespIncorreta3 = document.querySelector("#incorreta3");
    let ResCorreta = document.querySelector('#respCorreta');
    let imagURLIncorreta1 = document.querySelector("#imgURL1");
    let imagURLIncorreta2 = document.querySelector("#imgURL2");
    let imagURLIncorreta3 = document.querySelector("#imgURL3");
    let imagURLC = document.querySelector("#UrlImagCorreta");
    
    // conferir se a cor só tem dados válidos
//     try {
//         let RegExp = /^#[0-9A-F]{6}$/i;
//         ehHexa = RegExp.test(PergCor.value)
//     } catch(err) {
//         ehHexa = false
//     }
// console.log(ehHexa.value)
    // conferir se a url da imagem incorreta é válido
//  try {
//        url1 = new URL(imagURLIncorreta1.value)
//      } catch(err) {
//        url1= false;
//      }
// try {
//        url2 = new URL(imagURLIncorreta2.value)
//      } catch(err) {
//         url2= false;
//     }
//     try{
//         url3 = new URL(imagURLIncorreta3.value)
//     } catch(err) {
//          url3 = false;
        // }
// conferir se a url da imagem correta é válido
// try {
//         urlc = new URL(imagURLC.value)
//       } catch(err) {
//         console.log ("oi")
//         urlc = false;
//       }
   
    //   console.log (RespIncorreta3.value)
    if(20 <= textoPerg.value.length && ResCorreta.value.length > 1 ){
        console.log("ola")
        // && urlc !== false
        // && ehHexa !== false
        //&& (RespIncorreta1.value.length > 1 || RespIncorreta2.value.length >  1 || RespIncorreta3.value.length >  1)
        // if(RespIncorreta1.value.length !== 0 || RespIncorreta2.value.length !==  0 || RespIncorreta3.value.length !==  0){        
        //         console.log("oi")
        //         }else {
        //                 alert("Por favor preencha os dados corretamente")
        // }
    }else {
        console.log ("entrou")
            // alert("Por favor preencha os dados corretamente")
    }
}
// }
// function perguntasNosRequisitos(){
//     if(){}

// }
// seguir requisitos do trello
// só passar para níveis com perguntas todas cumprindo os requisitos