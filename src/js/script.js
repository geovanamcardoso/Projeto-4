//Declarando o array de imagens

let imagens=[
    'src/assets/imagem1.jpg', 
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
];

//Declarando as variáveis

let i=0;

//Tempo em js é contato em milissegundos
let tempo =3000; //3 segundos

//Criando a função slideshow
function slideshow(){
    document.getElementById('image').src=imagens[i];
    i++;

    if(i == imagens.length){
        i=0;
    }

    setTimeout("slideshow()", tempo);
}
slideshow();

