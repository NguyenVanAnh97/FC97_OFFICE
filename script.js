const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// Đặt ngày sinh nhật của bạn ở đây (năm, tháng, ngày)
const birthday = new Date('2023-10-02');
        
function updateCountdown() {
    const now = new Date();
    const timeLeft = birthday - now;

    if (timeLeft <= 0) {
        document.getElementById('countdown').innerHTML = 'Chúc mừng sinh nhật!';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `(${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây)`;
    }
}

function updateBirthday() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
}

// Cập nhật thời gian đếm ngược và ngày sinh nhật ban đầu
updateCountdown();
updateBirthday();

// Cập nhật thời gian đếm ngược mỗi giây
setInterval(updateCountdown, 1000);
