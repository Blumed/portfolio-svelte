<!-- <script lang="ts">
    import { onMount } from 'svelte';

try {
    fetch('https://ws.audioscrobbler.com/2.0/', {
        method: 'post',
        data : 'method=user.gettopartists&' +
           'user=copcircles&' +
           'limit=12&' +
           'api_key=f7816da1f6c9d00d09ee8e5e92c935c6&format&' +
           'format=json&' +
           'callback=myTopArtists',
    dataType : 'jsonp',

    })
}
catch(err){
    console.log(err);
}

function myTopArtists(JSONdata) {
    onMount(() => {
    var oTopArtists = JSONdata.topartists.artist;
    var wrapper, img, a, h4;

    for (var i = 0; i < oTopArtists.length; i++) {

        // eParent = document.getElementById("listTopArtists");
        // eChild = document.createElement("li");
        // eChild.appendChild(document.createTextNode(oTopArtists[i]["name"]));
        // eChild.setAttribute("value", oTopArtists[i]["rank"]);
        // eParent.appendChild(eChild);

        if (oTopArtists[i] != "") {
            wrapper = document.getElementById("row-one");
            a = document.createElement("a");
            img = document.createElement("img");
            h4 = document.createElement("h4");
            a.setAttribute("href", oTopArtists[i].url);
            img.setAttribute("src", oTopArtists[i].image[2]["#text"]);
            img.setAttribute("class", "img-grow");
            h4.innerHTML="" + oTopArtists[i].name + "";
            wrapper.appendChild(a);
            a.appendChild(img);
            a.appendChild(h4);
            
        }
    }
})
}
</script> -->