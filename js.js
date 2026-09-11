
function changeButtonBackground(button, image, link) {
  button.style.backgroundImage = `url('${image}')`;
  button.style.backgroundSize = 'cover';
  button.style.backgroundPosition = 'center';
  button.style.color = 'white';
  setTimeout(() => {
    window.open(link, '_blank'); 
  }, 1200);
}


const fbBtn = document.getElementById('facebookBtn');
if (fbBtn) {
  fbBtn.addEventListener('click', function(e) {
    e.preventDefault();
    changeButtonBackground(this, 'fb.jpg', this.href);
  });
}

const twBtn = document.getElementById('twitterBtn');
if (twBtn) {
  twBtn.addEventListener('click', function(e) {
    e.preventDefault();
    changeButtonBackground(this, 'twitter.jpg', this.href);
  });
}

const igBtn = document.getElementById('instagramBtn');
if (igBtn) {
  igBtn.addEventListener('click', function(e) {
    e.preventDefault();
    changeButtonBackground(this, 'insta.jpg', this.href);
  });
}

const dcBtn = document.getElementById('discordBtn');
if (dcBtn) {
  dcBtn.addEventListener('click', function(e) {
    e.preventDefault();
    changeButtonBackground(this, 'dc.jpg', this.href);
  });
}

const tgBtn = document.getElementById('telegramBtn');
if (tgBtn) {
  tgBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open(this.href, '_blank');
  });
}


const aboutBtn = document.getElementById('aboutBtn');
const aboutDrawer = document.getElementById('aboutDrawer');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

function toggleAboutModal() {
  aboutDrawer.classList.toggle('show');
  aboutBtn.classList.toggle('active');
}

if (aboutBtn && aboutDrawer) {
  aboutBtn.addEventListener('click', toggleAboutModal);
}

if (closeDrawerBtn) {
  closeDrawerBtn.addEventListener('click', toggleAboutModal);
}


window.addEventListener('click', (e) => {
  if (e.target === aboutDrawer) {
    toggleAboutModal();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
});
