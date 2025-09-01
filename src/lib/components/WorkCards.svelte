<script>
    import employers from "$lib/data/employers.json";
    import capella from "$lib/assets/images/company/capella_university_logo.jpg";
    import sleepnumber from "$lib/assets/images/company/sleep_number_logo.jpg";
    import hellomoon from "$lib/assets/images/company/hellomoon_logo.jpg";
    import horizontal from "$lib/assets/images/company/horizontalinc_logo.jpg";
    import wheniwork from "$lib/assets/images/company/wheniwork_logo.jpg";
    const employersAll = employers.data.map((item) => item);
    const employerLogos = [
        wheniwork,
        horizontal,
        hellomoon,
        sleepnumber,
        capella,
    ];
</script>

<div class="cards">
    {#each employersAll as employer, i}
        <article class="card">
            <header>
                <img
                    class="employer-logo"
                    src={employerLogos[i]}
                    alt="When I Work"
                />
                <h2 class="employer-name">
                    <a href={employer.link} class="employer-link"
                        >{employer.who}</a
                    >
                </h2>
            </header>
            <p class="employer-when">
                <strong>When: </strong><small>{employer.when}</small>
            </p>
            <p class="employer-title">
                <strong>Title: </strong><small>{employer.title}</small>
            </p>
            <figure>
                <figcaption class="employer-list-title">
                    {employer.listTitle}:
                </figcaption>
                <ul>
                    {#each employer.listItems as item}
                        <li class="employer-list-item">{item}</li>
                    {/each}
                </ul>
            </figure>
            <details>
                <summary>More Information</summary>
                <p>{employer.what}</p>
            </details>
        </article>
    {/each}
</div>

<style>
    .cards {
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 22px;
        margin-bottom: 34px;
    }
    .card {
        background-color: var(--pure-white);
        padding: 56px 32px 32px;
        border-radius: 24px;
        border: 2px solid var(--primary-color);
        box-shadow: 6px 6px 0 0 var(--primary-color);
        display: flex;
        flex-direction: column;

        & header {
            text-align: center;
        }
        & img {
            border-radius: 12%;
        }
        & a {
            color: var(--primary-color);
        }
        & ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        & figure {
            margin: 0;
        }
        & details {
            margin-top: auto;
        }
    }
    .employer-name {
        margin-block: 10px;
    }
    .employer-when {
        margin: 0;
        & strong {
            margin-right: 0.7rem;
        }
    }
    .employer-title {
        margin-block: 0px 4px;
        & strong {
            margin-right: 1.4rem;
        }
    }
</style>
