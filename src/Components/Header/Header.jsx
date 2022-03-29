import React from 'react';
import './Header.scss';

export default({item}) => {
         console.log(item);

         let FirstDate = new Date(item.first_air_date);
         let genres = [];
         for(let i in item.genres){
                  genres.push(item.genres[i].name)
         }

         return (
                  
                  <section className = "SectionHeader" style={{
                           backgroundSize: 'cover',
                           backgroundPosition: 'center',
                           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                           
                  }}>
                                             <div className="BlurVertical">
                                                      <div className="BlurHorizontal">   
                                                               <div className="TitleName">{item.original_name} </div>         
                                                               <div className="MovieInfos">
                                                                        <div className="Points">{item.vote_average} Pontuação </div>
                                                                        <div className="Year">{FirstDate.getFullYear()}</div>
                                                                        <div className="NumberSeasons">{item.number_of_seasons}  temporada{item.number_of_seasons !== 1  ? 's'  :  ' ' } </div>
                                                                        
                                                               </div>
                                                                        <div className="Description">{item.overview} </div>
                                                                        <div className="Buttons">  
                                                                                 <a href={`watch/${item.id}`}  className="Watch"><ion-icon name="play-outline"></ion-icon>Assistir </a>
                                                                                 <a href={`list/add/${item.id}`} className="ListPlus"> + minha lista </a>
                                                                        </div>
                                                                        <div className="Genres"> Gêneros:  <strong> {genres.join(', ' )} </strong> </div>
                                                      </div>   
                                             </div>

                                    </section>
         )

}