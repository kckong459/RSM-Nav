(() => {
  const videos = Array.from(document.querySelectorAll('video'));
  videos.forEach(video => {
    video.addEventListener('play', () => {
      videos.forEach(other => { if (other !== video) other.pause(); });
    });
    video.addEventListener('error', () => {
      video.closest('.video-card').querySelector('.video-error').hidden = false;
    });
    video.addEventListener('loadedmetadata', () => {
      if (video.currentTime === 0 && Number.isFinite(video.duration) && video.duration > .1) {
        video.currentTime = .1;
      }
    }, {once: true});
  });
})();
