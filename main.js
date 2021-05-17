const powerButtons = document.getElementsByClassName('main__button');
const channelListItem = document.getElementsByClassName('channel__list-item');
const tvScreen = document.getElementById('screen');
powerButtons[0].addEventListener("click", () => {
    tvScreen.style.backgroundColor = "#fff";
});
powerButtons[1].addEventListener("click", () => {
    tvScreen.style.backgroundColor = "#999";
    tvScreen.style.backgroundImage = "url('')";
});
channelListItem[0].addEventListener("click", () => {
    tvScreen.style.backgroundColor = "#fff";
    tvScreen.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/original/001/099/188/818')";
});
channelListItem[1].addEventListener("click", () => {
    tvScreen.style.backgroundColor = "#fff";
    tvScreen.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/1/14/Jetix_logo.png')";
});
channelListItem[2].addEventListener("click", () => {
    tvScreen.style.backgroundColor = "#fff";
    tvScreen.style.backgroundImage = "url('https://1000logos.net/wp-content/uploads/2021/04/MTV-logo.png')";
});
channelListItem[3].addEventListener("click", () => {
    tvScreen.style.backgroundColor = "#fff";
    tvScreen.style.backgroundImage = "url('https://bethfukumoto.com/wp-content/uploads/2020/06/netflix-logo-circle-png-5-1.png')";
});