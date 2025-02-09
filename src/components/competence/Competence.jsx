import { useRef } from "react"
import { UseCompetence } from "../../hooks/UseCompetence"
import symfony from '../../assets/images/symfony-icon.png'
import sql from '../../assets/images/sql.png'
import laravel from '../../assets/images/laravel.png'

export function Competence () {

     const reveal_1 = useRef(null)
     const reveal_2 = useRef(null)
     const reveal_3 = useRef(null)

     UseCompetence([reveal_1, reveal_2, reveal_3])

     return (
          <section className="competences" id="competences">
               <h2 ref={reveal_1} className="reveal-2"><span>Com</span>pétences</h2>
               <div className="skills-content">
                    <div ref={reveal_3} className="skills-text reveal-3">
                         <p>
                              Je maîtrise une vaste gamme de technologies web, allant de l'intéraction front-end avec JavaScript 
                              à la création de solutions robustes en PHP, offrant ainsi des applications complètes et performantes.
                         </p>
                    </div>
                    <div ref={reveal_2} className="containers reveal-1 revealSkill">
                         <div className="skill">
                              <p><i className='bx bxl-html5'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"90%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p><i className='css bx bxl-css3'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"80%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p><i className='js bx bxl-javascript'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"85%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p><i class='typescript bx bxl-typescript'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"85%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p><i className='php bx bxl-php'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"90%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p><i className='react bx bxl-react'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"85%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p>
                                   <img className="symfony" src={symfony} alt="" />
                              </p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"89%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p>
                                   <img src={laravel} alt="" />
                              </p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"85%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p>
                                   <img className="sql" src={sql} alt=""/>
                              </p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"75%"}}></div>
                              </div>
                              <span></span>
                         </div>
                         <div className="skill">
                              <p><i class='bx bxl-java'></i></p>
                              <div className="progress-bar">
                                   <div className="progress" style={{width:"50%"}}></div>
                              </div>
                              <span></span>
                         </div>
                    </div>
               </div>
          </section>
     )
}