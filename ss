const envelope = document.getElementById("envelope");
const content = document.getElementById("content");
const message = document.getElementById("message");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const text = `ถึงคุณเคลียร์ 💌

เรามีอะไรจะถามคุณ

พร้อมยัง
ลุ้นก่อนดิค่อยอ่าน

พร้อมอ่านยังคุน
พร้อมยัง ลุ้นอะดิ
พร้อมแล้วก็อ่าน

วันนี้เราเลยอยากถามคุณตรง ๆ

คุณพร้อมจะเป็นแฟนเราหรือยัง 🫩`;

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
    คุณตอบตกลงแล้ว 🥰
    </h2>

    <p>
    ขอบคุณที่ตอบตกลงนะ ❤️
    </p>

    <p>
    เราดีใจมากเลยที่คุณให้โอกาสเรา ✨
    </p>

    <p>
    อย่ามั่วแต่ยิ้มคนเดียวนะคุน 💕
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