
const packs = [];

function toggleAdmin() {
  const form = document.getElementById('admin-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function submitNewPack(event) {
  event.preventDefault();
  const title = document.getElementById('pack-title').value;
  const days = document.getElementById('pack-days').value;
  const price = document.getElementById('pack-price').value;
  const desc = document.getElementById('pack-description').value;

  packs.push({ title, days, price, desc });
  renderPacks();
  event.target.reset();
  alert("✅ Séjour ajouté !");
}

function renderPacks() {
  const container = document.getElementById('travel-list');
  container.innerHTML = "";
  packs.forEach((pack, index) => {
    const card = document.createElement('div');
    card.className = "travel-card";
    card.innerHTML = `
      <h3>${pack.title}</h3>
      <p>${pack.days} – ${pack.price}</p>
      <p>${pack.desc}</p>
      <button onclick="openBooking()">📩 Réserver</button>
    `;
    container.appendChild(card);
  });
}

function openBooking() {
  document.getElementById('booking-form').style.display = 'block';
}

function submitBooking(event) {
  event.preventDefault();
  document.getElementById('booking-confirm').style.display = 'block';
  setTimeout(() => {
    event.target.reset();
  }, 1500);
}
