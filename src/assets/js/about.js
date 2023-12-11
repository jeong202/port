export function about() {
    // about__img1
    // 회전할 이미지 선택
    const rotatingImg = document.querySelector('.rotating-img');

    // GSAP 애니메이션
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(rotatingImg, {
        rotation: 720,
        ease: 'ease-in-out',
        scrollTrigger: {
            trigger: rotatingImg,
            start: '-=900',
            end: '+=4000',
            scrub: true,
            // markers: true
        },
    });

    //  텍스트 t5
    gsap.registerPlugin(ScrollTrigger);

    const targets = gsap.utils.toArray(".split");

    targets.forEach(target => {
        let SplitClient = new SplitType(target, { type: "lines, words, chars" });
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;
    })

    gsap.set(".about__text1 .t5 .char", { opacity: 0 });

    gsap.to(".split.t5 .char", {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        stagger: 0.05,
        duration: 2,  // 여기에 duration을 추가
        scrollTrigger: {
            trigger: ".split.t5 .char",
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
            markers: false
        }
    });


    //  about__img2
    const rotatingImg2 = document.querySelector('.rotating-img2');

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(rotatingImg2, {
        rotation: 720,
        ease: 'ease-in-out',
        scrollTrigger: {
            trigger: rotatingImg2,
            start: '-=900',
            end: '+=4000',
            scrub: true,
            // markers: true
        },
    });

    // ExploreMore 이미지에 흔들리는 효과 추가
    const exploreMoreImg = document.querySelector('.about__img2');

    exploreMoreImg.addEventListener('mouseenter', () => {
        exploreMoreImg.classList.add('shaking');
    });

    exploreMoreImg.addEventListener('mouseleave', () => {
        exploreMoreImg.classList.remove('shaking');
    });

}