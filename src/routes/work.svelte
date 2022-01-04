<script lang="ts">
     import { Tabs, TabList, TabPanel, Tab } from '$lib/Tabs/tabs';

import data from '$lib/data/work.json';
import { fade, blur, fly, slide, scale } from "svelte/transition";

    

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
                <section class="work" in:scale out:fade>
                    <a href={all.link}>
                        <figure>
                            <img src={all.image} alt="replace me" />
                        </figure>
                    </a>
                    <a href={all.link}><h2>{all.title}</h2></a>
                    <p>{all.copy}</p>
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
                    <a href={project.link}><h2>{project.title}</h2></a>
                    <p>{project.copy}</p>
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
                    <a href={site.link}><h2>{site.title}</h2></a>
                    <p>{site.copy}</p>
                </section>
            {/each}
        </TabPanel>
    </Tabs>


<!-- <section class="work is-site">
    <a href="https://www.caribouperks.com/"><img class="is-full-width is-hard" src="/work/caribou/caribou_logo.jpg" alt="Caribou Perks Website"></a>
    <h2><a href="https://www.caribouperks.com/">Caribou Perks</a></h2>
    <p>My first project with Horizontal Integration. Caribou is often changing their look and feel. We had an awesome oportunity to updated their perks section. My first time using HI's Hive build system, which was really fun and powerful. Go over and peep the web app we made. Proud of how well this project turned out.</p>
            <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://sass-lang.com/">Scss</a></li>
            <li><a href="https://mozilla.github.io/nunjucks/">nunjucks</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href=" https://webpack.github.io/">Webpack</a></li>
            <li><a href="http://www.sitecore.net/">Sitecore</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="http://scrollmagic.io/">Picturefill</a></li>
            <li><a href="http://kenwheeler.github.io/slick/">Slick Slider</a></li>
            <li><a href="https://bitbucket.org/">Bitbucket</a></li>
            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
            <li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
        </ul>
</section>
<section class="work is-project">
    <a rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/looksee/mbfdhnjobheppodaolenppfegicnhmhp">
        <img class="is-full-width is-hard" src="/work/looksee/looksee-css-border-debugging-chrome-extension.png" alt="Looksee Chrome Extension for debugging css using borders on the fly" />
    </a>
    <div class="text-body">
        <h2><a rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/looksee/mbfdhnjobheppodaolenppfegicnhmhp">Looksee</a></h2>
        <p>I made a Chrome Extension for debugging layout on the fly. All you need to do is add a class, id, or selector. Concat them with a coma. It uses the power of sizzle syntax found in jQuery. Additionally you can apply a shader as well. This gives you a little peek as to how elements are layering in your window. The chrome extension is constently changing. Give it a shot! I would love your feedback. If you would like to contribute, <a href="https://github.com/Blumed/looksee">here is the repo.</a>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://sass-lang.com/">Scss</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="https://www.sketchapp.com/">Sketch</a></li>
            <li><a href="https://trello.com/">Trello</a></li>
            <li><a href="https://git-scm.com/">Git</a></li>
            <li><a href="https://developer.chrome.com/extensions/getstarted">Chrome Extension</a></li>
        </ul>
    </div>
</section>
<section class="work is-site">
    <a href="http://www.celadonwealth.com/">
        <img class="is-full-width is-hard" src="/work/celadon/celadon.jpg" alt="Celadon Wealth Responsive Website" />
    </a>
    <div class="text-body">
        <h2><a href="http://www.celadonwealth.com/">Celadon Managed Wealth</a></h2>
        <p>Celadon has been with Hellmoon for sometime now. We gave the site a small face lift to make the previous design mobile friendly. Rebuilt the site using Hellomoon's typography centric less system. My biggest take away was learning the power of inline-block.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://lesscss.org/">LESS</a></li>
            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="https://www.sketchapp.com/">Sketch</a></li>
            <li><a href="https://trello.com/">Trello</a></li>
            <li><a href="https://git-scm.com/">Git</a></li>
        </ul>
    </div>
</section>
<section class="work is-site">
    <a href="http://newell.hellomoon.net/">
        <img class="is-full-width is-hard" src="/work/rubbermaid/rubbermaid.jpg" alt="Newell Rubbermaid Animated Responsive Website" />
    </a>
    <div class="text-body">
        <h2><a href="http://newell.hellomoon.net/">Newell Rubbermaid</a></h2>
        <p>This was a really fun challenge, and my first project with Hellomoon. The site is fully responsive with plenty of animation, which works perfectly in all screen sizes. First time using <a href="http://scrollmagic.io/">scrollmagic.io</a> and <a href="https://greensock.com/">green sock</a>. Two completely awesome javascript libraries.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://lesscss.org/">LESS</a></li>
            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="http://scrollmagic.io/">Scroll Magic</a></li>
            <li><a href="https://greensock.com/">Green Sock</a></li>
            <li><a href="https://trello.com/">Trello</a></li>
            <li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
            <li><a href="https://git-scm.com/">Git</a></li>
        </ul>
    </div>
</section>
<section class="work is-site">
    <a href="http://www.levolor.com/">
        <img class="is-full-width is-hard" src="/work/levolor/levolor.jpg" alt="levolor blinds ecommerce responsive website" />
    </a>
    <div class="text-body">
        <h2><a href="http://www.levolor.com/">Levolor</a></h2>
        <p>Entered the project right after launch. Big focus on browser compatibility including specific android versions. Launched tablet version of the site for <a href="http://lowes.levolor.com/">Lowes </a> kiosk display. This project is currently still in progress.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://lesscss.org/">LESS</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="http://blesscss.com/">Bliss</a></li>
            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
            <li><a href="https://magento.com/">Magento</a></li>
            <li><a href="https://trello.com/">Trello</a></li>
            <li><a href="https://www.atlassian.com/software/jira">Jira</a></li>
            <li><a href="https://reactjs.org/">React</a></li>
            <li><a href="https://git-scm.com/">Git</a></li>
        </ul>
    </div>
</section>
<section class="work is-site">
        <a href="http://www.sleepnumber.com/">
            <img class="is-full-width is-hard" src="/work/sleepnumber/sleepnumber.jpg" alt="sleepnumber beds ecommerce responsive website" />
        </a>
    <div class="text-body">
        <h2><a href="http://www.sleepnumber.com/">Sleep Number</a></h2>
        <p>Was one of two front end developers working to maintain the code base. Started out as a contractor and was hired on within 6 months. First big role with the company was to help facilitate <a href="http://www.hybris.com/en/">Hybris</a> enterprise CMS integration. Second big project was the redesign. We made a fully responsive ecommerce site using <a href="https://github.com/larsonjj/generator-yeogurt">Yeogurt</a> templating system. Introduced <a href="https://trello.com/">Trello</a> to better organize our agile and diverse digital marketing team.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://sass-lang.com/">Scss</a></li>
            <li><a href="http://gruntjs.com/">Grunt</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="http://www.hybris.com/en/">Hybris</a></li>
            <li><a href="http://getbootstrap.com/">Bootstrap</a></li>
            <li><a href="https://github.com/larsonjj/generator-yeogurt">Yeogurt</a></li>
            <li><a href="http://jade-lang.com/">Jade</a></li>
            <li><a href="http://scottjehl.github.io/picturefill/">Picturefill</a></li>
            <li><a href="https://trello.com/">Trello</a></li>
            <li><a href="https://git-scm.com/">Git</a></li>
        </ul>
    </div>
</section>
<section class="work is-project">
    <a href="https://deviceinfo.io/">
        <img class="is-full-width is-hard" src="/work/deviceinfo/deviceinfo-logo.png" alt="sublime text plugin for impex files" /></a>
    <div class="text-body">
        <h2><a href="https://deviceinfo.io/">Device Info IO</a></h2>
        <p>Device Info IO are a few tools I created to help fellow web developers and clients communicate about devices for accurete bug tracking. It started out as a bookmarklet and instructions on how to install them on all your devices. The company I currently work for relies heavily on browserstack. My bookmarklet is not easily installed in that environment, so I made a chrome extension that pulls the same data and copies it to your clipboard for easy use.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
            <li><a href="http://sass-lang.com/">Scss</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="https://www.sketchapp.com/">Sketch</a></li>
            <li><a href="http://www.regular-expressions.info/">Regex</a></li>
            <li><a href="https://developer.chrome.com/extensions/getstarted">Chrome Extension</a></li>
        </ul>
    </div>
</section>
<section class="work is-project">
    <a href="/project/note-taker">
        <img class="is-full-width is-hard" src="/work/notetaker/notetaker.jpg" alt="simple note taker" />
    </a>
    <div class="text-body">
        <h2><a href="/project/note-taker">Simple Note Taker</a></h2>
        <p>Often I create small personal projects. One such project is a simple note taker, which I made to be mobile friendly. Built the app to be minimal and simple. The first section with a plus sign is going to be the file name. The gray section is the body of your note. Once you're done typing the save button will prompt.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="http://knockoutjs.com/">knockout.js</a></li>
        </ul>
    </div>
</section>
<section class="work is-site">
    <a href="https://www.countrywidetire.com/">
        <img class="is-full-width is-hard" src="/work/countrywide/countrywide.png" alt="simple note taker" />
    </a>
        <div class="text-body">
        <h2><a href="https://www.countrywidetire.com/">Countrywide Tire</a></h2>
        <p>Great project and great people. Lead front end developer on a nimble freelance team.</p>
        <ul class="styless -inline -paddingless">
            <li>Technology &mdash;</li>
            <li><a href="http://jekyllrb.com/">Jekyll</a></li>
            <li><a href="http://sass-lang.com/">Scss</a></li>
            <li><a href="http://gulpjs.com/">Gulp</a></li>
            <li><a href="https://jquery.com/">jQuery</a></li>
            <li><a href="https://www.sketchapp.com/">Sketch</a></li>
        </ul>
    </div>
</section>
<section class="work is-project">

    <div class="text-body">
        <h2><a href="https://codepen.io/Blummed/pen/3acd4bab605b21ec4ccb55543eaf8d2e/">Bootstrap Debug Bookmarklet</a></h2>
        <p data-height="265" data-theme-id="0" data-slug-hash="3acd4bab605b21ec4ccb55543eaf8d2e" data-default-tab="js,result" data-user="Blummed" data-embed-version="2" data-pen-title="Bootstrap Grid Tool" class="codepen">See the Pen <a href="https://codepen.io/Blummed/pen/3acd4bab605b21ec4ccb55543eaf8d2e/">Bootstrap Grid Tool</a> by Cullan (<a href="https://codepen.io/Blummed">@Blummed</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

    </div>
</section> -->
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

</style>
