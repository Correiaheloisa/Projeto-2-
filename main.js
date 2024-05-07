function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  function copyPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    document.getElementById("copy-text").innerText = "Senha Copiada!";
    setTimeout(() => {
      document.getElementById("copy-text").innerText = "Copiar Senha";
    }, 2000);
  }
  
  document.getElementById("generate-btn").addEventListener("click", () => {
    const password = generatePassword();
    document.getElementById("password").value = password;
  });
  
  let isPlaying = false;
  const audio = document.getElementById("audio");
  const musicGif = document.getElementById("music-gif");
  
  function toggleMusic() {
    if (isPlaying) {
      audio.pause();
      musicGif.style.display = "none";
    } else {
      audio.play();
      musicGif.style.display = "block";
    }
    isPlaying = !isPlaying;
  }