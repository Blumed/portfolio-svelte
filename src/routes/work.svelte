<script lang="ts">
     import { Tabs, TabList, TabPanel, Tab } from '$lib/Tabs/tabs';

import data from '$lib/data/work.json';
import { scale } from "svelte/transition";

    

const dataAll = data.data.map(item => item);
const projects = data.data.filter(item => item.type === 'project');
const sites = data.data.filter(item => item.type === 'site');

</script>

<div class="container">
    <h1 class="page-title">Work</h1>
    <Tabs>
        <TabList>
            <Tab>All</Tab>
            <Tab>Projects</Tab>
            <Tab>Sites</Tab>
        </TabList>
        <TabPanel>
            {#each dataAll as all}
                <section class="work" in:scale out:scale>
                    <a href={all.link}>
                        <figure>
                            <img src={all.image} alt="replace me" />
                        </figure>
                    </a>
                    <h2><a href={all.link}>{all.title}</a></h2>
                    <p>{all.copy}</p>
                    <h3 class="work-type">Type: <span>{all.type}</span></h3>
                    <h3 class="list-title">Technologies: </h3>
                    <ul>
                        {#each all.technologies as technology}
                            <li>{technology}</li>
                        {/each}
                    </ul>
                </section>
            {/each}
        </TabPanel>
        <TabPanel>
            {#each projects as project}
                <section class="work" in:scale out:scale>
                    <a href={project.link}>
                        <figure>
                            <img src={project.image} alt="replace me" />
                        </figure>
                    </a>
                    <h2><a href={project.link}>{project.title}</a></h2>
                    <p>{project.copy}</p>
                    <h3 class="list-title">Technologies &mdash;</h3>
                    <ul>
                        {#each project.technologies as technology}
                            <li>{technology}</li>
                        {/each}
                    </ul>
                </section>
            {/each}
        </TabPanel>
    
        <TabPanel>
            {#each sites as site}
                <section class="work" in:scale out:scale>
                    <a href={site.link}>
                        <figure>
                            <img src={site.image} alt="replace me" />
                        </figure>
                    </a>
                    <h2><a href={site.link}>{site.title}</a></h2>
                    <p>{site.copy}</p>
                    <h3 class="list-title">Technologies &mdash;</h3>
                    <ul>
                        {#each site.technologies as technology}
                            <li>{technology}</li>
                        {/each}
                    </ul>
                </section>
            {/each}
        </TabPanel>
    </Tabs>
</div>

<style>
    .work img {
        max-width: 100%;
        height: auto;
    }
    .work {
        transition: height 0.5s ease-in-out;
    }
    .work figure {
        margin: 0;
    }
    .work h2 {
        font-size: 1.5rem;
        font-weight: bolder;
        color: black;
    }
    .work h2 a {
        color: inherit;
    }
    .work-type span {
        text-transform: capitalize;
        color: #666;
    }
    .work .list-title {
        display: inline-flex;
        margin-top: 0;
    }
    .work ul {
        display: inline-flex;
        margin: 0;
    }
    .work li {
        color: #666;
    }
    .work li:not(:last-child):after {
        content: ',';
        margin-right: 5px;
    }

</style>
