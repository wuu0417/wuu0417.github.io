(() => {

  const universe = document.querySelector(".universe");
  const line = document.querySelector(".red-line");

  let timer;


  /*
   * 鼠标移动时产生非常轻微的空间变化。
   */
  const pulse = () => {

    // 如果用户关闭了系统动画，则不执行动画
    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    universe.classList.add("is-moving");

    clearTimeout(timer);

    timer = setTimeout(() => {

      universe.classList.remove("is-moving");

    }, 180);

  };


  /*
   * 监听鼠标移动
   */
  window.addEventListener(
    "pointermove",
    pulse,
    {
      passive: true
    }
  );


  /*
   * 页面第一次打开时，
   * 红线从中心向两边展开。
   */
  window.addEventListener("load", () => {

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    line.animate(

      [
        {
          transform: "scaleX(0)",
          opacity: 0
        },

        {
          transform: "scaleX(1)",
          opacity: 0.96
        }
      ],

      {
        duration: 1400,

        easing:
          "cubic-bezier(.16, 1, .3, 1)",

        fill: "forwards"
      }

    );

  });

})();
