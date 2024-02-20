let videos = document.querySelectorAll(".gallery video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video
      .play()
      // .then(() => {})
      .catch((err) => {
        alert(
          "Due to the autoplay policy of browser you need to click anywhere on the webpage first"
        );
      });
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});
