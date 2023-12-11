export function tech() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.tech__stack.t6').forEach(stack => {
        const stackName = stack.querySelector('.stack__name');
        const stackDesc = stack.querySelector('.stack__desc');

        gsap.set([stackName, stackDesc], { opacity: 0, y: '+=20' });

        ScrollTrigger.create({
            trigger: stack,
            start: 'top 60%',
            onEnter: () => {
                gsap.to([stackName, stackDesc], { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 });
            },
        });
    });
}   