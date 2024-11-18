function generatePairs() {
    const input = document.getElementById("namesInput").value;
    const names = input.split(",").map(name => name.trim()).filter(name => name);

    if (names.length < 2) {
        alert("Введите как минимум два имени!");
        return;
    }

    const shuffled = [...names].sort(() => Math.random() - 0.5);
    const pairs = [];

    for (let i = 0; i < shuffled.length; i++) {
        const santa = shuffled[i];
        const receiver = shuffled[(i + 1) % shuffled.length];
        pairs.push(`${santa} → ${receiver}`);
    }

    displayResults(pairs);
}

function displayResults(pairs) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h3>Результаты Тайного Санты:</h3>";
    const ul = document.createElement("ul");

    pairs.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = pair;
        ul.appendChild(li);
    });

    resultsDiv.appendChild(ul);
}