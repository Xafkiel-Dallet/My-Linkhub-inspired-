function changeButtonBackground(button, image, link) {
  button.style.backgroundImage = `url('${image}')`;
  button.style.backgroundSize = 'cover';
  button.style.backgroundPosition = 'center';
  button.style.color = 'white';
  setTimeout(() => {
    window.open(link, '_blank'); 
  }, 1500);
}

document.getElementById('facebookBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'Images/fb.jpg', this.href);
});

document.getElementById('Images/twitterBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'Images/twitter.jpg', this.href);
});

document.getElementById('Images/instagramBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'Images/insta.jpg', this.href);
});

document.getElementById('Images/discordBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'Images/dc.jpg', this.href);
});

document.getElementById('tiktokBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'Images/tiktok.jpg', this.href);
});

document.getElementById('telegramBtn').addEventListener('click', function(e) {
  e.preventDefault();
  changeButtonBackground(this, 'Images/tg.jpg', this.href);
});
