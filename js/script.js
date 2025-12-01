let pontok = {
    Paris: 0,
    Rory: 0,
    Lorelai: 0,
    Sookie: 0,
    Lane: 0
};

// --- KÉRDÉSEK ---
let kerdesek = [
    {
        kerdes: "1. Mi jellemez téged leginkább?",
        valaszok: [
            { szoveg: "Ambiciózus és versengő", karakter: "Paris" },
            { szoveg: "Kedves és szorgalmas", karakter: "Rory" },
            { szoveg: "Vidám és energikus", karakter: "Lorelai" },
            { szoveg: "Támogató és gondoskodó", karakter: "Sookie" },
            { szoveg: "Lázadó, kreatív", karakter: "Lane" }
        ]
    },
    {
        kerdes: "2. Mit csinálsz szabadidődben?",
        valaszok: [
            { szoveg: "Tanulok vagy olvasok", karakter: "Rory" },
            { szoveg: "Zenehallgatás / koncert", karakter: "Lane" },
            { szoveg: "Kávézom valakivel", karakter: "Lorelai" },
            { szoveg: "Főzök / sütök", karakter: "Sookie" },
            { szoveg: "Versenyre készülök", karakter: "Paris" }
        ]
    },
    {

        kerdes: "3. Mi a kedvenc italod?",
        valaszok: [
            { szoveg: "KÁVÉ! Mindig kávé!", karakter: "Lorelai" },
            { szoveg: "Tea", karakter: "Rory" },
            { szoveg: "Fehérbor", karakter: "Paris" },
            { szoveg: "Forró csoki", karakter: "Sookie" },
            { szoveg: "Üdítő", karakter: "Lane" }
        ]
    },
    {
        kerdes: "4. Hogyan kezeled a konfliktusokat?",
        valaszok: [
            { szoveg: "Küzdök, nem hátrálok meg", karakter: "Paris" },
            { szoveg: "Megértem a másikat", karakter: "Sookie" },
            { szoveg: "Humorral oldom", karakter: "Lorelai" },
            { szoveg: "Elemzem és megoldom", karakter: "Rory" },
            { szoveg: "Lázadok és kimondom", karakter: "Lane" }
        ]
    },
    {
        kerdes: "5. Hol lennél legszívesebben?",
        valaszok: [
            { szoveg: "Stars Hollow kávézójában", karakter: "Lorelai" },
            { szoveg: "A könyvtárban", karakter: "Rory" },
            { szoveg: "A konyhában sütögetve", karakter: "Sookie" },
            { szoveg: "Egy koncerten", karakter: "Lane" },
            { szoveg: "Yale-en előadáson", karakter: "Paris" }
        ]
    },
    {
        kerdes: "6. Milyen zenét hallgatsz legszívesebben?",
        valaszok: [
            { szoveg: "Klasszikus, komoly művek", karakter: "Paris" },
            { szoveg: "Indie, alternatív", karakter: "Lane" },
            { szoveg: "Pop, vidám dallamok", karakter: "Lorelai" },
            { szoveg: "Nyugtató, instrumentális", karakter: "Sookie" },
            { szoveg: "Akármit, ami inspirál", karakter: "Rory" }
        ]
    },
    {
        kerdes: "7. Hogyan viselkedsz idegenekkel?",
        valaszok: [
            { szoveg: "Óvatos és tartózkodó", karakter: "Paris" },
            { szoveg: "Barátságos és segítőkész", karakter: "Sookie" },
            { szoveg: "Vidám, könnyen nyitok", karakter: "Lorelai" },
            { szoveg: "Csendes és megfigyelő", karakter: "Rory" },
            { szoveg: "Merész, néha lázadó", karakter: "Lane" }
        ]
    },
    {
        kerdes: "8. Milyen házikedvenced lenne?",
        valaszok: [
            { szoveg: "Okos kutya", karakter: "Rory" },
            { szoveg: "Kedves macska", karakter: "Sookie" },
            { szoveg: "Exkluzív, ritka fajta", karakter: "Paris" },
            { szoveg: "Vidám, játékos állat", karakter: "Lorelai" },
            { szoveg: "Zenei vagy furcsa állat", karakter: "Lane" }
        ]
    },
    {
        kerdes: "9. Melyik a kedvenc hobbid?",
        valaszok: [
            { szoveg: "Olvasás és tanulás", karakter: "Rory" },
            { szoveg: "Főzés és sütés", karakter: "Sookie" },
            { szoveg: "Kávézás, beszélgetés barátokkal", karakter: "Lorelai" },
            { szoveg: "Zenélés vagy koncert", karakter: "Lane" },
            { szoveg: "Versenyzés, kihívások", karakter: "Paris" }
        ]
    },
    {
        kerdes: "10. Milyen típusú buliban éreznéd jól magad?",
        valaszok: [
            { szoveg: "Intellektuális beszélgetések", karakter: "Rory" },
            { szoveg: "Főző- vagy kávés esemény", karakter: "Sookie" },
            { szoveg: "Humoros, vidám társaság", karakter: "Lorelai" },
            { szoveg: "Rock koncert vagy zenei esemény", karakter: "Lane" },
            { szoveg: "Verseny vagy vetélkedő", karakter: "Paris" }
        ]
    }
];


let index = 0;

const kerdesElem = document.getElementById("kerdes");
const valaszokElem = document.getElementById("valaszok");
const kovGomb = document.getElementById("kovetkezo");
const eredmenyElem = document.getElementById("eredmeny");

let leirasok = {
    "Paris": "Ambiciózus, céltudatos és versengő személyiség. Mindig a legjobbra törekszik, és nem fél kiállni magáért. Néha kicsit kritikus vagy másokkal szemben, de igazából törődik azokkal, akik fontosak számára. Inspiráló lehet azoknak, akik szeretnének keményen dolgozni és elérni a céljaikat.",
    "Rory": "Okos, szorgalmas és kíváncsi. Szereti a tudást és a könyveket, mindig törekszik arra, hogy fejlődjön. Empatikus és segítőkész, könnyen képes mások szemszögéből is látni a dolgokat. Ideális társ a nyugodt, értelmes beszélgetésekhez.",
    "Lorelai": "Vidám, energikus és humoros. Imádja a kávét, a barátokat és a spontaneitást. Mindig próbálja a legjobbat kihozni az életből, és motiválja környezetét. Kreatív, életigenlő és rendkívül szerethető személyiség.",
    "Sookie": "Gondoskodó, kreatív és szeretetteljes. Imád főzni, szereti a barátait és mindig kész segíteni másoknak. Nyugodt, türelmes, de a kreativitásban rendkívül merész és innovatív. Egy igazi szívvel-lélekkel élő barát.",
    "Lane": "Különc, lázadó és zeneszerető. Szereti a szabadságot, a kreativitást és a saját stílusát. Néha makacs, de nagyon hűséges barát. Imádja a zenét, és mindig kitart amellett, amiben hisz, legyen az hobbi, zene vagy életvitel."
    };

megjelenit(); //megjeleníti az első kérdést

function megjelenit() {
    kovGomb.style.display = "none";
    kerdesElem.style.display = "block"; //kérdés mutatása
    valaszokElem.style.display = "flex"; //válaszok egymás alatt szépen elhelyezkednek
    kerdesElem.textContent = kerdesek[index].kerdes; //jelenlegi kérdést kiírja az oldalra
    valaszokElem.innerHTML = ""; //régi gombok törlése

    kerdesek[index].valaszok.forEach(v => {
        const btn = document.createElement("button");
        btn.className = "valasz";
        btn.textContent = v.szoveg;

        btn.onclick = (e) => {
            //pontozás
            pontok[v.karakter]++;

            //minden gomb letiltása
            Array.from(valaszokElem.children).forEach(b => b.disabled = true);

            //a kattintott gomb kiemelése
            e.currentTarget.classList.add("kivalasztott");

            kovGomb.style.display = "block";
        };

        valaszokElem.appendChild(btn);
    });
}

kovGomb.onclick = () => {
    index++;
    if (index < kerdesek.length) {
        megjelenit();
    } else {
        eredmenyMutat();
    }
};

function eredmenyMutat() {
    kerdesElem.style.display = "none";
    valaszokElem.style.display = "none";
    kovGomb.style.display = "none";

    let nyertes = Object.keys(pontok).reduce((a, b) =>
        pontok[a] > pontok[b] ? a : b
    );

    eredmenyElem.style.display = "block";
    eredmenyElem.innerHTML = `
        <h2>Te leginkább ${nyertes} vagy!</h2>
        <p>${leirasok[nyertes]}</p>
    `;
}