function updateTimeAndDifference() {
            const now = new Date();
            const fixedTime = new Date('2003-04-17T00:00:00');
            const diffMilliseconds = now - fixedTime;

            const seconds = Math.floor(diffMilliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const years = Math.floor(days / 365.25);

            document.getElementById("current-time").textContent = now.toLocaleString();
            document.getElementById("difference-time").textContent = `我已经诞生了：\n${years}年 ${days % 365}天 ${(hours % 24)}小时 ${(minutes % 60)}分钟 ${(seconds % 60)}秒`;
        }

        setInterval(updateTimeAndDifference, 1000);
        window.onload = updateTimeAndDifference;
