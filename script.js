// Responsive Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Modal Controls
const backdrop = document.getElementById('modalBackdrop');
const regModal = document.getElementById('registrationModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');

function openModal(type) {
    if (!backdrop || !regModal) return;
    
    backdrop.classList.remove('hidden');
    regModal.classList.remove('hidden');

    if (type === 'seminarModal') {
        if (modalTitle) modalTitle.textContent = "Daftar Seminar Gratis";
        if (modalSubtitle) modalSubtitle.textContent = "Isi data Bunda untuk langsung bergabung di grup Seminar Gratis Laili Brand.";
    } else if (type === 'kemitraanModal' || type === 'joinModal') {
        if (modalTitle) modalTitle.textContent = "Gabung Kemitraan Laili";
        if (modalSubtitle) modalSubtitle.textContent = "Dapatkan bimbingan bisnis & penghasilan tambahan dari rumah bersama Laili Brand.";
    } else if (type === 'consultModal') {
        if (modalTitle) modalTitle.textContent = "Konsultasi Gratis";
        if (modalSubtitle) modalSubtitle.textContent = "Tim Laili Brand siap membantu menjawab pertanyaan dan kebutuhan usaha Bunda.";
    } else if (type === 'pilarModal') {
        if (modalTitle) modalTitle.textContent = "5 Pilar Utama Laili";
        if (modalSubtitle) modalSubtitle.textContent = "Komitmen kami untuk membangun keluarga Indonesia yang sehat, sejahtera & berdaya.";
    }
}

function closeModal() {
    if (backdrop) backdrop.classList.add('hidden');
    if (regModal) regModal.classList.add('hidden');
}

if (backdrop) {
    backdrop.addEventListener('click', closeModal);
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert("Terima kasih, Bunda! Data pendaftaran berhasil terkirim. Tim Laili Brand akan segera menghubungi Bunda.");
    closeModal();
}
