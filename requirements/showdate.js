// 修改时间 2025/4/16T23:50:00

function updateTimeAndDifference() {
    const now = new Date();
    const birthDate = new Date('2003-04-17T00:00:00');

    // 当前时间字符串
    document.getElementById("current-time").textContent = now.toLocaleString();

    // 计算差值
    let diffMilliseconds = now - birthDate;
    let totalSeconds = Math.floor(diffMilliseconds / 1000);

    // 创建一个“差距时间”的日期对象
    let tempDate = new Date(diffMilliseconds);

    // 用“出生年月日”+ 当前年月日方式计算 年/月/日差
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // 小时、分钟、秒
    const hours = now.getHours() - birthDate.getHours();
    const minutes = now.getMinutes() - birthDate.getMinutes();
    const seconds = now.getSeconds() - birthDate.getSeconds();

    document.getElementById("difference-time").textContent =
        `\n${years}年 ${months}月 ${days}天 ${Math.abs(hours)}小时 ${Math.abs(minutes)}分钟 ${Math.abs(seconds)}秒`;
}

setInterval(updateTimeAndDifference, 1000);
window.onload = updateTimeAndDifference;
