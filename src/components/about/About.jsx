import { useEffect, useRef } from 'react'
import image from '../../assets/images/Photo_Tendry-02.jpeg'
import { UseReveal } from '../../hooks/UseReveal'

export function About () {

     const reveal_1 = useRef(null)
     const reveal_2 = useRef(null)
     const reveal_3 = useRef(null)

     UseReveal([reveal_1, reveal_2, reveal_3])

     return (
          <section className="about-me-section" id="about">
               <div className="container">
                    <h2 ref={reveal_2} className="reveal-2"><span>Ab</span>out me</h2>
                    <div className="about-me-content">
                         <div ref={reveal_3} className="about-image reveal-3">
                              <img src={image} />
                         </div>
                         <div ref={reveal_1} className="about-details reveal-1">
                              <p>
                                   Je m'appelle <span>Tendry RAKOTO</span>, et je suis un développeur <strong>PHP/JavaScript </strong> 
                                   passionné, spécialisé dans la création d'applications Web robustes et évolutives. Avec plusieurs années d'expérience en 
                                   développement <strong>Full-Stack</strong>, j'ai affiné mes compétences dans la création de systèmes back-end 
                                   efficaces et d'interfaces front-end dynamiques 
                              </p>
                              <ul>
                                   <li><strong>Nom:</strong> Tendry Rkt</li>
                                   <li><strong>Téléphone:</strong><a href="https://wa.me/261346413187">+261 34 64 131 87</a></li>
                                   <li><strong>Experience:</strong> 2 ans</li>
                                   <li><strong>Email:</strong> tendryzephyrin@gmail.com</li>
                                   <li><strong>Age:</strong> 20</li>
                                   <li><strong>Adresse:</strong> Antananarivo, Madagascar</li>
                                   <li><strong>Freelance:</strong> Disponible</li>
                              </ul>
                              <a href="/CV_Tendry.pdf" download="CV_Tendry.pdf" className="download btn">Download CV</a>
                         </div>
                    </div>
               </div>
          </section>
     )
}