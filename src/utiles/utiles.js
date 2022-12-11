
import ScrollReveal from 'scrollreveal'

import {gsap,  Power3, Power4,Power1 } from 'gsap/all';


  const timeline2 = gsap.timeline();
  const timeline3 = gsap.timeline();
  const timeline4 = gsap.timeline();
  const timeline1 = gsap.timeline({ delay: .2 });

export const  slider=()=> {
  //test animation
  const rtl=()=> { timeline3.to('.slider_text', 0, { opacity: '1', delay: '0' }); }
  const ltr=()=> { timeline4.to('.slider_text', 0.5, { opacity: '0', delay: '0.2' }); }
  // Right To Left
  timeline2.to('.slider', 0.5, { height: "100%", ease: Power3.easeOut })
            .to('.slider', 0, { width: "100%", delay: 1, ease: Power4.easeInOut })
            .to('.slider', 0, { width: "1.4em", left: '0', right: 'initial', delay: 1.5, ease: Power4.easeInOut, onComplete: rtl })
 // Left To Right 
            .to('.slider', 0, { width: "100%", delay: 2.5, ease: Power4.easeInOut, onComplete: ltr })
            .to('.slider', 0, { width: "1.4em", left: 'initial', right: '0', delay: 1 })
            .to('.slider', 0.1, { width: "1.4em", height: '0%', delay: 1.5, ease: Power3.easeOut })

}













// Object to configurate the ScrollReveal  function
const srConfig = {
  origin: 'bottom',
  distance: '50px',
  duration: 500,
  delay: 500,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
};
//starting a new time line for gsap animation


export const heroSectionAnimation = () => {
  //function to amine the hero section aftee loading using GSAP
  gsap.to("header", {
    duration: 1, 
    autoAlpha: 1
});
gsap.to(".horisontal", {
  duration: 1, 
  autoAlpha: 1
});
  timeline1.staggerFrom([".logo svg",".nav_link"], 1, { y: "-100vh", ease: Power1.easeOut, stagger: 0.3 }, 0.3)
    .staggerFrom(["footer .icon a"], 1, { x: "100vw", ease: Power3.easeOut, stagger: 0.2 }, 0.5, 'Start')
    .staggerFrom(".heroHeading", 1, {
      y: "100vh",
      ease: Power3.easeOut,

    }, .5, 'Start')
    .from("#home p", 1, { y: "100vh", opacity: 0, delay: 3, ease: Power3.easeOut }, 1)
    .from("#home .btn_container", 1, { y: "100vh", delay: 3.2, opacity: 0, ease: Power3.easeOut }, 1)




};


export const scroleAimation = () => {
  //function to handel scroll animation using ScrollReveal package: https://scrollrevealjs.org/
  const sr = ScrollReveal(srConfig);
  sr.reveal('.scrol_anime');
  sr.reveal('.title')
  sr.reveal('.skill')


};

//function to handel active links on while scrolling throught the section using Intersection Observer API
export const handelscrole = () => {
  const sections = document.querySelectorAll('section')
  const links = document.querySelectorAll(".nav_link")

  const options = {
    threshold: 0.2,
  }
  let observer = new IntersectionObserver(navChek, options)

  function navChek(entries) {

    entries.forEach(entry => {

      const sectionName = entry.target.id;
     
      if (entry.isIntersecting) {
        links.forEach(link => {

          if (link.getAttribute("data-name") === sectionName) {
            link.classList.add("active")
          } else {
            link.classList.remove("active")
          }
        })
      }

    })
  }

  sections.forEach(section => observer.observe(section));
};