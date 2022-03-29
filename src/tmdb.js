
// AQUI ESTOU CRIANDO A CONSTANTE DA MINHA KEY QUE É NECESSARIA PRA GENTE PASSAR COMO PARAMETRO PARA CONSEGUIR COLETAR OS DADOS;

const API_KEY = '89d4f43d7bb2927224cb02be1e24227d';

// AQUI É A BASE DE ONDE EU ESTOU PEGANDO MEUS DADOS, QUE É UMA API EXTERNA NÉ, ENTÃO PRA FACILITAR E FICAR DE MELHOR MANUTENÇÃO EU COLOCO ELA EM UMA CONSTANTE;
const API_BASE = 'https://api.themoviedb.org/3';


// AQUI EU TO CRIANDO UMA FUNÇÃO PARA CONSEGUIR FAZER A LIGAÇÃO DA API, NO COMANDO FETCH, BASICAMENTE EU TO CRIANDO UMA CONST QUE É AWAIT OU SEJA VAI FAZER A REQUISIÇÃO PRO TMDB E AGUARDAR A RESPOSTA PRA ARMAZENAR NO REQUEST, DEPOIS O FETCH QUE É COLETAR A API DE UM SERVIÇO EXTERNO, E PASSANDO COMO PARAMETROS OS LOCAIS, QUE É BASE DE DADOS E O ENDPOINT QUE  É O RESTANTE QUE EU VOU PREENCHER DEPOIS;
const BasicFetch = async(endpoint) =>{
         const request = await fetch(`${API_BASE}${endpoint}`); 
         const ResponseJson = await request.json();

         return ResponseJson;
}





// AQUI BASICAMENTE ESTOU CRIANDO UMA FUNC ASYCN QUE VAI RETORNAR PRA GENTE O ARRAY DE OBJETOS, QUE POR VENTURA OS OBJETOS SÃO OS MEUS TITULOS, TIPO ORIGINAIS, AÇÃO, TERROR ETC.. 
export default{
         GetHomeList: async () =>{
                  return[
                           {
                                    slug: 'originals',
                                    title: 'Originais Netflix',
                                    items: await BasicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'trending',
                                    title: 'Recomendados',
                                    items: await BasicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'toprated',
                                    title: 'Em alta',
                                    items: await BasicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'action',
                                    title: 'Ação',
                                    items: await BasicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'comedy',
                                    title: 'Comedia',
                                    items: await BasicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'horror',
                                    title: 'Terror',
                                    items: await BasicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'romance',
                                    title: 'Romance',
                                    items: await BasicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
                           },
                           {
                                    slug: 'documentary',
                                    title: 'Documentarios',
                                    items: await BasicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
                           }


                  ]
         },
         
         getMovieInfo: async(movieId, type) =>{
                  let info = {}
         
                  if(movieId){
                           switch(type){
                                    case 'tv':
                                             info = await BasicFetch(`/tv/${movieId}?language = pt-BR&api_key=${API_KEY}`);
                                    break;
                                    
                                    case 'movie':
                                             info = await BasicFetch(`/movie/${movieId}?language = pt-BR&api_key=${API_KEY}`);
                                    break;
                                    default:
                                             info = null;

                                    break;
         
                           }
                  }
         
                  return info;
         }
}