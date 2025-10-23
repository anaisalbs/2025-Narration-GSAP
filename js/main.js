gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

// Anim déplacement au lancement 

gsap.from("#anim", {
  

  y: 100, // déplacement vers le haut
  duration: 5,
  ease: "power2.out"
});




// Timeline + scroll trigger section 2--------------------------------------------

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#anim",
    //markers: true,
    start:"top 60%",
    end:"top 20%",
    id:"#texteHaut",
    toggleActions:"play none reverse reset",
    scrub: 1,
  }
  
});
  tl.from("#list1", {duration: 1, x: -200})
  .from("#list2", {duration: 2, x: -200})
  .from("#list3", {duration: 2, x: -200})

  

  tl.from("#list4", {duration: 1, x: 200})
  .from("#list5", {duration: 2, x: 200})
  .from("#list6", {duration: 2, x: 200})


// Caroussel  section 3--------------------------------------------

let tlCarousel = gsap.timeline({
  scrollTrigger:{
    trigger:"#section3",
    start:"top 80%",
    end:"bottom 20%",
    markers: true,
    toggleActions:'play'
  },
  repeat: -1

})
