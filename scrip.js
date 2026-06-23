const envelope = document.getElementById("envelope");
const content = document.getElementById("content");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const text = `ถึงคุณเคลียร์ 💌

เรามีอะไรจะถามคุณ

ตลอดเวลาที่ได้คุยกัน
คุณทำให้เรามีความสุขมากเลยนะ 😊

ทุกครั้งที่ได้คุย ได้เจอ
หรือแม้แต่เห็นข้อความของคุณ
มันทำให้วันธรรมดา ๆ ของเราพิเศษขึ้น

วันนี้เราเลยอยากถามคุณตรง ๆ

คุณพร้อมจะเป็นแฟนเราหรือยัง ❤️🥺`;

let i = 0;

envelope.addEventListener("click", function(){

    envelope.style.display = "none";
    content.classList.remove("hidden");

    typeWriter();
});

function typeWriter(){

    if(i < text.length){

        message.textContent += text.charAt(i);
        i++;

        setTimeout(typeWriter, 60);

    }else{

        buttons.classList.remove("hidden");

    }
}

yesBtn.addEventListener("click", function(){

    content.innerHTML = `
    <h1 style="color:#ff4f9a;">เย้~ 💖</h1>

    <h2 style="color:#ff4f9a;">
    คุณเคลียร์ตอบตกลงแล้ว 🥰
    </h2>

    <p>
    ขอบคุณที่ตอบตกลงนะ ❤️
    </p>

    <p>
    เราดีใจมากเลยที่คุณให้โอกาสเรา ✨
    </p>

    <p>
    ขอบคุณที่เข้ามาเป็นรอยยิ้มดี ๆ ในชีวิตของเรานะ 💕
    </p>
    `;

    setInterval(createHeart,200);
});

noBtn.addEventListener("mouseover", function(){

    noBtn.style.position = "absolute";

    noBtn.style.left =
    Math.random() * (window.innerWidth - 120) + "px";

    noBtn.style.top =
    Math.random() * (window.innerHeight - 60) + "px";
});

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left =
    Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },4000);
}