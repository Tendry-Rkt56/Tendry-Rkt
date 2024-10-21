import { useEffect } from "react";

export function UseNavBar () {

     useEffect(() => {
          
          const sections = document.querySelectorAll('section')

          const activates = (element) => {
               const id = element.getAttribute('id')
               const link = document.querySelector(`a[href="#${id}"]`)
               const links = document.querySelectorAll('.links')
               links.forEach(element => element.classList.remove('active'))
               if (link) {
                    link.classList.add('active')
               }
          }
          
          const interesction = function (entries, observer) {
               entries.forEach(entry => {
                    if (entry.intersectionRatio > 0.8) {
                         activates(entry.target)
                    }
               })
          }
          
          if (sections.length > 0) {
               const sectionObserver = new IntersectionObserver(interesction, {threshold:0.8})
               sections.forEach(section => sectionObserver.observe(section))
          }
     }, [])

}