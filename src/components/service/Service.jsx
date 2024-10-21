import { useRef } from "react"
import { UseReveal } from "../../hooks/UseReveal"
import api from '../../assets/images/rest-api.png'

export function Service () {

     const reveal_1 = useRef(null)
     const reveal_2 = useRef(null)
     const reveal_3 = useRef(null)
     const reveal_4 = useRef(null)

     UseReveal([reveal_1, reveal_2, reveal_3, reveal_4], true)

     return (
          <section id="services" className="services">
               <h2 ref={reveal_1} className="reveal-2"><span>Ser</span>vices</h2>
               <div className="containers">
                    <div ref={reveal_2} className="servicesRev reveals-10 card">
                         <a><i className='bx bx-palette'></i></a>
                         <h3>Développement Front-End</h3>
                         <p>
                              Création d'interfaces utilisateur intéractives, intégration d'APIs, 
                              optimisation des performances front-end, développement d'application SPA avec React.
                         </p>
                    </div>
                    <div ref={reveal_3} className="servicesRev reveals-11 card">
                         <a><i className='bx bxs-data'></i></a>
                         <h3>Développement Back-End</h3>
                         <p>
                              Concéption de systèmes robustes, gestion des bases de données et 
                              implémentation de logiques métiers sécurisées
                         </p>
                    </div>
                    <div ref={reveal_4} className="servicesRev reveals-12 card">
                         <a>
                              <img src={api} alt="" />
                         </a>
                         <h3>Création d'API RESTfull</h3>
                         <p>
                              Développement d'API RESTFull sécurisées, optimisées pour l'intégration 
                              front-end et services tiers
                         </p>
                    </div>
               </div>
     </section>
     )
}