function generateCalendar() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    const ageInWeeks = Math.floor((today - birthDate) / (7 * 24 * 60 * 60 * 1000));
    const totalWeeks = 90 * 52; // 90 years

    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';

    for (let i = 0; i < totalWeeks; i++) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'week';
        if (i < ageInWeeks) {
            weekDiv.classList.add('lived');
        }
        calendarDiv.appendChild(weekDiv);
    }

    const age = Math.floor(ageInWeeks / 52);
    const ageDisplay = document.createElement('p');
    ageDisplay.textContent = `Your age: ${age} years`;
    calendarDiv.insertAdjacentElement('beforebegin', ageDisplay);
}

// Load saved birth date if available
window.onload = function() {
    const savedBirthDate = localStorage.getItem('birthDate');
    if (savedBirthDate) {
        document.getElementById('birthDate').value = savedBirthDate;
        generateCalendar();
    }
};

// Save birth date when calendar is generated
document.getElementById('birthDate').addEventListener('change', function() {
    localStorage.setItem('birthDate', this.value);
});