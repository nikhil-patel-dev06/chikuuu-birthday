/* =====================================================
   CHIKUUU 💫 BIRTHDAY EXPERIENCE
===================================================== */

const app = document.getElementById("app");
const effects = document.getElementById("effects");


/* =====================================================
   PHOTOS
===================================================== */

const photos = [
    "images/chikuu1.jpg",
    "images/chikuu2.jpg",
    "images/chikuu3.jpg",
    "images/chikuu4.jpg",
    "images/chikuu5.jpg",
    "images/chikuu6.jpg",
    "images/chikuu7.jpg"
];


/* =====================================================
   LUCKY DRAW VIDEOS
===================================================== */

const luckyVideos = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4"
];

let watchedVideos = new Set();


/* =====================================================
   PAGE CHANGE
===================================================== */

function changeContent(html) {

    app.style.animation = "none";

    void app.offsetWidth;

    app.style.animation =
        "cardEnter .8s cubic-bezier(.2,.8,.2,1)";

    app.innerHTML = html;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   OPENING
===================================================== */

function showOpening() {

    changeContent(`

        <section class="opening">

            <div class="opening-ribbon">
                🎀
            </div>

            <p class="eyebrow">
                A LITTLE SURPRISE
            </p>

            <h1 style="margin-top:9px;">
                Hey Chikuuu 💫
            </h1>

            <p class="subtitle">
                I made something small for you...
                <br>
                okay maybe not that small. 😼
            </p>

            <button id="openBtn">
                Open Your Surprise ✨
            </button>

        </section>

    `);

    document
        .getElementById("openBtn")
        .addEventListener("click", showDuck);
}


/* =====================================================
   DUCK
===================================================== */

function showDuck() {

    changeContent(`

        <section class="duck-section">

            <div class="sparkles">

                <span class="sparkle sparkle-left">
                    ✦
                </span>

                <span class="sparkle sparkle-right">
                    ✧
                </span>

            </div>

            <p class="eyebrow">
                FIRST SURPRISE
            </p>

            <h2 style="margin-top:7px;">
                Something is hiding... 👀
            </h2>

            <p class="subtitle">
                Don't judge the cover. 😭
            </p>

            <div
                id="duckMystery"
                class="mystery-card"
                style="
                    margin-top:25px;
                    min-height:315px;
                "
            >

                <div class="duck-icon">
                    🦆
                </div>

                <div style="
                    position:relative;
                    z-index:2;
                    margin-top:8px;
                    font-family:'Playfair Display',serif;
                    font-size:1.35rem;
                ">
                    Quack Quack? 👀
                </div>

                <div style="
                    position:relative;
                    z-index:2;
                    margin-top:7px;
                    font-size:.8rem;
                    color:#806e7d;
                ">
                    Tap the duck to reveal
                </div>

            </div>

            <div id="duckVideoArea"></div>

        </section>

    `);

    document
        .getElementById("duckMystery")
        .addEventListener("click", revealDuck);
}


/* =====================================================
   DUCK REVEAL
===================================================== */

function revealDuck() {

    const mystery =
        document.getElementById("duckMystery");

    const area =
        document.getElementById("duckVideoArea");

    mystery.style.transition =
        "transform .35s ease, opacity .35s ease";

    mystery.style.transform =
        "scale(1.15) rotate(2deg)";

    mystery.style.opacity = "0";

    setTimeout(() => {

        mystery.style.display = "none";

        area.innerHTML = `

            <div class="video-card duck-video">

                <video
                    id="duckVideo"
                    controls
                    playsinline
                    preload="metadata"
                >

                    <source
                        src="videos/duck.mp4"
                        type="video/mp4"
                    >

                </video>

            </div>

            <p class="subtitle">
                Okay... that was unexpected. 😭🦆
            </p>

            <button id="duckNext">
                Next Memory →
            </button>

        `;

        const video =
            document.getElementById("duckVideo");

        video.play().catch(() => {});

        document
            .getElementById("duckNext")
            .addEventListener("click", () => {

                video.pause();

                showPhoto(0);

            });

    }, 350);
}


/* =====================================================
   MEMORIES
===================================================== */

function showPhoto(index) {

    if (index >= photos.length) {

        showMessage();

        return;
    }

    changeContent(`

        <section class="memory-section">

            <p class="eyebrow memory-counter">
                MEMORY ${index + 1} / ${photos.length}
            </p>

            <h2 class="memory-title">
                ${getMemoryTitle(index)}
            </h2>

            <img
                src="${photos[index]}"
                class="memory-photo"
                alt="Memory ${index + 1}"
            >

            <p class="subtitle memory-caption">
                ${getMemoryCaption(index)}
            </p>

            <button
                id="nextMemory"
                class="memory-button"
            >
                ${
                    index === photos.length - 1
                    ? "Continue →"
                    : "Next Memory →"
                }
            </button>

        </section>

    `);

    document
        .getElementById("nextMemory")
        .addEventListener("click", () => {

            showPhoto(index + 1);

        });
}


/* =====================================================
   MEMORY TEXT
===================================================== */

function getMemoryTitle(index) {

    const titles = [

        "Pocket Size Energy 😼",

        "That Smile ✨",

        "Dora the Explorer 👀",

        "Half Plate 😂",

        "Chhota Don 😎",

        "Passport Size 💫",

        "And then... this one."

    ];

    return titles[index];
}


function getMemoryCaption(index) {

    const captions = [

        "Small in size, absolutely not in attitude.",

        "Some pictures just need no explanation.",

        "Always ready for the next adventure.",

        "Because apparently half a plate is enough. 😭",

        "The attitude arrives before she does.",

        "Tiny passport, unlimited stories.",

        "Okay... this one is staying in the memories."

    ];

    return captions[index];
}


/* =====================================================
   PERSONAL MESSAGE
===================================================== */

function showMessage() {

    changeContent(`

        <section class="personal-message">

            <div class="letter">

                <div class="message-heart">
                    💗
                </div>

                <p class="eyebrow" style="margin-top:8px;">
                    SOMETHING I REALLY MEAN
                </p>

                <h2 style="margin-top:8px;">
                    You Matter.
                </h2>

                <p style="margin-top:20px;">
                    I don't think every important person in
                    our life needs a name or a definition.
                </p>

                <p style="margin-top:15px;">
                    Some people just become a part of your
                    everyday life so naturally...
                </p>

                <p style="margin-top:15px;">
                    and somehow,
                    <strong>
                        you're one of those people for me.
                    </strong>
                </p>

                <p style="margin-top:15px;">
                    I may not always say it,
                    but I'm genuinely glad you exist.
                </p>

                <p style="margin-top:15px;">
                    And I'm really glad our paths crossed.
                </p>

                <p style="
                    margin-top:22px;
                    font-weight:600;
                    color:#e76f99;
                ">
                    Happy Birthday, Chikuuu! 🎂💫
                </p>

                <p style="
                    margin-top:12px;
                    font-size:.9rem;
                ">
                    Keep that crazy little smile.
                    <br>
                    Keep being you. ✨
                </p>

            </div>

            <button id="luckyButton">
                One Last Thing → 🎁
            </button>

        </section>

    `);

    document
        .getElementById("luckyButton")
        .addEventListener("click", showLuckyDraw);
}


/* =====================================================
   LUCKY DRAW
===================================================== */

function showLuckyDraw() {

    changeContent(`

        <section class="lucky-section">

            <div class="lucky-icon">
                🎁
            </div>

            <p class="eyebrow">
                YOUR LITTLE LUCKY DRAW
            </p>

            <h2 style="margin-top:8px;">
                Pick a Surprise
            </h2>

            <p class="subtitle">
                Choose whichever one you feel like watching.
                <br>
                No pressure. 😼
            </p>

            <div
                id="luckyGrid"
                style="
                    display:grid;
                    grid-template-columns:
                    repeat(2,1fr);
                    gap:12px;
                    margin-top:25px;
                "
            ></div>

            <button
                id="finishButton"
                class="secondary-button"
            >
                One Last Thing → 💫
            </button>

        </section>

    `);

    createLuckyCards();

    document
        .getElementById("finishButton")
        .addEventListener("click", showFinal);
}


/* =====================================================
   LUCKY CARDS
===================================================== */

function createLuckyCards() {

    const grid =
        document.getElementById("luckyGrid");

    luckyVideos.forEach((videoPath, index) => {

        const card =
            document.createElement("div");

        card.className = "mystery-card";

        card.style.minHeight = "145px";

        if (watchedVideos.has(index)) {

            card.classList.add("watched-card");

            card.innerHTML = `

                <div style="
                    position:relative;
                    z-index:2;
                    font-size:2.3rem;
                ">
                    ✓
                </div>

                <strong>
                    Watched
                </strong>

            `;

            return;
        }

        card.innerHTML = `

            <div class="lucky-card-number">
                🎁
            </div>

            <strong style="
                position:relative;
                z-index:2;
            ">
                Surprise ${index + 1}
            </strong>

            <span style="
                position:relative;
                z-index:2;
                font-size:.72rem;
                margin-top:5px;
                color:#806e7d;
            ">
                Tap to reveal
            </span>

        `;

        card.addEventListener("click", () => {

            showLuckyVideo(
                index,
                videoPath
            );

        });

        grid.appendChild(card);
    });
}


/* =====================================================
   SELECTED LUCKY VIDEO
===================================================== */

function showLuckyVideo(index, videoPath) {

    watchedVideos.add(index);

    changeContent(`

        <section class="lucky-section">

            <p class="eyebrow">
                SURPRISE ${index + 1}
            </p>

            <h2 style="margin-top:8px;">
                Okay... let's see 👀
            </h2>

            <div class="video-card">

                <video
                    id="luckyVideo"
                    controls
                    playsinline
                    preload="metadata"
                >

                    <source
                        src="${videoPath}"
                        type="video/mp4"
                    >

                </video>

            </div>

            <p class="subtitle">
                Hope this one made you smile. 🤍
            </p>

            <button id="backToLucky">
                Choose Another 🎁
            </button>

            <button
                id="finalFromLucky"
                class="secondary-button"
                style="margin-top:10px;"
            >
                One Last Thing →
            </button>

        </section>

    `);

    const video =
        document.getElementById("luckyVideo");

    video.play().catch(() => {});

    document
        .getElementById("backToLucky")
        .addEventListener("click", () => {

            video.pause();

            showLuckyDraw();

        });

    document
        .getElementById("finalFromLucky")
        .addEventListener("click", () => {

            video.pause();

            showFinal();

        });
}


/* =====================================================
   FINAL
===================================================== */

function showFinal() {

    changeContent(`

        <section class="final-message">

            <div class="final-heart">
                💗
            </div>

            <p class="eyebrow">
                THIS IS THE PART I REALLY MEAN...
            </p>

            <h1 class="final-title">
                You Matter.
            </h1>

            <p class="final-text">
                No big explanation.
                <br>
                No particular label.
                <br><br>
                Just know that having you in my life
                is something I'll always be grateful for.
            </p>

            <p class="final-highlight">
                Happy Birthday, Chikuuu 💫😼
            </p>

            <p style="
                margin-top:12px;
                font-size:.9rem;
            ">
                Keep smiling.
                <br>
                Keep being you. ✨
            </p>

            <button id="restartButton">
                Start Again ↻
            </button>

        </section>

    `);

    createConfetti();
    createBalloons();

    document
        .getElementById("restartButton")
        .addEventListener("click", () => {

            watchedVideos.clear();

            clearEffects();

            showOpening();

        });
}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    clearEffects();

    const shapes = [
        "◆",
        "■",
        "●",
        "✦",
        "✧"
    ];

    for (let i = 0; i < 65; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.innerText =
            shapes[
                Math.floor(
                    Math.random() *
                    shapes.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.fontSize =
            (Math.random() * 8 + 7) + "px";

        piece.style.animationDelay =
            Math.random() * 1.7 + "s";

        effects.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 6000);
    }
}


/* =====================================================
   BALLOONS
===================================================== */

function createBalloons() {

    const colors = [

        "#ff8fab",
        "#c9b6ff",
        "#ffd6a5",
        "#a8dadc",
        "#ffc8dd"

    ];

    for (let i = 0; i < 10; i++) {

        const balloon =
            document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left =
            Math.random() * 95 + "vw";

        balloon.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        balloon.style.animationDelay =
            Math.random() * 1.8 + "s";

        effects.appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        }, 7500);
    }
}


/* =====================================================
   CLEAR EFFECTS
===================================================== */

function clearEffects() {

    effects.innerHTML = "";
}


/* =====================================================
   START
===================================================== */

showOpening();