function revealMessage(msgId) {
    // Reproduzir o som
    const audio = document.getElementById("audio");
    audio.play();
    
    // Exibir a mensagem
    const message = document.getElementById(msgId);
    message.classList.remove('hidden');
    message.classList.add('revealed');
}

function checkAnswers() {
    const correctAnswers = {
        q1: "barra do pirai", // Exemplo de resposta correta
        q2: "como treinar seu dragão",
        q3: "açai",
        q4: "praia" // Exemplo de resposta correta para a 4ª pergunta
    };

    let score = 0;

    const formElements = document.forms['quiz-form'].elements;
    for (const key in correctAnswers) {
        const userAnswer = formElements[key].value.trim(); // Remove espaços extras
        if (userAnswer.toLowerCase() === correctAnswers[key].toLowerCase()) {
            score++;
        }
    }

    let resultText = `Você acertou ${score} de 4 perguntas!`;
    if (score === 4) {
        resultText += " Parabéns! Você é um expert no nosso relacionamento!";
    } else {
        resultText += " Vamos tentar de novo?";
    }

    document.getElementById('result').innerText = resultText;
}

function playMusic() {
    const music = document.getElementById('background-music');
    music.muted = false; // Desativa o mudo
    music.play(); // Toca a música
}

// Função para ajustar o volume
function adjustVolume(action) {
    const music = document.getElementById('background-music');
    let currentVolume = music.volume; // Pega o volume atual

    if (action === 'increase' && currentVolume < 1) {
        music.volume += 0.1; // Aumenta o volume (até o máximo de 1)
    } else if (action === 'decrease' && currentVolume > 0) {
        music.volume -= 0.1; // Diminui o volume (até o mínimo de 0)
    }
}
function mostrarAlerta() {
    alert('Você é a melhor! 💖');
}
