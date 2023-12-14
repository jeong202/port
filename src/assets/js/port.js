export function port() {
  const hide = (item) => {
    gsap.set(item, { autoAlpha: 0 }); //set=> gsap로 css설정하기
  }

  const animate = (item) => { //item=reveal
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if (item.classList.contains("reveal_LTR")) {
      x = -100,
        y = 0
    } else if (item.classList.contains("reveal_BTT")) {
      x = 0,
        y = 100
    } else if (item.classList.contains("reveal_TTB")) {
      x = 0,
        y = -100
    } else if (item.classList.contains("reveal_RTL")) {
      x = 100,
        y = 0
    } else {
      x = 100,
        y = 0
    }



    gsap.fromTo(item,
      { autoAlpha: 0, x: x, y: y },
      { autoAlpha: 1, x: 0, y: 0, delay: delay, duration: 1.25, overwrite: "auto", ease: "expo" })
  }

  gsap.utils.toArray(".reveal").forEach(item => {
    hide(item);

    ScrollTrigger.create({
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      // markers: true,
      onEnter: () => { animate(item) }
    })
  });

  //배경색 효과
  gsap.utils.toArray(".parallax__item").forEach(item => {
    let color = item.getAttribute("data-bgcolor");
    let currentColor = gsap.getProperty("body", "backgroundColor");

    ScrollTrigger.create({
      trigger: item,
      start: "top 50%",
      end: "bottom 20%", // 원하는 위치에 따라 이 값을 조정하세요
      markers: true,

      onEnter: () => gsap.to("body", {
        backgroundColor: color,
        duration: 1.4
      }),
      onLeave: () => {
        if (item.id === "section1") {
          gsap.to("body", {
            backgroundColor: currentColor,
            duration: 1.4
          });
        }
        if (item.id === "section4") {
          gsap.to("body", {
            backgroundColor: currentColor,
            duration: 1.4
          });
        }
      },
      onEnterBack: () => gsap.to("body", {
        backgroundColor: color,
        duration: 1.4
      }),
      onLeaveBack: () => {
        if (item.id === "section1") {
          gsap.to("body", {
            backgroundColor: currentColor,
            duration: 1.4
          });
        }
        if (item.id === "section4") {
          gsap.to("body", {
            backgroundColor: currentColor,
            duration: 1.4
          });
        }
      }
    });
  });

}
