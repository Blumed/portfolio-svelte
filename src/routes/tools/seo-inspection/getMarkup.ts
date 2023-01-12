const getMarkup = () => {
    const myHeaders = new Headers();
myHeaders.append("User-Agent", "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
    fetch("https://cullanluther.com", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}