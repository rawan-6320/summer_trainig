//  const deadline = new Date(2025, 9, 31, 6, 9, 22);

// let x = setInterval(function () {
//     let now = new Date().getTime();
//     let distance = deadline - now;
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     document.getElementById("countdown").innerHTML = days + hours  + minutes  ;
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdown").innerHTML = "EXPIRED";
//     }
// }, 1000);

const deadline = new Date(2025, 8, 1, 6, 9, 22); // 31 Oct 2025, 06:09:22 

const dd = document.getElementById('dd');
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

function updateCountdown() {
    const now = new Date();
    let distance = deadline - now;

    if (distance <= 0) {
        dd.textContent = '0';
        hh.textContent = '00';
        mm.textContent = '00';
        ss.textContent = '00';
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    dd.textContent = days;
    hh.textContent = String(hours).padStart(2, '0');
    mm.textContent = String(minutes).padStart(2, '0');
    // ss.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000); 