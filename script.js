var timeline = gsap.timeline()

timeline.from("#logo", {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -10,

})
timeline.from("#nav #navopt h3", {
    opacity: 0,
    duration: 0.7,
    y: -10,
    stagger:0.7,
})

gsap.to("#welcome h1", {
    // color: "black",
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger: "#welcome",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
        // markers: true,
    }
})