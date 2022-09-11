<script land="ts">
    if (typeof window !== 'undefined') {
        window.onscroll = function () {
            window.onscroll = null;
            let script;

            script = document.createElement('script');
            script.async = true;
            script.id = 'twitter-wjs';
            script.src = '//platform.twitter.com/widgets.js';
            document.body.appendChild(script);
        };
    }
</script>
<a class="twitter-timeline" href="https://twitter.com/CullanLuther?ref_src=twsrc%5Etfw">Tweets by CullanLuther</a>