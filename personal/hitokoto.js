// hitokoto.js
// 标题：一点道理-关于自由
(function hitokoto() {
    var hitokotoArray = [
        "自由意志的前提是自己负责的能力。",
        "那些渴望用自由换取保障的，最终既得不到自由，也得不到保障。——哈耶克",
        "言论自由不是说话的自由，而是闭嘴的自由。",
        "“美利坚没有国王”的意思是“美利坚自己负责。”",
    ];

    var hitokoto = hitokotoArray[Math.floor(Math.random() * hitokotoArray.length)];

    var dom = document.querySelector('#hitokoto');

    if (Array.isArray(dom)) {
        dom[0].innerText = hitokoto;
    } else {
        dom.innerText = hitokoto;
    }
})();
