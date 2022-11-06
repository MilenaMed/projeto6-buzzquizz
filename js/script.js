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
    //console.log(id)
}

/*________________________________________TELA2________________________________________*/

function renderQuizz(res){
    tela1.classList.add('hidden');
    tela2.classList.remove('hidden');
    const quizz = res.data;
    
    //Coloca o cabeçalho do quizz / imagem e título   
    const cabecalho = document.querySelector(".cabecalhoQuizz")
    cabecalho.innerHTML +=  
    `                            
            <div class="gradient">
                <h2>${quizz.title}</h2>
            </div>
                <img src="${quizz.image}"/>          
    `


//Cria a quantidade de caixas de perguntas e coloca o título 
for(indice= 0 ; indice < quizz.questions.length ; indice++){  


     const container = document.querySelector(".container")    
     container.innerHTML += 
    `   
            <div class="caixaPergunta">  
                <div class="cabecalhoPergunta">
                    <span class="tituloPergunta">${quizz.questions[indice].title}</span>
                </div>
                <div class="caixarespostas">
                </div> 
               
            </div>    
        
    `                
}

//console.log(quizz.questions[0].answers)


//função para misturar as respostas
function comparador() { 
    return (Math.random() - 0.5) }

    
//Gera as respostas das perguntas sortidas
for (let i=0;i<quizz.questions.answers.length;i++){

        const caixaRespostas = document.querySelector(".caixarespostas")
        caixaRespostas.innerHTML +=
        
        `
        <div class="resposta">
            <img class="imgResposta" src="${quizz.questions[indice].answers[i].image}">
            <span class="textoResposta">src="${quizz.questions[indice].answers[i].text}</span> 
        </div>
        
        
        `
}

}

//Gera o resultado
function GerarResultado(){

   //Gera o Título   
//const tituloResultado = document.querySelector(".tituloResultado")
//tituloResultado.innerHTML += "" ;
//tituloResultado.innerHTML += ${};

   //Gera a Imagem   
//const ImagemResultado = document.querySelector(".ResultadoFinalImagem")
//ImagemResultado.innerHTML += "" ;
//ImagemResultado.innerHTML += ${};

   //Gera o Texto  
//const TextoResultado = document.querySelector(".FinalTexto")
//TextoResultado.innerHTML += "" ;
//TextoResultado.innerHTML += ${};

}

function VoltarHome2(){
    window.location = "index.html";
}

function ReiniciarQuiz(){
    
    
}

/*________________________________________TELA3________________________________________*/
/* Criar perguntas */

function criarPerguntas() {
    let qtddPerg = document.querySelector("#qtdPerg");
    let nPerguntas = parseInt(qtddPerg.value);
    const perguntasQ = document.querySelector('.conteinerTela32');
    for (let i = 1; i <= nPerguntas; i++) {
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

function abrirPerguntas($divCompleta) {
    const $perguntasEditaveis = $divCompleta.querySelector('.perguntasEditaveis');
    $perguntasEditaveis.classList.add('desativar');

    const $perguntasAbertas = $divCompleta.querySelector('.perguntasAbertas');
    $perguntasAbertas.classList.remove('desativar');
}

function requisitosPerguntas($divCompleta) {
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
    try {
        let RegExp = /^#[0-9A-F]{6}$/i;
        ehHexa = RegExp.test(PergCor.value)
    } catch (err) {
        ehHexa = false
    }
    console.log(ehHexa)
    // conferir se a url da imagem correta é válido
    try {
        urlc = new URL(imagURLC.value)
    } catch (err) {
        urlc = false;
    }

    //   console.log (RespIncorreta3.value)
    if (20 <= textoPerg.value.length && ResCorreta.value.length > 1 && urlc !== false && ehHexa !== false && (RespIncorreta1.value.length > 1 || RespIncorreta2.value.length > 1 || RespIncorreta3.value.length > 1)) {
        if (
            conferirImagemRespondida(RespIncorreta1, imagURLIncorreta1) &&
            conferirImagemRespondida(RespIncorreta2, imagURLIncorreta2) &&
            conferirImagemRespondida(RespIncorreta3, imagURLIncorreta3)
        ) {
            perguntasNosRequisitos(true)

        }
        else {
            alert("Por favor preencha os dados corretamente")
        }
    } else {
         alert("Por favor preencha os dados corretamente")
    }
}

function conferirImagemRespondida(resposta, imagem) {
    // conferir se a url da imagem incorreta é válido
    try {
        url1 = new URL(imagem.value)
    } catch (err) {
        url1 = false;
    }
    if ((resposta.value.length > 1 && url1 !== false) || (resposta.value.length == 0 && imagem.value.length == 0)) {
        return true;
    } else {
        return false;
    }
}

function perguntasNosRequisitos(){
    console.log("oi")
    // const $perguntasEditaveis = $divCompleta.querySelector('.perguntasEditaveis');
    // $perguntasEditaveis.classList.add('desativar');

    // const $perguntasAbertas = $divCompleta.querySelector('.perguntasAbertas');
    // $perguntasAbertas.classList.remove('desativar')

}

/* --------Criação de niveis--------*/

function openLevels(level) {

    let numLevel = document.querySelector('.nivelNum').innerHTML.replace("Nivel", "");

    let layout = `
    <div class="conteinerNiveis">
        Nivel${numLevel}
        <input type="text" size="35" placeholder=" Título do nível${numLevel}" class="caixaDigitavel" />
        <input type="text" size="35" placeholder=" % de acerto mínima" class="caixaDigitavel" />
        <input type="text" size="35" placeholder=" URL da imagem nível${numLevel}" class="caixaDigitavel" />
        <input type="text" size="35" placeholder=" Descrição do nível${numLevel}" class="caixaDigitavel grande" />
    </div>`

    if (level.innerHTML !== layout) {
        level.innerHTML = "";
        level.innerHTML += layout;
        level.removeAttribute('onclick');
    }
}

function requestLevels() {

}