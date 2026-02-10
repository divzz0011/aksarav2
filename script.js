// Filter Kategori
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.package-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Fungsi Pesan WhatsApp
function pesanPaket(namaPaket) {
    const nomorWA = "628123456789"; // Ganti dengan nomor Anda
    const text = encodeURIComponent(`Halo Aksara Wisata, saya tertarik untuk memesan paket: ${namaPaket}. Mohon info lebih lanjut.`);
    window.open(`https://wa.me/${nomorWA}?text=${text}`, '_blank');
}

// Fitur Pencarian Sederhana
const searchInput = document.getElementById('searchInput');
if(searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const val = e.target.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            card.style.display = title.includes(val) ? 'block' : 'none';
        });
    });
}