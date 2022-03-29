import React from "react";
import './Users.scss';


export default({black})=>{
         return(
                  <header className= {black  ?  'bkBlack' : ''}>
                           <div className="LogoNetflix">
                                    <a href="/">
                                             <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt=" Imagem logo da netflix vermelha" />
                                    </a>
                           </div>
                           <div className="ImageUser">
                                    <a href="/">
                                             <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Imagem do usuario logado" />
                                    </a>
                           </div>
                  </header>
         )
}