// Keeps track of the current score for each team
const scores = {
    home: 0,
    guest: 0
};

// Grabs the score display elements once so we don't query the DOM on every click
const scoreDisplays = {
    home: document.getElementById("home-score"),
    guest: document.getElementById("guest-score")
};

// Updates the score object for a team and re-renders that team's display
function addPoints(team, points) {
    scores[team] += points;
    renderScore(team);
}

// Writes the current score for a team into its display box
function renderScore(team) {
    scoreDisplays[team].textContent = scores[team];
}

// Wires up every +1/+2/+3 button so clicking it adds points to the right team
function initButtons() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const team = button.dataset.team;
            const points = Number(button.dataset.points);
            addPoints(team, points);
        });
    });
}

initButtons();
