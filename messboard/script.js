const API_USERS_URL = "https://message-board-blond-xi.vercel.app/api/users";
const API_MESSAGES_URL = "https://message-board-blond-xi.vercel.app/api/messages";

const authForms = document.getElementById("authForms");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const messageBoard = document.getElementById("messageBoard");
const messageForm = document.getElementById("messageForm");
const messagesList = document.getElementById("messages");

let username = "";
let nickname = "";

// 切换界面
document.getElementById("switchToLogin").onclick = () => {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
};
document.getElementById("switchToRegister").onclick = () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
};

// 注册
registerForm.onsubmit = async (e) => {
  e.preventDefault();
  const nicknameInput = document.getElementById("registerNickname").value.trim();
  const usernameInput = document.getElementById("registerUsername").value.trim();

  const res = await fetch(API_USERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nickname: nicknameInput, username: usernameInput, type: "register" }),
  });

  const data = await res.json();
  if (data.success) {
    alert("注册成功！");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    alert(data.error);
  }
};

// 登录
loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("loginUsername").value.trim();

  const res = await fetch(API_USERS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: usernameInput, type: "login" }),
  });

  const data = await res.json();
  if (data.success) {
    username = usernameInput;
    nickname = data.nickname;
    alert("登录成功！");
    authForms.style.display = "none";
    messageBoard.style.display = "block";
    loadMessages();
  } else {
    alert(data.error);
  }
};

// 加载留言
async function loadMessages() {
  const res = await fetch(API_MESSAGES_URL);
  const messages = await res.json();

  messagesList.innerHTML = messages
    .map(
      (msg) =>
        `<li>${msg.username}：${msg.content} ${
          msg.username === username
            ? `<span class="delete" onclick="deleteMessage(${msg.id})">删除</span>`
            : ""
        }</li>`
    )
    .join("");
}

// 提交留言
messageForm.onsubmit = async (e) => {
  e.preventDefault();
  const content = document.getElementById("messageContent").value.trim();

  const res = await fetch(API_MESSAGES_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, content }),
  });

  const data = await res.json();
  if (res.ok) {
    document.getElementById("messageContent").value = "";
    loadMessages();
  } else {
    alert(data.error);
  }
};

// 删除留言
async function deleteMessage(id) {
  const res = await fetch(API_MESSAGES_URL, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, username }),
  });

  if (res.ok) {
    loadMessages();
  } else {
    alert("删除失败");
  }
}
