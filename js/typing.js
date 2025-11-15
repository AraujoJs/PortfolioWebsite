
const target = document.querySelector('#typing-text .green-text');

const phrases = [
    'Android Developper',
    'Android Développeur',      // Corrige "Developper"
    'Android Développeur Étudiant en Réseaux & Télécommunication',
    'Android Développeur Étudiant en Réseau & Télecomunication', // Erro: "Réseau" e "Télecomunication"
    'Android Développeur Étudiant en Réseaux & Télécommunication.' // Correção
];

let i = 0; // índice da frase atual
let j = 0; // posição da letra atual
let isDeleting = false;
let correctionPoint = null;

function findDivergence(a, b) {
    let index = 0;
    while (index < a.length && index < b.length && a[index] === b[index]) {
        index++;
    }
    return index;
}

function type() {
    const current = phrases[i];
    const next = phrases[(i + 1) % phrases.length];
    const divergence = findDivergence(current, next);

    // Apontar o que vai ser exibido
    target.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
        j++;
    } else if (isDeleting && j > divergence) {
        j--; // Apagar só até o ponto de divergência
    } else {
        if (!isDeleting && i < phrases.length - 1) {
            // Preparar para correção
            isDeleting = true;
        } else if (isDeleting) {
            // Terminou de apagar até a divergência, troca pra próxima frase
            isDeleting = false;
            i = (i + 1) % phrases.length;
        } else {

        }
    }

    const speed = isDeleting ? 50 : 90;
    const pause = (j === 0 || j === current.length) ? 700 : speed;

    setTimeout(type, pause);
}

document.addEventListener('DOMContentLoaded', type);
