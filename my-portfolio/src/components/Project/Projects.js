
import React from "react";
import "./Project.css";
import Project1 from '../../img/Project1.png';
import Project11 from '../../img/project11.png';
import Project13 from '../../img/project13.png';
import Project2 from '../../img/project2.png';
import Project22 from '../../img/project22.png';
import Project23 from '../../img/project23.png';
import { Button } from "../../Button/Button";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        
        <p className="heading p__color">
          HealthKart Clone  and  Zee5 Clone
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta">
                     <Button><a href="https://friendly-bhaskara-d0f23b.netlify.app/" target="_blank">Live</a></Button>
                     <Button><a href="https://github.com/Shawon1997/Healthkart-clone-1" target="_blank">Code</a></Button>
                     </div>
                     <p>
                        <span style={{color:"red"}}>HealthKart</span> is a trusted house of brands with MuscleBlaze and HK Vitals being India’s no. 1 sports nutrition and online vitamin brands. HealthKart also offers a comprehensive range of products dedicated to the vegan community,
                        kids and women for their wellness and fitness needs.</p>
                    
                    
                     
                    </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project11} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta">
                     
                     <Button><a href="https://friendly-bhaskara-d0f23b.netlify.app/" target="_blank">Live</a></Button>
                     <Button><a href="https://github.com/Shawon1997/Healthkart-clone-1" target="_blank">Code</a></Button>
                     </div>
                     <br></br>
                     <h2>Tech Stack:</h2>
                 <p style={{color:"white"}}>
                  HTML | CSS | 
                  Javascript |
                  bootStrap | Node.JS | 
                  MongoDB | Express JS
                  </p>
                 </div>
             </div>
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project13} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta">
                 
                     <Button><a href="https://friendly-bhaskara-d0f23b.netlify.app/" target="_blank">Live</a></Button>
                     <Button><a href="https://github.com/Shawon1997/Healthkart-clone-1" target="_blank">Code</a></Button>
                     </div>
                     <p>A collaborative project built by a team of 4 developers, executed in 4 days</p>
                 </div>
             </div>
            
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta">
                     <Button><a href="https://zee5-clone.netlify.app//" target="_blank">Live</a></Button>
                     <Button><a href="https://github.com/Shawon1997/zee5_project" target="_blank">Code</a></Button>
                     </div>
                     <p>
                      
                            <span style={{color:"red"}}>ZEE5</span> is an Indian subscription video on-demand and over-the-top streaming service, run by Zee Entertainment Enterprises.
                            It was launched in India on 14 February 2018 with content in 12 languages..</p>
                     
                 </div>
             </div>
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project22} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta">
                 
                     <Button><a href="https://zee5-clone.netlify.app//" target="_blank">Live</a></Button>
                     <Button><a href="https://github.com/Shawon1997/zee5_project" target="_blank">Code</a></Button>
                     </div>
                     <br></br>
                     <h2>Tech Stack:</h2>
                 <p style={{color:"white"}}>
                  HTML | CSS | 
                  Javascript |
                  bootStrap 
                  </p>
                 </div>
             </div>
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project23} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta">
                 
                     <Button><a href="https://zee5-clone.netlify.app//" target="_blank">Live</a></Button>
                     <Button><a href="https://github.com/Shawon1997/zee5_project" target="_blank">Code</a></Button>
                     </div>
                     <p>A collaborative project built by a team of 6 developers, executed in 5 days.</p>
                 </div>
             </div>
           </div>
       </div>
    </div>
  );
}

export default Project;
