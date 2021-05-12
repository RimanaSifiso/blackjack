const cards = [];

for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        cards.push({
            card: "A",
            values: [1, 11]
        });
    } else {
        cards.push({
            card: `${i}`,
            value: i
        });
    }
}

const letters = ["J", "K", "Q"];
for (let letter of letters) {
    cards.push({
        card: letter,
        value: 10
    });
}

console.log(cards);
