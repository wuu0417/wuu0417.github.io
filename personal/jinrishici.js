// jinrishici.js
// // 标题：一点道理-关于平等
(function hitokoto() {
    var hitokotoArray = [
        "一个健康的人由两部分组成，即自我与爱。",
        "真正的平等，不是让弱者变得跟强者一样强，而是让弱者能够以弱者的姿态受到尊重。——上野千鹤子",
    ];

    var hitokoto = hitokotoArray[Math.floor(Math.random() * hitokotoArray.length)];

    var dom = document.querySelector('#hitokoto');

    if (Array.isArray(dom)) {
        dom[0].innerText = hitokoto;
    } else {
        dom.innerText = hitokoto;
    }
})();
