const names = [];

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const addNameButton = document.getElementById('addNameButton');
    const assignTeamsButton = document.getElementById('assignTeamsButton');
    const teamAssignment = document.getElementById('teamAssignment');

    addNameButton.addEventListener('click', function () {
        const name = nameInput.value.trim();
        if (name !== '') {
            names.push(name);
            nameInput.value = '';
        }
    });

    assignTeamsButton.addEventListener('click', function () {
        if (names.length < 2) {
            alert('You need at least two names to assign teams.');
            return;
        }

        teamAssignment.innerHTML = '';
        shuffleArray(names);

        for (let i = 0; i < names.length; i++) {
            const team = (i % 2 === 0) ? 'Team 1' : 'Team 2';
            const assignmentResult = `${names[i]} is assigned to ${team}`;
            const assignmentElement = document.createElement('p');
            assignmentElement.textContent = assignmentResult;
            teamAssignment.appendChild(assignmentElement);
        }
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
