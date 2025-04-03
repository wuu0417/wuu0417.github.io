function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            document.getElementById("time").textContent = timeString;
        }
        
        setInterval(updateTime, 1000); // 获取当前时间，每秒更新一次
        window.onload = updateTime; // 页面加载时立即更新一次
