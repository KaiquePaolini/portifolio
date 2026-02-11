document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MENSAGEM 
    console.log("%c SYSTEM ONLINE // WELCOME USER 🫣 ", "background: #00ff66; color: #000; font-size: 20px; font-weight: bold; padding: 5px;");
    console.log("Optimization loaded... 100%");

    // 2. EFEITO DE DIGITAÇÃO NO TERMINAL
    // Pega todas as linhas de texto do terminal
    const terminalLines = document.querySelectorAll('.terminal-window .console-text');
    
    // Esconde todas as linhas no começo (pra gente revelar aos poucos)
    terminalLines.forEach(line => line.style.display = 'none');

    let delay = 0;

    // Função para mostrar uma linha por vez
    terminalLines.forEach((line, index) => {
        
        // O cursor (aquele quadradinho piscando) sempre fica por último
        if (index === terminalLines.length - 1) {
            setTimeout(() => {
                line.style.display = 'block';
            }, delay);
        } else {
            // As linhas de texto aparecem com um intervalo
            setTimeout(() => {
                line.style.display = 'block';
                
                // Efeito sonoro fake (opcional)
                // playKeystrokeSound(); 
            }, delay);
        }

        // Aumenta o tempo para a próxima linha (velocidade da digitação)
        delay += 450; // 150 milisegundos entre cada linha
    });

    // 3. EFEITO GLITCH NO NOME (AO PASSAR O MOUSE)
    const glitchTitle = document.querySelector('.glitch-text');
    
    if(glitchTitle) {
        glitchTitle.addEventListener('mouseover', () => {
            glitchTitle.setAttribute('data-text', glitchTitle.innerText);
            glitchTitle.classList.add('active');
        });
        
        glitchTitle.addEventListener('mouseout', () => {
            glitchTitle.classList.remove('active');
        });
    }
});