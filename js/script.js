/*________________________________________TELA1________________________________________*/

const urlAPI = 'https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes';
let id;
const tela1 = document.querySelector('.tela1');
const tela2 = document.querySelector('.tela2');

getAPI();

function getAPI() {
    const promisse = axios.get(`${urlAPI}`);
    promisse.then(renderQuizzes);

}

function createQuizz() {
    window.location = "tela3.html";
}

function changeLayout() {
    const myQuizzes = document.querySelector('.myQuizzes');
    const ulMyQuizzes = document.querySelector('.ulMyQuizzes');
    const myQuizzesEmpty = document.querySelector('.myQuizzesEmpty');

    if (ulMyQuizzes.innerHTML !== null) {
        myQuizzes.classList.remove('hidden');
        myQuizzesEmpty.classList.add('hidden');
    }
}

function renderQuizzes(res) {
    const liQuizzes = res.data;
    const ulQuizzes = document.querySelector('.quizzes');

    for (let i = 0; i < liQuizzes.length; i++) {
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

function playQuizz(id) {
    const promisse = axios.get(`${urlAPI}/${id}`);
    promisse.then(renderQuizz);
    //console.log(id)
}

/*________________________________________TELA2________________________________________*/

<<<<<<< HEAD


function renderQuizz(res){
=======
function renderQuizz(res) {
>>>>>>> 6e87e6ddf1917a19b406f2324d6f59f87a8e6f3e
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


<<<<<<< HEAD
//Cria a quantidade de caixas de perguntas e coloca o título 

for(indice= 0 ; indice < quizz.questions.length ; indice++){
    
     const container = document.querySelector(".container")    
     container.innerHTML += 
    `
            
=======
    //Cria a quantidade de caixas de perguntas e coloca o título 
    for (indice = 0; indice < quizz.questions.length; indice++) {


        const container = document.querySelector(".container")
        container.innerHTML +=
            `   
>>>>>>> 6e87e6ddf1917a19b406f2324d6f59f87a8e6f3e
            <div class="caixaPergunta">  
                <div class="cabecalhoPergunta">
                    <span class="tituloPergunta">${quizz.questions[indice].title}</span>
                </div>
                <div class="caixarespostas">
                </div> 
               
            </div>    
        
<<<<<<< HEAD
    `  
    console.log(quizz.questions[indice].answers)
    
    //Gera as respostas das perguntas 
for (let i=0; i < quizz.questions[indice].answers.length; i++){

    
    
    const caixaRespostas = document.querySelector(".caixarespostas")
    caixaRespostas.innerHTML += ""
    caixaRespostas.innerHTML += 
    
    `

    <div class="resposta">
        <img class="imgResposta" src="imagens/image 10.png">
        <span class="textoResposta">oioi</span> 
    </div>
    
    
  `
        }
    }    
}
=======
    `
    }
>>>>>>> 6e87e6ddf1917a19b406f2324d6f59f87a8e6f3e

    //console.log(quizz.questions[0].answers)


<<<<<<< HEAD
//função para misturar as respostas
function comparador() { 
return (Math.random() - 0.5) }   

=======
    //função para misturar as respostas
    function comparador() {
        return (Math.random() - 0.5)
    }


    //Gera as respostas das perguntas sortidas
    for (let i = 0; i < quizz.questions.answers.length; i++) {

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
>>>>>>> 6e87e6ddf1917a19b406f2324d6f59f87a8e6f3e

//Gera o resultado
function GerarResultado() {

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

function VoltarHome2() {
    window.location = "index.html";
}

function ReiniciarQuiz() {


}

/*________________________________________TELA3________________________________________*/

// Objeto a ser enviado

let ArrayObejtoParaEnviar = [];

// Criação do Quizz

function confirmarCriação(confirmar) {
    let texto = document.querySelector("#Titulo");
    let imagURL = document.querySelector("#imgURL");
    let qtddPerg = document.querySelector("#qtdPerg");
    let qtddNiveis = document.querySelector("#qtdNiveis");
    let nPerguntas = parseInt(qtddPerg.value)
    let nNiveis = parseInt(qtddNiveis.value)

    try {
        url = new URL(imagURL.value)
    } catch (err) {
        url = false;
    }

    if (20 <= texto.value.length && texto.value.length < 65 && nPerguntas >= 3 && nNiveis >= 2 && false !== url) {

        let objeto = {titulo: texto.value, image: imagURL.value }
        ArrayObejtoParaEnviar.push(objeto)

        const $divContainerTela31 = document.querySelector('.conteinerTela31');
        $divContainerTela31.classList.add('desativar');
        const $divContainerTela32 = document.querySelector('.conteinerTela32');
        $divContainerTela32.classList.remove('desativar');

        criarPerguntas()

    } else {
        alert("Por favor preencha os dados corretamente")
    }
}


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
    let textoPerg = document.querySelectorAll("#textoPerg");
    let PergCor = document.querySelectorAll("#cor");
    let RespIncorreta1 = document.querySelectorAll("#incorreta1");
    let RespIncorreta2 = document.querySelectorAll("#incorreta2");
    let RespIncorreta3 = document.querySelectorAll("#incorreta3");
    let ResCorreta = document.querySelectorAll('#respCorreta');
    let imagURLIncorreta1 = document.querySelectorAll("#imgURL1");
    let imagURLIncorreta2 = document.querySelectorAll("#imgURL2");
    let imagURLIncorreta3 = document.querySelectorAll("#imgURL3");
    let imagURLC = document.querySelectorAll("#UrlImagCorreta");

    let qtddPerg = document.querySelector("#qtdPerg");
    let nPerguntas = parseInt(qtddPerg.value);

    // conferir se a cor só tem dados válidos
    try {
        let RegExp = /^#[0-9A-F]{6}$/i;
        ehHexa = RegExp.test(PergCor.value)
    } catch (err) {
        ehHexa = false
    }
    // conferir se a url da imagem correta é válido
    try {
        urlc = new URL(imagURLC.value)
    } catch (err) {
        urlc = false;
    }

    let deucerto = 0;
    let objetoPergunta = {};

    for (let i = 0; i < nPerguntas; i++) {
        if (20 <= textoPerg[i].value.length && ResCorreta[i].value.length > 1 && urlc[i] !== false && ehHexa[i] !== false && (RespIncorreta1[i].value.length > 1 || RespIncorreta2[i].value.length > 1 || RespIncorreta3[i].value.length > 1)) {
            if (
                conferirImagemRespondida(RespIncorreta1[i], imagURLIncorreta1[i]) &&
                conferirImagemRespondida(RespIncorreta2[i], imagURLIncorreta2[i]) &&
                conferirImagemRespondida(RespIncorreta3[i], imagURLIncorreta3[i])
            ) {
                deucerto += 1
                objetoPergunta = {title: textoPerg[i].value,
				color: PergCor[i].value ,
				answers:[]
            };
            }
        }
    }
    if (deucerto === nPerguntas) {
        perguntasNosRequisitos(true)

        let qtdObjetos = ArrayObejtoParaEnviar.length;
        let meuUltimoObjeto = ArrayObejtoParaEnviar.pop();
        let objetoAtualizado = {...meuUltimoObjeto, id:qtdObjetos, questions:[...objetoPergunta]}
        ArrayObejtoParaEnviar.push(objetoAtualizado)

    } else {
        alert("Por favor preencha os dados corretamente")
    }
}

function abrirPerguntas($divCompleta) {
    const $perguntasEditaveis = $divCompleta.querySelector('.perguntasEditaveis');
    $perguntasEditaveis.classList.add('desativar');

    const $perguntasAbertas = $divCompleta.querySelector('.perguntasAbertas');
    $perguntasAbertas.classList.remove('desativar');
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

function perguntasNosRequisitos() {
    const $divContainerTela32 = document.querySelector('.conteinerTela32');
    $divContainerTela32.classList.add('desativar');
    const $divContainerTela33 = document.querySelector('.conteinerTela33');
    $divContainerTela33.classList.remove('desativar');
console.log(ArrayObejtoParaEnviar)
    openLevels(level)

}


/* --------Criação de niveis--------*/

//let nNiveis = parseInt(qtddNiveis.value);
let nNiveis = 3;


addLevels()
//Função que adiciona a quantidade de niveis escolhidos pelo usuario
function addLevels() {

    const telaNiveis = document.querySelector('.levels');

    for (let i = 0; i < nNiveis; i++) {
        let layout = `
        <div onclick="openLevel${i + 1}(this)" class="NivelEditaveis">
            <p class="nivelNum">Nivel ${i + 1}</p>
            <ion-icon name="create-outline" class="icone"></ion-icon>
        </div>
    `
        telaNiveis.innerHTML += layout;
    }

    telaNiveis.innerHTML += `
        <button onclick="requestLevels()" class="FinalizarQuizz">
            Finalizar Quizz
        </button>
    `

}

//funções que ao clicar adiciona os inputs
function openLevel1(level) {

    let numLevel = document.querySelector('.nivelNum').innerHTML.replace("Nivel", "");

    let layout = `
    <div class="conteinerNiveis nivel1">
        Nivel${numLevel}
        <input id="titleLevel" type="text" size="35" placeholder=" Título do nível${numLevel}" class="caixaDigitavel" />
        <input id="hitLevel" type="text" size="35" placeholder=" % de acerto mínima" class="caixaDigitavel" />
        <input id="urlLevel" type="text" size="35" placeholder=" URL da imagem nível${numLevel}" class="caixaDigitavel" />
        <input id="descriptionLevel" type="text" size="35" placeholder=" Descrição do nível${numLevel}" class="caixaDigitavel grande" />
    </div>`

    if (level.innerHTML !== layout) {
        level.innerHTML = "";
        level.innerHTML += layout;
        level.removeAttribute('onclick');
    }
}

function openLevel2(level) {

    let numLevel = document.querySelector('.nivelNum').innerHTML.replace("Nivel", "");

    let layout = `
    <div class="conteinerNiveis nivel2">
        Nivel${numLevel}
        <input id="titleLevel" type="text" size="35" placeholder=" Título do nível${numLevel}" class="caixaDigitavel" />
        <input id="hitLevel" type="text" size="35" placeholder=" % de acerto mínima" class="caixaDigitavel" />
        <input id="urlLevel" type="text" size="35" placeholder=" URL da imagem nível${numLevel}" class="caixaDigitavel" />
        <input id="descriptionLevel" type="text" size="35" placeholder=" Descrição do nível${numLevel}" class="caixaDigitavel grande" />
    </div>`

    if (level.innerHTML !== layout) {
        level.innerHTML = "";
        level.innerHTML += layout;
        level.removeAttribute('onclick');
    }
}

function openLevel3(level) {

    let numLevel = document.querySelector('.nivelNum').innerHTML.replace("Nivel", "");

    let layout = `
    <div class="conteinerNiveis nivel3">
        Nivel${numLevel}
        <input id="titleLevel" type="text" size="35" placeholder=" Título do nível${numLevel}" class="caixaDigitavel" />
        <input id="hitLevel" type="text" size="35" placeholder=" % de acerto mínima" class="caixaDigitavel" />
        <input id="urlLevel" type="text" size="35" placeholder=" URL da imagem nível${numLevel}" class="caixaDigitavel" />
        <input id="descriptionLevel" type="text" size="35" placeholder=" Descrição do nível${numLevel}" class="caixaDigitavel grande" />        
    </div>`

    if (level.innerHTML !== layout) {
        level.innerHTML = "";
        level.innerHTML += layout;
        level.removeAttribute('onclick');
    }
}

//validação
function requestLevels() {
    let title, hit, url, description, hits = false;
    const titleLevel = document.querySelector('#titleLevel');
    const hitLevel = document.querySelector('#hitLevel');
    const urlLevel = document.querySelector('#urlLevel');
    const descriptionLevel = document.querySelector('#descriptionLevel');


    if (10 <= titleLevel.value.length) {
        title = true;
    } else {
        alert('O titulo precisa no minimo 10 caracteres');
    }

    if ((hitLevel.value >= 0) && (hitLevel.value <= 100)) {
        hit = true;
    } else {
        alert('Insira um número de 0 a 100');
        hitLevel.value = "";
    }

    if (checkURL(urlLevel.value)) {
        url = true
    } else {
        alert('Insira uma URL válida');
        urlLevel.value = "";
    }

    if (30 <= descriptionLevel.value.length) {
        description = true;
    } else {
        alert('A descrição precisa ter no minimo 30 caracteres');
        descriptionLevel.value = "";
    }

    if (nNiveis == 2) {
        const nivel1 = document.querySelector('.nivel1');
        const nivel2 = document.querySelector('.nivel2');

        const hit1 = nivel1.querySelector('#hitLevel');
        const hit2 = nivel2.querySelector('#hitLevel');

        if ((hit1.value == 0) || (hit2.value == 0)) {
            hits = true;
        } else {
            alert("Em um dos niveis é obrigatorio que a % de acertos seja 0")
        }
    }

    if (nNiveis == 3) {
        const nivel1 = document.querySelector('.nivel1');
        const nivel2 = document.querySelector('.nivel2');
        const nivel3 = document.querySelector('.nivel3');

        const hit1 = nivel1.querySelector('#hitLevel');
        const hit2 = nivel2.querySelector('#hitLevel');
        const hit3 = nivel3.querySelector('#hitLevel');

        if ((hit1.value == 0) || (hit2.value == 0) || (hit3.value == 0)) {
            hits = true;
        } else {
            alert("Em um dos niveis é obrigatorio que a % de acertos seja 0")
        }
    }


    if (title == true && hit == true && url == true && description == true && hits == true) {
        endQuizz();
    }

}

function endQuizz() {
    const finishQuizz = document.querySelector('.end');
    const telaNiveis = document.querySelector('.levels');

    finishQuizz.classList.remove('desativar');
    telaNiveis.classList.add('desativar');
}

function checkURL(string) {
    try {
        let url = new URL(string)
        return true
    } catch (err) {
        return false
    }
}

// CRIAÇÃO DO OBJETO PARAR ENVIO
function oi(oi){

}