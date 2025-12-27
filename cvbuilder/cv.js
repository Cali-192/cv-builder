// 1. OBJEKTI I PËRKTHIMEVE (Translations)
const translations = {
    sq: {
        lblProgress: "PLOTËSIMI I CV-SË",
        lblTagline: "Krijo CV-në tënde profesionale falas.",
        btnAutoFill: "AUTO FILL ✨",
        lblThemeColor: "Ngjyra e Temës",
        lblTemplateStyle: "Stili i Template-it",
        lblProfilePic: "Foto e Profilit",
        sectionTitlePersonal: "Të dhënat Personale",
        lblFullName: "Emri i Plotë",
        lblJobTitle: "Pozita Profesionale",
        lblEmail: "Email",
        lblPhone: "Telefoni",
        sectionTitleContent: "Përmbajtja",
        lblAboutMe: "Rreth Meje",
        lblExperience: "Përvoja & Edukimi",
        lblCertificates: "Certifikatat & Kursët",
        sectionTitleSkills: "Aftësitë & Gjuhët",
        lblAddSkill: "Shto Aftësi",
        lblSkillLevel: "Niveli",
        btnAddSkillBtn: "SHTO AFTËSINË +",
        lblAddLang: "Shto Gjuhë",
        btnAddLangBtn: "SHTO GJUHËN +",
        btnReset: "FSHIJ TË GJITHA (RESET) 🗑️",
        lblDevelopedBy: "Dizajnuar & Zhvilluar nga",
        btnDownloadPDF: "Shkarko si PDF 📥",
        cvLblProfile: "PROFILI",
        cvLblExp: "PËRVOJA & EDUKIMI",
        cvLblCert: "CERTIFIKATAT",
        cvLblSkills: "AFTËSITË TEKNIKE",
        cvLblLangs: "GJUHËT",
        btnTabEdit: "📝 SHKRUAJ",
        btnTabPreview: "👁️ SHIKO CV-në",
        placeholderName: "Filan Fisteku"
    },
    en: {
        lblProgress: "CV COMPLETION",
        lblTagline: "Create your professional CV for free.",
        btnAutoFill: "AUTO FILL ✨",
        lblThemeColor: "Theme Color",
        lblTemplateStyle: "Template Style",
        lblProfilePic: "Profile Picture",
        sectionTitlePersonal: "Personal Information",
        lblFullName: "Full Name",
        lblJobTitle: "Professional Title",
        lblEmail: "Email",
        lblPhone: "Phone Number",
        sectionTitleContent: "Content",
        lblAboutMe: "About Me",
        lblExperience: "Experience & Education",
        lblCertificates: "Certificates & Courses",
        sectionTitleSkills: "Skills & Languages",
        lblAddSkill: "Add Skill",
        lblSkillLevel: "Level",
        btnAddSkillBtn: "ADD SKILL +",
        lblAddLang: "Add Language",
        btnAddLangBtn: "ADD LANGUAGE +",
        btnReset: "CLEAR ALL (RESET) 🗑️",
        lblDevelopedBy: "Designed & Developed by",
        btnDownloadPDF: "Download PDF 📥",
        cvLblProfile: "PROFILE",
        cvLblExp: "EXPERIENCE & EDUCATION",
        cvLblCert: "CERTIFICATES",
        cvLblSkills: "TECHNICAL SKILLS",
        cvLblLangs: "LANGUAGES",
        btnTabEdit: "📝 EDIT",
        btnTabPreview: "👁️ PREVIEW",
        placeholderName: "John Doe"
    },
    de: {
        lblProgress: "CV-AUSFÜLLUNG",
        lblTagline: "Erstellen Sie kostenlos Ihren professionellen CV.",
        btnAutoFill: "AUTO FILL ✨",
        lblThemeColor: "Themenfarbe",
        lblTemplateStyle: "Template-Stil",
        lblProfilePic: "Profilbild",
        sectionTitlePersonal: "Persönliche Informationen",
        lblFullName: "Vollständiger Name",
        lblJobTitle: "Berufsbezeichnung",
        lblEmail: "E-Mail",
        lblPhone: "Telefonnummer",
        sectionTitleContent: "Inhalt",
        lblAboutMe: "Über mich",
        lblExperience: "Erfahrung & Ausbildung",
        lblCertificates: "Zertifikate & Kurse",
        sectionTitleSkills: "Fähigkeiten & Sprachen",
        lblAddSkill: "Fähigkeit hinzufügen",
        lblSkillLevel: "Niveau",
        btnAddSkillBtn: "FÄHIGKEIT HINZUFÜGEN +",
        lblAddLang: "Sprache hinzufügen",
        btnAddLangBtn: "SPRACHE HINZUFÜGEN +",
        btnReset: "ALLES LÖSCHEN (RESET) 🗑️",
        lblDevelopedBy: "Entworfen & Entwickelt von",
        btnDownloadPDF: "PDF Herunterladen 📥",
        cvLblProfile: "PROFIL",
        cvLblExp: "ERFAHRUNG & BILDUNG",
        cvLblCert: "ZERTIFIKATE",
        cvLblSkills: "TECHNISCHE SKILLS",
        cvLblLangs: "SPRACHEN",
        btnTabEdit: "📝 EDIT",
        btnTabPreview: "👁️ VORSCHAU",
        placeholderName: "Max Mustermann"
    }
};

// 2. FUNKSIONI I NDËRRIMIT TË GJUHËS
function changeAppLanguage(lang) {
    const selectedLang = translations[lang];
    for (let id in selectedLang) {
        let element = document.getElementById(id);
        if (element) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.placeholder = selectedLang[id];
            } else {
                element.innerText = selectedLang[id];
            }
        }
    }
    localStorage.setItem('preferredLang', lang);
    updateCV(); // Përditëso letrën e CV-së me placeholders e rinj
}

// 3. FUNKSIONI KRYESOR UPDATE
function updateCV() {
    const lang = localStorage.getItem('preferredLang') || 'sq';
    const t = translations[lang];

    document.getElementById('outName').innerText = document.getElementById('inName').value || t.placeholderName.toUpperCase();
    document.getElementById('outTitle').innerText = document.getElementById('inTitle').value || "POSITION";
    document.getElementById('outEmail').innerText = document.getElementById('inEmail').value || "email@shembull.com";
    document.getElementById('outPhone').innerText = document.getElementById('inPhone').value || "+383 44 000 000";
    document.getElementById('outAbout').innerText = document.getElementById('inAbout').value || "...";
    document.getElementById('outExp').innerText = document.getElementById('inExp').value || "...";
    document.getElementById('outCert').innerText = document.getElementById('inCert').value || "...";

    // Social Media Logic
    const liVal = document.getElementById('inLinkedin').value;
    const liBox = document.getElementById('linkBoxLi');
    if (liVal) { liBox.style.display = "flex"; document.getElementById('outLinkedin').innerText = liVal; }
    else { liBox.style.display = "none"; }

    const ghVal = document.getElementById('inGithub').value;
    const ghBox = document.getElementById('linkBoxGh');
    if (ghVal) { ghBox.style.display = "flex"; document.getElementById('outGithub').innerText = ghVal; }
    else { ghBox.style.display = "none"; }

    // Character Counter
    const aboutText = document.getElementById('inAbout').value;
    const charCounter = document.getElementById('charCount');
    charCounter.innerText = `${aboutText.length} / 250`;
    charCounter.style.color = aboutText.length >= 240 ? "#ef4444" : "#facc15";

    updateProgress();
    saveToLocal();
}

// 4. LOGJIKA E PROGRESIT, SKILLS, GJUHËVE
function updateProgress() {
    const fields = ['inName', 'inTitle', 'inEmail', 'inPhone', 'inAbout', 'inExp', 'inCert'];
    let filled = 0;
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value.trim() !== "") filled++;
    });
    const percent = Math.round((filled / fields.length) * 100);
    const bar = document.getElementById('progressBar');
    if(bar) {
        bar.style.width = percent + "%";
        document.getElementById('progressText').innerText = percent + "%";
        if (percent < 40) bar.className = "progress-bar bg-danger";
        else if (percent < 80) bar.className = "progress-bar bg-warning";
        else bar.className = "progress-bar bg-success";
    }
}

function addSkill() {
    const nameInput = document.getElementById('skillName');
    const levelInput = document.getElementById('skillLevel');
    const outSkills = document.getElementById('outSkills');
    if (nameInput.value.trim() === "") return;
    const skillId = "skill-" + Date.now();
    const skillDiv = document.createElement('div');
    skillDiv.className = "col-6 mb-3";
    skillDiv.id = skillId;
    skillDiv.innerHTML = `
        <div class="skill-item">
            <div class="d-flex justify-content-between mb-1">
                <span style="font-size: 0.85rem; font-weight: 600;">${nameInput.value}</span>
                <button onclick="this.closest('.col-6').remove()" class="btn p-0 text-danger" style="font-size: 10px;">✕</button>
            </div>
            <div class="progress" style="height: 6px; background: #f1f5f9; border-radius: 10px;">
                <div class="progress-bar" style="width: ${levelInput.value}%; background-color: var(--accent);"></div>
            </div>
        </div>`;
    outSkills.appendChild(skillDiv);
    nameInput.value = "";
}

function addLanguage() {
    const langInput = document.getElementById('langName');
    const outLangs = document.getElementById('outLangs');
    if (langInput.value.trim() === "") return;
    const li = document.createElement('li');
    li.style = "background: #f1f5f9; padding: 5px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: #334155;";
    li.innerHTML = `${langInput.value} <span onclick="this.parentElement.remove()" style="cursor:pointer; margin-left:5px; color:red">×</span>`;
    outLangs.appendChild(li);
    langInput.value = "";
}

// 5. MEDIA & TEMA
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('outImage');
        output.src = reader.result;
        output.style.display = "block";
    }
    reader.readAsDataURL(event.target.files[0]);
}

function changeTheme(color, el) {
    document.documentElement.style.setProperty('--accent', color);
    document.getElementById('outTitle').style.color = color;
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
    el.classList.add('active');
}

function toggleDarkMode(isDark) {
    const cv = document.getElementById('cv-template');
    const btnDark = document.getElementById('btnDark');
    const btnLight = document.getElementById('btnLight');
    if (isDark) {
        cv.classList.add('dark-theme');
        btnDark.classList.add('active', 'btn-primary');
        btnLight.classList.remove('active', 'btn-primary');
    } else {
        cv.classList.remove('dark-theme');
        btnLight.classList.add('active', 'btn-primary');
        btnDark.classList.remove('active', 'btn-primary');
    }
    localStorage.setItem('cvDarkMode', isDark);
}

// 6. TABS & STORAGE
function switchTab(tab) {
    const wrapper = document.querySelector('.main-wrapper');
    const btns = document.querySelectorAll('.tab-btn');
    if (tab === 'view') {
        wrapper.classList.add('view-mode');
        btns[1].classList.add('active');
        btns[0].classList.remove('active');
    } else {
        wrapper.classList.remove('view-mode');
        btns[0].classList.add('active');
        btns[1].classList.remove('active');
    }
}

function saveToLocal() {
    const data = {
        name: document.getElementById('inName').value,
        title: document.getElementById('inTitle').value,
        email: document.getElementById('inEmail').value,
        phone: document.getElementById('inPhone').value,
        linkedin: document.getElementById('inLinkedin').value,
        github: document.getElementById('inGithub').value,
        about: document.getElementById('inAbout').value,
        exp: document.getElementById('inExp').value,
        cert: document.getElementById('inCert').value
    };
    localStorage.setItem('cvData', JSON.stringify(data));
}

window.onload = function() {
    // Show Modal
    var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    myModal.show();

    // Check Dark Mode
    if (localStorage.getItem('cvDarkMode') === 'true') toggleDarkMode(true);

    // Check Language
    const savedLang = localStorage.getItem('preferredLang') || 'sq';
    document.getElementById('langSwitcher').value = savedLang;
    changeAppLanguage(savedLang);

    // Load Data
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
        const data = JSON.parse(savedData);
        document.getElementById('inName').value = data.name || "";
        document.getElementById('inTitle').value = data.title || "";
        document.getElementById('inEmail').value = data.email || "";
        document.getElementById('inPhone').value = data.phone || "";
        document.getElementById('inLinkedin').value = data.linkedin || "";
        document.getElementById('inGithub').value = data.github || "";
        document.getElementById('inAbout').value = data.about || "";
        document.getElementById('inExp').value = data.exp || "";
        document.getElementById('inCert').value = data.cert || "";
        updateCV();
    }
};

function clearAll() {
    if(confirm("Reset?")) { localStorage.removeItem('cvData'); location.reload(); }
}

function printCV() {
    const emri = document.getElementById('inName').value || "CV";
    const titulliOrigjinal = document.title;
    document.title = "CV - " + emri;
    window.print();
    document.title = titulliOrigjinal;
}

function autoFill() {
    document.getElementById('inName').value = "Artan Gashi";
    document.getElementById('inTitle').value = "Senior Web Developer";
    document.getElementById('inEmail').value = "artan.gashi@email.com";
    document.getElementById('inPhone').value = "+383 49 123 456";
    document.getElementById('inAbout').value = "Zhvillues i apasionuar me mbi 5 vite përvojë...";
    document.getElementById('inExp').value = "TechSolutions | 2020 - Sot";
    updateCV();
}
// Ruaj CV-në si file .json
function exportJSON() {
    const data = localStorage.getItem('cvData');
    if (!data) return alert("Nuk ka të dhëna për të ruajtur!");
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_Pro_Builder_${Date.now()}.json`;
    a.click();
}

// Ngarko CV-në nga një file .json
function importJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            localStorage.setItem('cvData', JSON.stringify(data));
            location.reload(); // Rifresko faqen për të ngarkuar të dhënat e reja
        } catch (err) {
            alert("File i gabuar!");
        }
    };
    reader.readAsText(file);
}
// REGJISTRIMI I APLIKACIONIT (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Aplikacioni është gati për përdorim offline!'))
      .catch(err => console.error('Gabim gjatë regjistrimit të PWA:', err));
  });
}

// FUNKSIONI PËR IMPORTIN E PROJEKTIT (💾)
function importJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            localStorage.setItem('cvData', JSON.stringify(data));
            location.reload(); // Rifreskon faqen me të dhënat e reja
        } catch (err) {
            alert("File i gabuar! Sigurohu që është file .json i vlefshëm.");
        }
    };
    reader.readAsText(file);
}

// FUNKSIONI PËR EXPORTIN E PROJEKTIT (📂)
function exportJSON() {
    const data = localStorage.getItem('cvData');
    if (!data) return alert("Nuk ka të dhëna për të ruajtur!");
    
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_Pro_Project_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}