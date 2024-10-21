import { useEffect } from "react";

export function UseCompetence (refs) {

     useEffect(() => {

          const progresses = document.querySelectorAll('.progress')
          
          const handleIntersect = function (entries, observer) {
               entries.forEach(entry => {
                    if (entry.intersectionRatio > 0.3) {
                         if (entry.target.classList.contains('revealSkill')) {
                              progresses.forEach(progress => {
                                   let width = 0
                                   const target = parseInt(progress.style.width)
                                   const interval = setInterval(() => {
                                        if (width >= target) {
                                             clearInterval(interval)
                                        }
                                        else {
                                             width++
                                             progress.style.width = width + '%'
                                        }
                                   }, 10)
                              })
                         }
                         entry.target.classList.add('reveal-visible')
                         observer.unobserve(entry.target)
                    }
               })
          }

          const observer = new IntersectionObserver(handleIntersect, {threshold:0.3})

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