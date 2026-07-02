const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ring = document.getElementById("ring");
const textEl = document.getElementById("text");
const music = document.getElementById("music");

/* 💌 OPEN ENVELOPE */
function openEnvelope() {
  
  envelope.classList.add("open");
  
  setTimeout(() => {
    letter.classList.add("show");
    typeLetter();
  }, 800);
  
}

/* 📜 TYPE LETTER */
const message = `
Hello ALEKSEY !💐


Umm... idk why, pero since 2024, parang in love na yata talaga ako sa'yo. 😭 HAHAHAHA.

Hindi ko rin ma-explain kung bakit. Parang anghel ka na biglang nahulog sa lupa, tapos ako pa talaga yung nakakita. 😭

Sobrang ina-admire kita noon., iniisip ko pa rin kung ano ba talaga yung nakita ko sa'yo para ma-fall nang ganito. Pero one thing's for sure—ang ganda mo, soft-spoken ka, at ewan... iba talaga yung spark mo.

Noon, isang chat mo lang, tapos biglang naging  flash grabe yung bukas sa cp ko para mabasa ko chat mo teh😭😂

Pero don't worry, harmless admiration lang naman 'to HAHAHA. Gusto ko lang sabihin kasi ang random talaga kung paano mo ako napa-fall nang hindi mo man lang siguro namamalayan.

Twinn

`;

let i = 0;

function typeLetter() {
  let t = setInterval(() => {
    textEl.innerHTML += message[i];
    i++;
    
    if (i >= message.length) {
      clearInterval(t);
      setTimeout(showProposal, 800);
    }
  }, 40);
}

/* 💍 SHOW PROPOSAL */
function showProposal() {
  letter.classList.remove("show");
  proposal.classList.add("show");
  
  music.play();
  
  /* ring animation */
  setTimeout(() => {
    ring.classList.add("show");
  }, 600);
}

/* 💍 TAKE RING */
function takeRing() {
  
  ring.style.transform = "scale(1.3)";
  ring.style.filter = "drop-shadow(0 0 40px gold)";
  
  setTimeout(() => {
    alert("Forever twin na tayo teh bleee. djwk coding porposes hehe😭✌🏻");
  }, 1000);
  
}