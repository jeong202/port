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

}
