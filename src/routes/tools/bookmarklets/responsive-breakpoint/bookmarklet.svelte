<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '$lib/components/buttons/button.svelte';
	export let data: any;
	export let dynamicString =
		'!function(){function t(){return document.getElementById("screen-width").innerText=window.innerWidth.toString()}(function t(){let e={xxl:{background:"' +
		data.backgroundColors.xxl +
		'",maxWidth:"' +
		data.breakpoint.xxl +
		'px",text:"' +
		data.text.xxl +
		'"},xl:{background:"' +
		data.backgroundColors.xl +
		'",maxWidth:"' +
		data.breakpoint.xl +
		'px",text:"' +
		data.text.xl +
		'"},lg:{background:"' +
		data.backgroundColors.lg +
		'",maxWidth:"' +
		data.breakpoint.lg +
		'px",text:"' +
		data.text.lg +
		'"},md:{background:"' +
		data.backgroundColors.md +
		'",maxWidth:"' +
		data.breakpoint.md +
		'px",text:"' +
		data.text.md +
		'"},sm:{background:"' +
		data.backgroundColors.sm +
		'",maxWidth:"' +
		data.breakpoint.sm +
		'px",text:"' +
		data.text.sm +
		'"},xs:{background:"' +
		data.backgroundColors.xs +
		'",maxWidth:"' +
		data.breakpoint.xs +
		'px",text:"' +
		data.text.xs +
		'"},static:{wrap:"width: 100%;letter-spacing:1px;background-color:' +
		data.backgroundColors.container +
		';text-align:right;font-family:helvetica !important;font-weight:100;line-height:20px;color:white;margin:auto;top:0;right:0;left:0;position:fixed;z-index:2147483647;font-size:18px;height:36px;text-rendering:optimizeLegibility;",panel:"position: absolute;padding: 3px 0;margin: 0 auto;width: 100%;right: 0;left: 0;top:0;bottom:0;",font:"font-size: inherit;color:inherit;font-weight:100;"}};function x(t,e,x){let i=document.createElement("p");i.setAttribute("style","margin: 0;padding: 5px; color: inherit;font-weight: inherit;"),i.setAttribute("title",`breakpoint: ${x}`),i.textContent=e,t.appendChild(i)}let i=document.createElement("div");i.className="xxxxxx_wraper_xxxxx",i.setAttribute("style",e.static.wrap),document.body.appendChild(i);let n=document.createElement("button");n.setAttribute("type","button"),n.className="xxxxxx_close_xxxxx",n.setAttribute("style","position:absolute;left:30px;top:8px !important;background-color:white;border-radius:50%;color:black;z-index:30;font-size:15px;font-weight:100;width:20px;height:20px;cursor:pointer;display:flex;justify-content:center;align-items:center;border:1px solid black;"),n.onclick=function t(){i.remove()},i.appendChild(n);let a=document.createElement("span");a.setAttribute("style","margin-top:-3px;"),a.textContent="x",n.appendChild(a);let l=document.createElement("section");l.className="xxxxxx_xxl_xxxxx",l.setAttribute("style",`max-width:${e.xxl.maxWidth};background-color:${e.xxl.background};${e.static.panel}z-index: 1;${e.static.font}`),x(l,e.xxl.text,e.xxl.maxWidth),i.appendChild(l);let o=document.createElement("section");o.className="xxxxxx_xl_xxxxx",o.setAttribute("style",`max-width:${e.xl.maxWidth};background-color:${e.xl.background};${e.static.panel}z-index: 2;${e.static.font}`),x(o,e.xl.text,e.xl.maxWidth),i.appendChild(o);let d=document.createElement("section");d.className="xxxxxx_lg_xxxxx",d.setAttribute("style",`max-width:${e.lg.maxWidth};background-color:${e.lg.background};${e.static.panel}z-index: 3;${e.static.font}`),x(d,e.lg.text,e.lg.maxWidth),i.appendChild(d);let r=document.createElement("section");r.className="xxxxxx_md_xxxxx",r.setAttribute("style",`max-width:${e.md.maxWidth};background-color:${e.md.background};${e.static.panel}z-index: 4;${e.static.font}`),x(r,e.md.text,e.md.maxWidth),i.appendChild(r);let s=document.createElement("section");s.className="xxxxxx_sm_xxxxx",s.setAttribute("style",`max-width:${e.sm.maxWidth};background-color:${e.sm.background};${e.static.panel}z-index: 5;${e.static.font}`),x(s,e.sm.text,e.sm.maxWidth),i.appendChild(s);let c=document.createElement("section");c.className="xxxxxx_xs_xxxxx",c.setAttribute("style",`max-width:${e.xs.maxWidth};background-color:${e.xs.background};${e.static.panel}z-index: 6;${e.static.font}`),x(c,e.xs.text,e.xs.maxWidth),i.appendChild(c);let p=document.createElement("section");p.className="xxxxxx_display_xxxxx",p.setAttribute("style",`width:200px;height:100%;margin:0 auto;position:relative;text-align:center;color:inherit;padding-top: 10px;letter-spacing:inherit;z-index:7;${e.static.font}`),i.appendChild(p);let m=document.createElement("span");m.setAttribute("style",e.static.font),m.setAttribute("id","screen-width"),p.appendChild(m)})(),t(),window.addEventListener("resize",function(e,x){clearTimeout(e),e=setTimeout(t,x)})}();';
	export let bookmarklet = 'javascript:' + dynamicString;

	const updateBookmarklet = () => {
		const bookmarklet = document.querySelector('.xxxxxx_wraper_xxxxx');
		console.log(bookmarklet);
		if (browser && bookmarklet) {
			bookmarklet.remove();
		}
		return new Function('return ' + dynamicString)();
	};
</script>

<textarea bind:value={bookmarklet} />
<Button type="button" handleClick={updateBookmarklet} buttonText="View Changes" />

<style lang="scss">
	textarea {
		width: 100%;
		height: 600px;
	}
</style>
