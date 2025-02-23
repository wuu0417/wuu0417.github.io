// hitokoto.js
(function hitokoto() {
    var hitokotoArray = [
        "一个健康的人由两部分组成，即自己负责的能力与关心别人的能力。",
        "Keep learning and be kind to everything.",
        "人文主义是奠定现代社会的基础。",
        "自由的另一面是自己负责的能力。",
        "言论自由就是勇于捍卫意见相左之人说话的权利。",
        "言论自由与政治正确是天然的反义词。",
        "民主的合法性来自民意，因此选举只需考虑一个问题：结果是否真正代表了民意。",
        "人民是国家的主人，政府是人民和企业的公仆。",
        "自由的边界就是他人的自由。"
    ];

    var hitokoto = hitokotoArray[Math.floor(Math.random() * hitokotoArray.length)];

    var dom = document.querySelector('#hitokoto');

    if (Array.isArray(dom)) {
        dom[0].innerText = hitokoto;
    } else {
        dom.innerText = hitokoto;
    }
})();
