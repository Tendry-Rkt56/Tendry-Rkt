import { useEffect, useRef } from 'react'
import Tendry from '../../assets/images/instasquare.photoeditor.effect.cutout_20244201422677.png'
import { UseReveal } from '../../hooks/UseReveal'

export function Home () {

     const ref = useRef(null)
     const imageRef = useRef(null)

     UseReveal([ref, imageRef])

     return (
          <section className="home" id="home">
               <div ref={ref} className="home-content reveal-1">
                    <h1>Salut, c'est <span>Tendry</span></h1>
                    <h3 className="text-decoration"><span>FullStack Developer</span></h3>
                    <p>
                         " Passionné par le développement d'applications web dynamiques et évolutives, avec une expertise en <strong style={{fontWeight:'bolder'}}>JavaScript </strong>
                          pour l'intéractivité front-end et <strong style={{fontWeight:'bolder'}}>PHP</strong> pour le traitement back-end "
                    </p>
                    <div className="social-icons">
                         <a href="mailto:tendryzephyrin@gmail.com"><i className='bx bx-envelope'></i></a>
                         <a href="https://github.com/Tendry-Rkt56"><i className='bx bxl-github'></i></a>
                         <a href="https://web.facebook.com/rayan.andria.92"><i className='bx bxl-facebook'></i></a>
                    </div>
                    <div className="btn-group">
                         <a href="mailto:tendryzephyrin@gmail.com" className="btn">Contacter</a>
                    </div>
               </div>
               <div ref={imageRef} className="home-img reveal-2">
                    <img src={Tendry} alt="" />
               </div>
          </section>
     )
}