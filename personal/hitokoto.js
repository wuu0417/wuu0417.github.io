// hitokoto.js
(function hitokoto() {
    var hitokotoArray = [
        "一个健康的人由两部分组成，即自我与爱。",
        "保持学习，保持谦虚。",
        "人文主义是现代社会的基础。",
        "自由意志的前提是能够自己负责。",
        "那些渴望用自由换取保障的，最终既得不到自由，也得不到保障。",
        "言论自由不是说话的自由，而是闭嘴的自由。",
        "你所看到的世界，其实是你自己的样子。",
        "我此生的全部理想，不过是生在一个尊重个体的环境，让我不用看他人的脸色，依靠自己勤劳的劳动，便可以换来丰富的生活。",
        "个人自由是人身依附的反义词。",
    ];

    var hitokoto = hitokotoArray[Math.floor(Math.random() * hitokotoArray.length)];

    var dom = document.querySelector('#hitokoto');

    if (Array.isArray(dom)) {
        dom[0].innerText = hitokoto;
    } else {
        dom.innerText = hitokoto;
    }
})();
