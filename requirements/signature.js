// 单独展示签名的JS文件

document.getElementById("signature").innerText =
  "所谓的好人，不过是承认自己是坏人，又忍不住去做点举手之劳的好事的普通人。";

/**

document.getElementById("signature").innerText =
  "我给自己三句话：\n" +
  "1.你是自由人，自由意味着自己负责，没有自己负责的能力就没有自由；\n" +
  "2.与他人相处，要本着只负责自己事务、不插手他人事务的原则；如果有矛盾，优先交流协商，听他人意见，看有无误会，别急着撕破脸；如果要从他人那儿获得更多，就要为他人付出更多来换取回报，这就是交知心朋友，以及做生意；\n" +
  "3.只记住这两句话就够了，不用多想其它方面的事情。" ;

**/

/**

const texts = [
  "这里是优酱的主页୧( ⁼̴̶̤̀ω⁼̴̶̤ )૭",
  "一直在等着你发现୧꒰•̀ᴗ•́꒱୨",
  "来都来了不妨多看看吧ദ്ദി˶ｰ̀֊ｰ́ )✧"
];

let currentIndex = 0;
const displayElement = document.getElementById("signature"); // 修改了这里的 ID
const interval = 5000; // 5秒

function cycleText() {
  displayElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

// 初始显示一次
cycleText();
// 每隔 interval 毫秒循环一次
setInterval(cycleText, interval);

**/
