import { Item } from "./Item";
import { useEffect, useRef, useState } from "react";
import { items } from "./liste";
import { UseReveal } from "../../hooks/UseReveal";


export function Project () {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [visibleSlides, setVisibleSlides] = useState(1);
     const carouselRef = useRef();
     const reveal_1 = useRef(null);
     const reveal_2 = useRef(null);
     const reveal_3 = useRef(null);

     UseReveal([reveal_1, reveal_2, reveal_3])

     const getVisibleSlides = () => {
          const containerWidth = carouselRef.current.clientWidth;
          const slideWidth = carouselRef.current.querySelector('.slide').clientWidth;
          return Math.round(containerWidth / slideWidth);
     };
      
     const updateVisibleSlides = () => {
          setVisibleSlides(getVisibleSlides());
     };

      
     useEffect(() => {
          updateVisibleSlides()
          window.addEventListener('resize', updateVisibleSlides);
          return () => window.removeEventListener('resize', updateVisibleSlides);
     }, []);

     const showSlide = (index) => {
          const width = carouselRef.current.querySelector('.slide').clientWidth;
          carouselRef.current.style.transform = `translateX(${-index * width}px)`;
     };
      
     const nextSlide = () => {
          const maxIndex = items.length - visibleSlides;
          const newIndex = Math.min(currentIndex + visibleSlides, maxIndex);
          setCurrentIndex(newIndex);
          showSlide(newIndex);
     };
      
     const prevSlide = () => {
          const newIndex = Math.max(currentIndex - visibleSlides, 0);
          setCurrentIndex(newIndex);
          showSlide(newIndex);
     };
      
     useEffect(() => {
          showSlide(currentIndex);
     }, [currentIndex, visibleSlides]);

     return (
          <section className="projets" id="projets">
               <h2 ref={reveal_1} className="reveal-2"><span>Pro</span>jets</h2>
               <div className="projets-containers">
                    <div ref={reveal_2} className="skills-text reveal-3">
                         <p>
                              Découvrez mes projets récents, où j'explore l'utilisation de technologies modernes 
                              telles que JavaScript, PHP, React et Symfony pour développer des solutions web intéractives et robustes.
                         </p>
                    </div>
                    <div ref={reveal_3} className="containers-projet reveal-1">
                         <div className="carousel-container">
                              <div className="carousel" ref={carouselRef}>
                                   {items.map((slide, index) => (
                                        <div key={index} className="slide">
                                             <Item slide={slide}/>
                                        </div>
                                   ))}
                              </div>
                              <button className="prev-btn" onClick={prevSlide} style={{ display: currentIndex === 0 ? 'none' : 'block' }}>&#10094;</button>
                              <button className="next-btn" onClick={nextSlide} style={{ display: currentIndex >= items.length - visibleSlides ? 'none' : 'block' }}>&#10095;</button>
                         </div>
                    </div>
               </div>         
          </section>
     )
} 

