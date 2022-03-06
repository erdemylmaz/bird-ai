let lastY = 0;

onScroll = (e) => {
  let currentY = window.pageYOffset;

  if (currentY >= lastY + 50) {
    setTimeout(() => {
      window.scrollTo({
        top: 1000,
      });

      setTimeout(() => {
        lastY = currentY;
      }, 2000);
    }, 1000);
  }

  if (currentY <= lastY - 50) {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });

      setTimeout(() => {
        lastY = currentY;
      }, 2000);
    }, 1000);
  }
};

window.addEventListener("scroll", onScroll);
