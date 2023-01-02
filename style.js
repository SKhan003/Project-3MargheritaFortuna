function show() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function FirstPageAni() {
  var tl = gsap.timeline();
  tl
    .to("#page1 h1", {
      duration: 2,
      color: "white",
      OnStart: function () {
        $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });
      }
    })
    .to("#overlay", {
      top: "-100%",
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to("#img1", {
      top: "85%",
      duration: 1,
      delay: -1

    })
}

function curser() {
  let circle = document.querySelector(".cursor");


  window.addEventListener("mousemove", function (dets) {
    let xvalue = dets.pageX;
    let yvalue = dets.pageY;
    this.setTimeout(function () {
      circle.style.left = xvalue + "px";
      circle.style.top = yvalue + "px";
    })
  })

}

function AllAni() {
  var tmlne = gsap.timeline();
  tmlne
    .from("#page3 #text ", {
     opacity: 0,
      scrollTrigger: {
        trigger: "#page3 #text ",
        scroller: "#main",
        start: "top 60%",
        toggleActions: 'play pause resume reverse'
      }
    })
    .from("#page6 #text", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#page6 #text",
        scroller: "#main",
        start: "top 50%",
        toggleActions: 'play pause resume reverse'
      }

    })
    .from("#page7 #detail", {
     opacity: 0,
      x: "-50px",
      scrollTrigger: {
        trigger: "#page7 #detail",
        scroller: "#main",
        start: "top 80%",
        toggleActions: 'play pause resume reverse'
      },

    })
    .from("#page8 #center #img", {
      scrollTrigger: {
        trigger: "#page8 #center #img",
        Scroller: "#main",
        start: "top 60%",
      }
    })
    .from("#page8 #text", {
     opacity: 0,

      scrollTrigger: {
        trigger: "#page8 #text",
        scroller: "#main",
        start: "top 50%",
        toggleActions: "play pause resume reverse",
      }

    })
    .from("#page9 #awwward>h1", {
      opacity: 0,
      x: "-50px",
      scrollTrigger: {
        trigger: "#page9 #awwward>h1",
        scroller: "#main",
        start: "top 80%",
        toggleActions: 'play pause resume reverse'
      },

    })
    .from("#page11 #img3", {
     opacity: 0,
      x: "100px",
      scrollTrigger: {
        trigger: "#page11 #img3",
        scroller: "#main",
        start: "top 80%",
        scrub: true,
        toggleActions: 'play pause resume reverse'
      },

    })
    .from("#page12 #love>h1", {
     opacity: 0,
      x: "-50px",
      scrollTrigger: {
        trigger: "#page12 #love>h1",
        scroller: "#main",
        start: "top 80%",
        toggleActions: 'play pause resume reverse'
      },

    })

}

function locomotiveInitilze(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}


function cardshow(){
  document.querySelectorAll(".cnt")
  .forEach(function(cnt){
    var showimg; 
    cnt.addEventListener("mousemove",function(dets){
      document.querySelector("#crsr").children[dets.target.dataset.index].style.opacity = 1;
        showimg = dets.target;
      document.querySelector("#crsr").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })
    cnt.addEventListener("mouseleave",function(dets){
      document.querySelector("#crsr").children[showimg.dataset.index].style.opacity = 0;
    })
  })
}

cardshow();
show();
FirstPageAni();
curser();
AllAni();
locomotiveInitilze();

