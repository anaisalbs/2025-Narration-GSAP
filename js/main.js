gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin);



gsap.to("#window2", {
  ScrollTrigger:{
    trigger:"section2",
    start:"top 60%",
    end:"top 20%",
    scrub: 1,
    markers: true
  },
  backgroundColor:"rgb(0, 0, 0)",
  duration: 2,
  ease: "none"
});

gsap.to("#window2", {
  ScrollTrigger:{
    trigger:"section2",
    start:"top 60%",
    end:"top 20%",
    scrub: 1,
    markers: true
  },
  y: -100, // déplacement vers le haut
  duration: 3,
  ease: "power2.out"
});



// Timeline --------------------------------------------

let tl = gsap.timeline();
tl.to("#list1", {duration: 1, x: -200})
  .to("#list2", {duration: 2, x: -200})
  .to("#list3", {duration: 2, x: -200})


