let heroes = [];
let currentIndex = 0;
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardContainer = document.getElementById("cardContainer");

async function fetchHeroes(name = "") {
  try {
    const res = await fetch(
      `http://localhost:3000/api/characters?name=${encodeURIComponent(name)}`
    );
    const data = await res.json();
    heroes = data.data.results || [];
    currentIndex = 0;
    renderCard();
  } catch (err) {
    cardContainer.innerHTML = `<p class="text-red-400">Erro ao buscar heróis.</p>`;
    console.error(err);
  }
}

function renderCard() {
  if (heroes.length === 0) {
    cardContainer.innerHTML = `<p class="text-gray-300">Nenhum herói encontrado 😢</p>`;
    return;
  }
  const hero = heroes[currentIndex];
  cardContainer.innerHTML = `
    <img
      src="${hero.thumbnail.path}.${hero.thumbnail.extension}"
      alt="${hero.name}"
      class="w-40 h-40 object-cover rounded-full mb-4 border-4 border-white"
    />
    <h2 class="text-2xl font-bold">${hero.name}</h2>
    <p class="text-sm text-center mt-2">${
      hero.description || "Sem descrição disponível."
    }</p>
  `;
}

prevBtn.addEventListener("click", () => {
  if (heroes.length === 0) return;
  currentIndex = (currentIndex - 1 + heroes.length) % heroes.length;
  renderCard();
});

nextBtn.addEventListener("click", () => {
  if (heroes.length === 0) return;
  currentIndex = (currentIndex + 1) % heroes.length;
  renderCard();
});

searchInput.addEventListener("input", () => {
  const name = searchInput.value.trim();
  fetchHeroes(name);
});

// Busca inicial sem filtro
fetchHeroes("Spider");
