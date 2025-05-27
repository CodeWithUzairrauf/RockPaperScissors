console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playGame(human, computer) {
    if (human === computer) {
        return "It's a tie!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        return `You win! ${capitalize(human)} beats ${computer}`;
    } else {
        computerScore++;
        return `You lose! ${capitalize(computer)} beats ${human}`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function updateScores() {
    document.getElementById('human-score').textContent = `You: ${humanScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
}

function showResult(message) {
    document.getElementById('result').textContent = message;
}

// Add event listeners to buttons
document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const human = this.getAttribute('data-choice');
        const computer = computerChoice();
        const result = playGame(human, computer);
        showResult(`You chose ${capitalize(human)}. Computer chose ${capitalize(computer)}. ${result}`);
        updateScores();
    });
});

// Initialize scores on page load
updateScores();
showResult('');