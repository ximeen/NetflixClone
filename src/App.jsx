import  React, {useEffect, useState} from 'react';

import tmdb from './tmdb'
import  './App.scss';
import MovieList from './Components/MovieList/MovieList.jsx'
import Header from './Components/Header/Header.jsx'
import Users from './Components/Users/Users.jsx'

export  default() =>{

         const [movieList, setMovieList] = useState([]);
         const [header, setHeader] = useState(null);
         const [blackHeader, setBlackHeader] = useState(false);

         useEffect(()=>{
                  const loadAll = async() =>{
                           let list = await tmdb.GetHomeList();
                           setMovieList(list);

                           let originals = list.filter(i => i.slug === 'originals');
                           let RandomChose = Math.floor(Math.random() * (originals[0].items.results.length -1));
                           let Chose = originals[0].items.results[RandomChose];
                           let chosenInfo = await tmdb.getMovieInfo(Chose.id, 'tv');

                           setHeader(chosenInfo);
                  }

                  loadAll();
         }, []);

         useEffect(() =>{
                  const ScrollListener = () =>{
                           if(window.scrollY > 30){
                                    setBlackHeader(true);
                           } else {
                                    setBlackHeader(false);
                           }       
                  };

                  window.addEventListener('scroll', ScrollListener);

                  return() =>{
                           window.removeEventListener('scroll', ScrollListener);
                  }
         },[])

         return(
                  

                 <div className="Page">

                       <Users black = {blackHeader} />

                       {header && 
                       <Header item = {header}  /> 
                       }

                          <section className="ListsFilms" >
                               {movieList.map((item,key) => (
                                                 <MovieList key = {key} title = {item.title}  items  = {item.items} />
                                        )
                               )}
                          </section>

                          <footer>
                                   <p>Feito por Gabriel dos Santos Ximenes</p>
                                   <p>Todo os direitos de imagens ao Netflix</p>
                                   <p>Dados de origem themoviedb.org </p>
                          </footer>

                  
                                    {movieList.length <= 0 &&
                                             <div className="Loading">
                                                      <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
                                             </div>
                                    }
                 </div>
         )
      
}

