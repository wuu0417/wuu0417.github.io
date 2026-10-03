(() => {

  const universe =
    document.querySelector(".universe");


  const title =
    document.querySelector(".title");


  const line =
    document.querySelector(".red-line");


  /*
   * 鼠标移动产生非常轻微的视差。
   *
   * 不改变页面结构，
   * 只是让银河背景和标题产生一点空间感。
   */

  let mouseX = 0;
  let mouseY = 0;

  let currentX = 0;
  let currentY = 0;


  window.addEventListener(
    "pointermove",
    (event) => {

      mouseX =
        (event.clientX / window.innerWidth - 0.5);

      mouseY =
        (event.clientY / window.innerHeight - 0.5);

    },
    {
      passive: true
    }
  );


  /*
   * 平滑动画
   */

  function animate() {

    currentX +=
      (mouseX - currentX) * 0.035;

    currentY +=
      (mouseY - currentY) * 0.035;


    /*
     * 银河背景轻微移动
     */

    const galaxy =
      document.querySelector(".galaxy");

    if (galaxy) {

      galaxy.style.transform =
        `scale(1.03)
         translate(
           ${currentX * -8}px,
           ${currentY * -8}px
         )`;

    }


    /*
     * 标题几乎感觉不到的移动
     */

    if (title) {

      title.style.transform =
        `translate(
          ${currentX * 2}px,
          ${currentY * 2}px
        )`;

    }


    /*
     * 红线轻微移动
     */

    if (line) {

      line.style.transform =
        `scaleX(1)
         translateX(${currentX * 5}px)`;

    }


    requestAnimationFrame(
      animate
    );

  }


  /*
   * 如果用户关闭系统动画，
   * 不执行视差。
   */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );


  if (!reducedMotion.matches) {

    animate();

  }


})();
