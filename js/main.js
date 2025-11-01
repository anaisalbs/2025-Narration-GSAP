gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);

//-------------------------------------------------------------------------------
// ---------------------------Responsive MatchMedia -----------------------------
//-------------------------------------------------------------------------------


let mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 799px)",
    isDesktop: "(min-width: 800px)"
  },
  (context) => {
    let { isMobile, isDesktop } = context.conditions;


// Anim déplacement au lancement  -------------------------------------

gsap.from("#anim", {
  

  y: isMobile ? 50 : 100, // déplacement vers le haut
  duration: isMobile ? 3 : 5,
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

  tl.from("#list1", {duration: 1, x: isMobile ? -100 : -200 })  //https://gsap.com/docs/v3/GSAP/Timeline/
  .from("#list2", {duration: 2, x: isMobile ? -100 : -200 })
  .from("#list3", {duration: 2, x: isMobile ? -100 : -200 })

  

  tl.from("#list4", {duration: 1, x: isMobile ? 100 : 200})
  .from("#list5", {duration: 2, x: isMobile ? 100 : 200})
  .from("#list6", {duration: 2, x: isMobile ? 100 : 200});


// Caroussel  section 3--------------------------------------------



let tlCarousel = gsap.timeline({
  repeat: -1,
  yoyo: true

});

tlCarousel.to(".photo", {
  xPercent: isMobile ? 100 : 250,
  duration: isMobile ? 8 : 15,
});

// Draggable section 4 -----------------------------------------------

Draggable.create(".tshirt", { // Pour faire essayer les vetements au mannequin
  bounds: "#section4",
  inertia: true
});

  }
);
