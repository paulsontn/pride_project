
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}


function searchAlumni() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const alumniCards = document.querySelectorAll('.alumni-card');

    alumniCards.forEach(card => {
        const name = card.querySelector('.alumni-info h3').textContent.toLowerCase();
        const job = card.querySelector('.alumni-info p').textContent.toLowerCase();
        if (name.includes(searchInput) || job.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for signing up!.Stay connected with your alumnis');
});

document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Login Sucess');
});

document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent! Sucessfully');
});
