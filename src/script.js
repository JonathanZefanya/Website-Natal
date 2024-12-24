// Set target date for Christmas 2024 (local time)
var countDownDate = new Date(2024, 11, 25, 0, 0, 0).getTime(); // Ubah bulan ke 11 untuk Desember

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000)) / 1000);

    if (distance >= 0) {
        document.getElementById("counter").innerHTML =
            days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds ";
    } else {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "🎉 Merry Christmas 2024, Suzan! 🎄";
        document.getElementById("nextButtonContainer").style.display = 'block';
    }
}, 1000);

// Audio logic
const audio = document.getElementById('merryAudio');

// Function to toggle music
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        localStorage.setItem('musicPlaying', 'true');
    } else {
        audio.pause();
        localStorage.setItem('musicPlaying', 'false');
    }
}

// Check the music status from localStorage on load
if (localStorage.getItem('musicPlaying') === 'true') {
    audio.play();
} else {
    audio.pause();
}

// Event listener for changing background and starting music
document.getElementById('loveButton').addEventListener('click', function () {
    document.getElementById('loveButton').style.display = 'none';
    document.body.style.backgroundImage = "url('assets/bg.jpg')";
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('name').style.display = 'block';
    document.getElementById('clickButton').style.display = 'block';

    // Start music when button is clicked
    toggleMusic();
});
