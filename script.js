function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locoScroll();

function cursorEffect() {
    var page1Content = document.querySelector('.page1-content');
    var cursor = document.querySelector('.cursor');

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })

}

cursorEffect();

function page2animation() {
    gsap.from(".elem h1", {
        y: 100,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            // markers: true,
            scrub: 2
        }
    })
}

page2animation();


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    slidesPerView: "4",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
    // breakpoints: {
    //     320: {
    //         slidesPerView: "1"
    //     },
    //     640: {
    //         slidesPerView: "1"
    //     },
    //     768: {
    //         slidesPerView: "2"
    //     },
    //     1024: {
    //         slidesPerView: "5"
    //     },
    // }
});

var tl = gsap.timeline();

tl.from(".loader h3", {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader h3", {
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.3
})

tl.to(".loader", {
    opacity: 0
})

tl.to(".loader", {
    display:"none"
})

tl.from(".page1-content h1 span", {
    y:100,
    opacity:0,
    stagger: 0.1,
    delay: -0.5,
    duration: 0.5
})


gsap.from(".page3-top h2",{
    y:100,
    opacity:0,
    stagger: 0.1,
    delay: -0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page3",
        scroller: ".main",
        start: "top 40%",
        end: "top 37%",
        // markers: true,
        scrub: 2
    }
})


function page4animation() {
    gsap.from(".page4-top, .page4-content h1", {
        y: 100,
        stagger: 0.3,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            start: "top 50%",
            end: "top 78%",
            // markers: true,
            scrub: 2
        }
    })
}

page4animation();

function page5animation() {
    gsap.from(".page5-top-elem h4, .page5-content h1", {
        y: 100,
        stagger: 0.3,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".page5",
            scroller: ".main",
            start: "top 40%",
            end: "top 58%",
            // markers: true,
            scrub: 2
        }
    })
}

page5animation();

function page6animation() {
    gsap.from(".page6 h1", {
        y: 100,
        stagger: 0.3,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".page6",
            scroller: ".main",
            start: "top 40%",
            end: "top 58%",
            // markers: true,
            scrub: 2
        }
    })
}

page6animation();

function page7(){
    gsap.from(".page7 h1 span", {
        y:-100,
        opacity:0,
        stagger: 0.5,
        duration: 1.7,
        scrollTrigger: {
            trigger: ".page7",
            scroller: ".main",
            start: "top 20%",
            end: "top 38%",
            // markers: true,
            scrub: 2
        }
    })
    gsap.from(".page7-top .left, .page7-top .right ul", {
        y:-100,
        opacity:0,
        stagger: 0.5,
        duration: 1.7,
        scrollTrigger: {
            trigger: ".page7",
            scroller: ".main",
            start: "top 40%",
            end: "top 58%",
            // markers: true,
            scrub: 2
        }
    })
}

page7();


function cursorEffectsc() {
    var page1Content = document.querySelector('.page4-elem');
    var cursor = document.querySelector('.blackc');

    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })

}

cursorEffectsc();