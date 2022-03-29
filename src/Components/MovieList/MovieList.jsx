import React, {useState} from 'react';
import './MovieList.scss'

export default({title, items}) =>{

         const [scrollX, setScrollX] = useState(0);

         const handleArrowLeft = () =>{
                  let x = scrollX + Math.round(window.innerWidth / 2);
                  if(x > 0){
                           x=0;
                  }
                  setScrollX(x);
         } 

         const handleArrowRight = () =>{
                  let x = scrollX - Math.round(window.innerWidth / 2);
                  let listWidth = items.results.length * 210;

                  if((window.innerWidth - listWidth ) > x ){
                        x  = (window.innerWidth - listWidth) - 60;
                  }

                  setScrollX(x);
         } 


         return(
                  <section className = "FilmsList">
                           <h2>{title}</h2>
                           <div className="ArrowLeft" onClick={handleArrowLeft}>
                                    <ion-icon name="chevron-back-outline" style={{fontSize: 50}}></ion-icon>
                           </div>
                           <div className="ArrowRight" onClick={handleArrowRight}>
                                    <ion-icon name="chevron-forward-outline" style={{fontSize: 50}}></ion-icon>
                           </div>
                  <div className="MovieRowArea">
                           <div className="MovieList" style={{
                                    width: items.results.length * 280,
                                    marginLeft: scrollX
                           }}>
                           {items.results.length > 0 && items.results.map((item, key) =>(
                                    <div key={key} className="MovieListItem">
                                             <img src = {`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt= {item.original_title}/>
                                    </div>        
                                    ) )}
                           </div>
                  </div>
                  </section>
         )
} 