import { useEffect } from "react";

export function UseReveal (refs, isReveals = false) {

     useEffect(() => {

          const handleIntersect = function (entries, observer) {
               entries.forEach(entry => {
                    if (entry.intersectionRatio > 0.3) {
                         entry.target.classList.add('reveal-visible')
                         observer.unobserve(entry.target)
                    }
               })
          }
     
          const observer = new IntersectionObserver(handleIntersect, {threshold:0.3})
          if (isReveals) {
               refs.forEach((ref, index) => {
                    if (ref.current.classList.contains('servicesRev')) {
                         ref.current.style.transitionDelay = `0.${index + 4}s`
                    }
               }) 
          }
          refs.forEach(ref => {
               if (ref.current) {
                    observer.observe(ref.current)
               }
          })
     
          return () => {
               refs.forEach(ref => {
                    if (ref.current) {
                         observer.unobserve(ref.current)
                    }
               })
               observer.disconnect()
          }
     }, [])

}


