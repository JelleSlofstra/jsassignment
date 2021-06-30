const photos = document.querySelectorAll('img');

for (let photo of photos) {
    photo.addEventListener('mouseenter', () => {
        photo.style.filter = "grayscale(70%)";
    })

    photo.addEventListener('mouseleave', () => {
        photo.style.filter = "grayscale(0)";
    })
}

const signupList = document.querySelector('#signupList');
const signupForm = document.querySelector('#signupForm');

let signups = [
    {
        'name': 'CodeGorilla',
        'email': 'info@codeGorilla.nl',
        'run': 'bedrijvenloop'
    },
    {
        'name': 'Jelle Slofstra',
        'email': 'jelleslof@zonnet.nl',
        'run': 'recreantenloop'
    },
    {
        'name': 'Dennis Kimeto',
        'email': 'dkimeto@sponsor.com',
        'run': 'wedstrijdloop'
    },
    {
        'name': 'Kenenisa Bekele',
        'email': 'kbekele@loopthard.nl',
        'run': 'wedstrijdloop'
    },
    {
        'name': 'Eliud Kipchoge',
        'email': 'eliudkipchoge@kenia.ke',
        'run': 'wedstrijdloop'
    },
];



function renewSignups() {
    const paragraphs = document.querySelectorAll('#signupList p');
    for (let p of paragraphs) {
        p.remove();
    }
    for (let i = 0; i < 5; i++) {
        let newLine = document.createElement('p');
        newLine.innerText = `${signups[i].name} doet mee aan de ${signups[i].run}.`;
        signupList.append(newLine);
    }
}
renewSignups();

signupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const fullName = signupForm.elements.naam;
    const email = signupForm.elements.email;
    const run = document.querySelector('select');
    if (run.selectedIndex !== 0 && fullName.value.trim() != '' &&
        email.value.trim() != '') {
        signups.unshift({
            'name': fullName.value,
            'email': email.value,
            'run': run.options[run.selectedIndex].value
        })
        renewSignups();
        alert(`Je bent ingeschreven voor de ${run.options[run.selectedIndex].value}`);
        run.selectedIndex = 0;
        fullName.value = '';
        email.value = '';

    }
});
