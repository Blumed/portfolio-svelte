<script>
    import { browser } from "$app/environment";

    function updateClockHands() {
        const now = new Date(); // Get the current date and time
        let hours = now.getHours() % 12; // Extract the current hour (0-23)
        hours = hours ? hours : 12;
        const minutes = now.getMinutes(); // Extract the current minute (0-59)
        const seconds = now.getSeconds(); // Extract the current second (0-59)

        // console.log(hours, minutes, seconds);

        // Calculate degrees for the hour hand:
        const hourDegrees = hours * 30 + (minutes / 60) * 30;

        // Calculate degrees for the minute hand:
        const minuteDegrees = minutes * 6 + (seconds / 60) * 6;

        // Calculate degrees for the second hand:
        const secondDegrees = seconds * 6;

        const hour = browser && document.querySelector(".hour");
        const minute = browser && document.querySelector(".minute");
        //const second = document.querySelector('.second');
        hour.style.transform = `rotate(${hourDegrees}deg)`;
        minute.style.transform = `rotate(${minuteDegrees}deg)`;
        //second.style.transform = `rotate(${secondDegrees}deg)`;

        // console.log("Current time in degrees:");
        // console.log("Hour hand:", hourDegrees);
        // console.log("Minute hand:", minuteDegrees);
        // console.log("Second hand:", secondDegrees);

        // Use requestAnimationFrame to call this function again before the next repaint
        if (browser) requestAnimationFrame(updateClockHands);
    }
    if (browser) requestAnimationFrame(updateClockHands);
    // const child = document.querySelector('.minute');
    // child.style.transform = `rotate(${minuteHandPosition}deg)`;
    // console.log(`Minute hand degree: ${minuteHandPosition}deg`);
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Mrs+Saint+Delafield&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="clock-frame sphere-container">
    <div class="letter hour sphere">
        <button type="button" class="button button-mother"
            >Show Letter From Mother</button
        >
        <div class="letter-inner">
            <p>My Dearest Son Robert,</p>

            <p>
                May this letter find you in good health and high spirits aboard
                your ship. It has been a long time since your departure from the
                docks. The days feel long without your presence. A safe return
                is hoped for, and that you encounter fair winds and favorable
                seas.
            </p>
            <p>
                The local news remains consistent. The crops are thriving, and
                the weather has been favorable. A successful harvest is
                expected, ensuring ample provisions for the winter. Martha, from
                down the lane, married the blacksmith's son last month – a
                suitable match.
            </p>
            <p>
                Out on the sea, your well-being is a concern. A woman at the
                market shared stories of storms, which caused worry. However,
                you are a strong and capable man, and your safety is prayed for
                each night.
            </p>
            <p>
                Maintain proper behavior and avoid temptations in foreign ports.
                Remember your roots. Pride is felt for you, and your next letter
                is eagerly awaited. Please write to share your safety and
                well-being.
            </p>

            <p>
                You are always in our thoughts and prayers.<br />
                With the deepest affection,
            </p>
            <p>Your loving Mother.</p>
        </div>
    </div>
    <div class="letter minute">
        <button type="button" class="button button-son"
            >Show Letter From Son</button
        >
        <div class="letter-inner">
            <p>My Dearest Mother,</p>

            <p>
                I received your letter when we docked in Rochester harbor. How
                are you and Thomas fairing these days? Your garden must be a
                blissful sight by this point. I long to see the flowers you
                speak of in your previous letter.
            </p>

            <p>
                The crew has been battling foul winds for the past few days,
                which makes the work all the harder. The sails need constant
                adjustment, and the deck is perpetually slick with spray.
                Prayers are offered for fair winds and a smooth passage, so that
                the crew may reach their destination and return home safely. I
                often think of the your prayers for my well-being, and they give
                me strength in these trying times.
            </p>
            <p>
                The comforts of home are missed, particularly the warmth of the
                fire and your warmth and tenderness. I dreams of returning and
                sharing tales of adventures, though some of the rougher details
                will be omitted to spare the mother worry.
            </p>

            <p>
                Your ever Dutiful and affectionate Son,<br />
                Robert
            </p>
        </div>
    </div>
    <div class="second"></div>
</div>

<style>
    .clock-frame {
        display: grid;
        grid-template-columns: 1fr; /* Two columns */
        grid-template-rows: 1fr; /* Two rows */
        justify-content: center;
    }
    .button {
        color: transparent;
        rotate: 90deg;
        color: transparent;
        position: absolute;
        background-color: transparent;
        border: 0;
        top: -54px;
        width: 42px;
        &:after {
            content: "";
            width: 30%;
            height: 2px;
            background-color: black;
            position: absolute;
            inset: 50% 0;
            z-index: 1;
        }
    }
    .button-mother {
        top: -53px;
        &:before {
            content: "";
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #f22105;
            display: block;
            position: absolute;
            top: 64px;
            left: -20px;
        }
    }
    .button-son {
        /* top: -9.6%; */
        &:before {
            content: "";
            width: 10px;
            height: 20px;
            border-radius: 50%;
            border-radius: 0 20px 20px 0;
            border-top: 2px solid black;
            border-right: 2px solid black;
            border-bottom: 2px solid black;
            display: block;
            position: absolute;
            top: 63px;
            left: -10px;
        }
    }
    .letter {
        max-width: 900px;
        width: 100vw;
        max-height: 900px;
        height: 100vw;
        margin: auto;
        transform-origin: center;
        border: 2px solid black;
        border-radius: 50%;
        font-family: "Mrs Saint Delafield", cursive;
        font-weight: 400;
        font-style: normal;
        line-height: 1.5;
        font-size: 1.25rem;
        display: grid;
        place-items: center;

        &.hour {
            grid-area: 1 / 1 / 2 / 2; /* Item 1 in the first cell */
            /* Create the 3D effect with a gradient and transparency */
            background: radial-gradient(
                circle at 35% 35%,
                /* Position the light source highlight */
                    rgba(255, 255, 255, 0.8) 0%,
                /* Bright highlight */ rgba(255, 255, 255, 0.2) 40%,
                /* Main body of the sphere */ rgba(0, 0, 0, 0.2) 90%,
                /* Shaded edge for depth */ transparent 100%
            );

            /* Add a subtle shadow to lift it off the page */
            box-shadow:
                0 20px 30px rgba(0, 0, 0, 0.2),
                inset 0 -10px 30px rgba(0, 0, 0, 0.3);
        }
        &.minute {
            grid-area: 1 / 1 / 2 / 2; /* Item 1 in the first cell */
        }
        & .letter-inner {
            padding: 12%;
        }
    }
</style>
