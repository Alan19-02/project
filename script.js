document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = ["💖", "❤️", "💘", "💕"][Math.floor(Math.random() * 3)]; // ← REQUIRED for visibility
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    heart.style.fontSize = `${16 + Math.random() * 24}px`;
    document.body.appendChild(heart);
  }
});
