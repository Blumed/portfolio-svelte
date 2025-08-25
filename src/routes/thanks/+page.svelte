<script>
    import { browser } from "$app/environment";
    import saxy from "$lib/assets/images/sax-bois.webp";
    if (browser) {
        (function animateAndRedirect() {
            const circles = document.querySelectorAll(".circle");
            let remainingCircles = Array.from(circles);

            // If no circles are found on the page, do nothing.
            if (remainingCircles.length === 0) {
                setTimeout(() => {
                    console.log("No elements to animate.");
                    window.location.href = "/";
                }, 850);
                return;
            }

            const allAnimationsDone = new Promise((resolve) => {
                setTimeout(() => {
                    const animationInterval = setInterval(() => {
                        // If there are no more circles to animate, stop and resolve
                        if (remainingCircles.length === 0) {
                            clearInterval(animationInterval);
                            // Add a delay for the last animation to finish before resolving
                            setTimeout(resolve, 700); // Match the animation duration (0.7s)
                            return;
                        }

                        const randomIndex = Math.floor(
                            Math.random() * remainingCircles.length,
                        );
                        const circleToAnimate = remainingCircles[randomIndex];

                        circleToAnimate.classList.add("scale-down-animate");
                        remainingCircles.splice(randomIndex, 1);
                    }, 500); // 500ms delay between each random animation
                }, 850); // 1000ms (1 second) initial delay
            });

            allAnimationsDone.then(() => {
                console.log(
                    "All animations are complete. Redirecting to homepage...",
                );
                window.location.href = "/";
            });
        })();
    }
</script>

<h1 class="sr-only">Thank you for reaching out 🎉</h1>

<div class="long-line">
    <img class="circle" src={saxy} alt="Roller Coster Saxophone players" />
    <img class="circle" src={saxy} alt="Roller Coster Saxophone players" />
    <img class="circle" src={saxy} alt="Roller Coster Saxophone players" />
    <div class="circle">
        <span class="sr-only"
            >This is an empty visual space please ignore and sorry</span
        >
    </div>
    <img class="circle" src={saxy} alt="Roller Coster Saxophone players" />
    <img class="circle" src={saxy} alt="Roller Coster Saxophone players" />
    <div class="circle">
        <span class="sr-only"
            >This is an empty visual space please ignore and sorry</span
        >
    </div>
    <div class="circle">
        <span class="sr-only"
            >This is an empty visual space please ignore and sorry</span
        >
    </div>
    <img class="circle" src={saxy} alt="Roller Coster Saxophone players" />
</div>

<style>
    img {
        display: block;
        aspect-ratio: 1 / 1;
    }
    .circle {
        display: block;
        border-radius: 50%;
        background-color: var(--pure-white);
        height: auto;
        width: 100%;
        max-width: 256px;
        transform: scale(1);
        opacity: 1;
    }

    .long-line {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
        grid-auto-rows: minmax(80px 265px);
        gap: 1rem;
    }
    :global(.scale-down-animate) {
        animation: scaleDown 0.7s ease-in-out forwards;
    }
    @keyframes scaleDown {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(0);
            opacity: 0;
        }
    }
</style>
