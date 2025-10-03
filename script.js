const profileBox = document.querySelector('.profilebox');
const video = profileBox.querySelector('.profile-video');

// remove muted so audio can play
video.muted = false;

profileBox.addEventListener('mouseenter', () => {
  video.play().catch(err => {
    console.log("Autoplay with sound blocked by browser:", err);  //catch error if autoplay with sound is blocked
  });
});

profileBox.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0;
});
// pause and reset video when mouse leaves the profile box


//my code

// const profile = document.querySelector('.profilebox');
// const vdo = profile.querySelector('.profile-video');
// vdo.muted=false; // to unmute

// profile.addEventListener('mouseenter', () => {vdo.play();});
// profile.addEventListener('mouseleave', () => {vdo.pause(); vdo.currentTime=0;});