// hitokoto.js
//这个文件里的句子因为要循环播放，必须精挑细选，都快把我整成强迫症了，所以不要随随便更新
(function hitokoto() {
    var hitokotoArray = [
        "一个健康的人由两部分组成，即自我与爱。",
        "保持学习，并善待一切。",
        "真正的平等，不是让弱者变得跟强者一样强，而是让弱者能够以弱者的姿态受到尊重。——上野千鹤子",
        "人文主义是现代社会的基础。",
        "自由意志的前提是自己负责的能力。",
        "那些渴望用自由换取保障的，最终既得不到自由，也得不到保障。——哈耶克",
        "言论自由不是说话的自由，而是闭嘴的自由。",
        "你所看到的世界，其实是你自己的样子。",
//        "我此生的全部理想，不过是生在一个自由的环境里，让我不用在意他人的脸色，能够靠着自己的劳动，过好一生。",
        "“美利坚没有国王”的意思是“美利坚自己负责。”",
        "这个时代，是商人的天下。",
        "当你计算你从付出中得到了什么时，你应该知道，有些东西是你看不见的，还有些东西反应得比较慢，正在到来的路上。",
    ];

    var hitokoto = hitokotoArray[Math.floor(Math.random() * hitokotoArray.length)];

    var dom = document.querySelector('#hitokoto');

    if (Array.isArray(dom)) {
        dom[0].innerText = hitokoto;
    } else {
        dom.innerText = hitokoto;
    }
})();
