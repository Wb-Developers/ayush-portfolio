// Percentage count down
let countIt=()=>{
const countDown1 = () => {
    let Num = Number(document.getElementById('num95').innerHTML);
    let newNum;
    if (Num < 95) {
        newNum = Num + 1;
    } else {
        newNum = 95;
    }
    document.getElementById('num95').innerHTML = newNum;
    return newNum;
}
setInterval(countDown1, 40);

const countDown2 = () => {
    let Num = Number(document.getElementById('num70').innerHTML);
    let newNum;
    if (Num < 70) {
        newNum = Num + 1;
    } else {
        newNum = 70;
    }
    document.getElementById('num70').innerHTML = newNum;
    return newNum;
}
setInterval(countDown2, 40);

const countDown3 = () => {
    let Num = Number(document.getElementById('num90').innerHTML);
    let newNum;
    if (Num < 90) {
        newNum = Num + 1;
    } else {
        newNum = 90;
    }
    document.getElementById('num90').innerHTML = newNum;
    return newNum;
}
setInterval(countDown3, 40);

}
gsap.to(".counters ", {
opacity: 1,
scrollTrigger: {
    trigger: ".counters",
    start: "40% 80%",
    end: "40% 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
onEnter: () => countIt(),

}
})

// Progress-bar
const container = document.getElementById('page');
const highlight = document.getElementById('progressHeight');

let containerHeight;
let containerPos;
window.onscroll = () => {
containerHeight = container.offsetHeight - window.innerHeight;
containerPos = container.getBoundingClientRect();
diff = containerHeight + containerPos.top;
progressPercentage = diff / containerHeight * 100;
cssWidth = Math.floor(100 - progressPercentage);
highlight.style.width = cssWidth + "%";

}     
// Responsive Menu
$(document).ready(() => {
$(".menu_icon").click(() => {
    $(".overlay").addClass("show");
    $("body").css("overflow-y", "hidden");
    setTimeout(() => {
        $(".mobile_menu").addClass("fade");
    }, 400);
    setTimeout(() => {
        $(".close_btn").addClass("fade_bottom");
    }, 900);
    setTimeout(() => {
        $(".mobile_menu ul li:first-child").addClass("fade_up");
    }, 1000);
    setTimeout(() => {
        $(".mobile_menu ul li:nth-child(2)").addClass("fade_up");
    }, 1200); setTimeout(() => {
        $(".mobile_menu ul li:nth-child(3)").addClass("fade_up");
    }, 1400); setTimeout(() => {
        $(".mobile_menu ul li:nth-child(4)").addClass("fade_up");
    }, 1600); setTimeout(() => {
        $(".mobile_menu ul li:last-child").addClass("fade_up");
    }, 1800);
});
$(".close_btn>span").click(() => {
    $(".overlay").removeClass("show");
    $(".mobile_menu").removeClass("fade");
    $(".close_btn").removeClass("fade_bottom");
    setTimeout(() => {
        $(".mobile_menu ul li:first-child").removeClass("fade_up");
    }, 800);
    setTimeout(() => {
        $(".mobile_menu ul li:nth-child(2)").removeClass("fade_up");
    }, 700); setTimeout(() => {
        $(".mobile_menu ul li:nth-child(3)").removeClass("fade_up");
    }, 600); setTimeout(() => {
        $(".mobile_menu ul li:nth-child(4)").removeClass("fade_up");
    }, 500); setTimeout(() => {
        $(".mobile_menu ul li:last-child").removeClass("fade_up");
    }, 400);
    $("body").css("overflow-y", "visible");
});
$(".overlay").click(() => {
    $(".overlay").removeClass("show");
    $(".mobile_menu").removeClass("fade");
    $(".close_btn").removeClass("fade_bottom");
    setTimeout(() => {
        $(".mobile_menu ul li:first-child").removeClass("fade_up");
    }, 800);
    setTimeout(() => {
        $(".mobile_menu ul li:nth-child(2)").removeClass("fade_up");
    }, 700); setTimeout(() => {
        $(".mobile_menu ul li:nth-child(3)").removeClass("fade_up");
    }, 600); setTimeout(() => {
        $(".mobile_menu ul li:nth-child(4)").removeClass("fade_up");
    }, 500); setTimeout(() => {
        $(".mobile_menu ul li:last-child").removeClass("fade_up");
    }, 400);
    $("body").css("overflow-y", "visible");

});


});

gsap.to(".image", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".image",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".skills_wrap_left", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".skills_wrap_left",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".craftImg ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".craftImg ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".cateringImg ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".cateringImg ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".clients ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".clients ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".cateringImg ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".cateringImg ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".netflixText ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".netflixText ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".netflixText ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".netflixText ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".seosText ", {
 
y: -100,
opacity: 1,
scrollTrigger: {
    trigger: ".seosText ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
// slide_left
gsap.to(".content ", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".content ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".second>h1", {
 
y: 100,
opacity: .1,
scrollTrigger: {
    trigger: ".content>h2",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".skills_wrap_right ", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".skills_wrap_right ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".craftText ", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".craftText ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".cateringText ", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".cateringText ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})

gsap.to(".netflixImg", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".netflixImg ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})
gsap.to(".seosImg ", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".seosImg ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})

gsap.to(".coffee ", {
 
y: 100,
opacity: 1,
scrollTrigger: {
    trigger: ".coffee ",
    start: "top 100%",
    end: "top 0%",
    scrub: 1,
    toggleActions: "restart reverse revese none",
    markers: false,
}
})


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
