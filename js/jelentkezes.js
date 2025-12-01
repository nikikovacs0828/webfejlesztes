const form = document.getElementById('fullForm');
    
// Elemek referenciái
const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const peopleInput = document.getElementById('people');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const successMsg = document.getElementById('success-message');

    // Hibaüzenet tárolók
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorPhone = document.getElementById('error-phone');
const errorPeople = document.getElementById('error-people');
const errorDate = document.getElementById('error-date2');
const errorTime = document.getElementById('error-time');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // ← megakadályozza az oldalváltást míg a validáció be nem fejeződik
    let isValid = true;

        // 1. Töröljük az előző hibaüzeneteket és stílusokat
    const errors = document.querySelectorAll('.error-msg');
    errors.forEach(el => el.textContent = '');
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(el => el.classList.remove('input-error'));

        // --- VALIDÁCIÓK ---

        // Név ellenőrzése (nem lehet üres)
    if (nameInput.value.trim() === "") {
        errorName.textContent = "A név megadása kötelező!";
        nameInput.classList.add('input-error');
        isValid = false;
    }

        // email
    if (emailInput.value.trim() === "") {
        errorEmail.textContent = "Az email megadása kötelező!";
        emailInput.classList.add('input-error');
        isValid = false;
    }

        // Telefonszám (min. 10 karakter)
    if (phoneInput.value.trim().length < 10) {
        errorPhone.textContent = "Adj meg egy érvényes telefonszámot!";
        phoneInput.classList.add('input-error');
        isValid = false;
    }

        // Foglalási létszám
    if (Number(peopleInput.value) < 1) {
        errorPeople.textContent = "Legalább 1 főt meg kell adni!";
        peopleInput.classList.add('input-error');
        isValid = false;
    }

    if (!dateInput.value) {
        errorDate.textContent = "Válassz egy dátumot!";
        dateInput.classList.add('input-error');
        isValid = false;
    } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Mai nap 00:00-ra állítva

        const selectedDate = new Date(dateInput.value);
        selectedDate.setHours(0, 0, 0, 0);

        // Ha múltbeli napot adott meg
        if (selectedDate < today) {
            errorDate.textContent = "A múltbeli napokra nem lehet foglalni!";
            dateInput.classList.add('input-error');
            isValid = false;
        }
    }
    // Időpont (select)
    if (timeInput.value === "") {
        errorTime.textContent = "Válassz egy időpontot!";
        timeInput.classList.add('input-error');
        isValid = false;
    } else {
        // Csak akkor kell időt hasonlítani, ha dátum jó
        if (dateInput.value) {
            const now = new Date();

            // Kiválasztott dátum + idő összeállítása
            const fullSelected = new Date(dateInput.value + "T" + timeInput.value);

            // Ha a teljes dátum-időpont múltbeli
            if (fullSelected < now) {
                errorTime.textContent = "A múltbeli időpontra nem lehet foglalni!";
                timeInput.classList.add('input-error');
                isValid = false;
            }
        }
    }

    if (isValid) {
        form.style.display = "none";            // eltüntetjük az űrlapot
        successMsg.classList.add('show');
    }
        // --- DÖNTÉS ---
        
    if (!isValid) {
        console.log("Hiba az űrlapon!");
    } else {
        // Ha minden OK
        console.log("Minden adat rendben, küldés...");
    }
});
