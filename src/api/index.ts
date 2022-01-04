import { google } from 'googleapis';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get() {

    const url = 'https://ws.audioscrobbler.com/2.0/'
    const data = {`'method=user.gettopartists&' +
    'user=copcircles&' +
    'limit=12&' +
    'api_key=f7816da1f6c9d00d09ee8e5e92c935c6&format&' +
    'format=json&' +
    'callback=myTopArtists'`}
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      

    // return {
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: getRows.data.values
    // }
    
}