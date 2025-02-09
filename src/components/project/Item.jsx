export function Item ({slide}) {
     
     return (
          <div className="slide">
               <div className="image">
                    <img src={slide.image} alt=""/>
               </div>
               <div className="project-container">
                    <div className="project-content">
                         <h2>{slide.title}</h2>
                         <p>
                              {slide.description} <br></br>
                              {slide.lien && (<a href={slide.lien} target="_blank" rel="noopener noreferrer">{slide.lien}</a> )}
                         </p>
                         <h3>Technologies utilisées</h3>
                         <ul>
                              {slide.techno.map((element, index) => (
                                   <li key={index}>{element}</li>
                              ))}
                         </ul>
                    </div>
               </div>
          </div>
     )

}