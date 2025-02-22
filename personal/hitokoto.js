// hitokoto.js
(function hitokoto() {
    var hitokotoArray = [
        "一个健康的人由两部分组成，即自我与爱。",
        "Keep learning and be kind to everything.",
        "人文主义是奠定现代社会的基础。",
        "小河未满大河干。",
        "言论自由就是勇于捍卫意见相左之人说话的权利。",
        "自由社会与政治正确是天然的反义词。",
        "民主的合法性来自民意，因此选举只需考虑一个问题：结果是否真正代表了民意。",
        "人民是国家的主人，政府不创造财富，政府是人民和企业的公仆。",
        "给你所爱的人以自由，也给你所不爱的人以自由。"
    ];

    var hitokoto = hitokotoArray[Math.floor(Math.random() * hitokotoArray.length)];

    var dom = document.querySelector('#hitokoto');

    if (Array.isArray(dom)) {
        dom[0].innerText = hitokoto;
    } else {
        dom.innerText = hitokoto;
    }
})();
