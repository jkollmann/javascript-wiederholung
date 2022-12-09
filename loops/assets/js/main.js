// ======================================================================================

// INSTANT JAZZ

// Beschreibung: 
// Füge zu jedem String im Array die Zahl 7 hinzu und gebe den Array am Ende zurück

// Beispiele:
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// jazzify([]) ➞ []

// Benutze dazu die array.map() Funktion
function jazzify(chords) {
    return chords.map(item => {
        return item.concat("7")
    })
};
console.log(jazzify(["G", "F", "C"]))

// Schreibe die Funktion mit array.forEach()
function jazzifyWithForEach(chords) {
    const newArray = [];
    chords.forEach(item => {
        newArray.push(item.concat("7"));
    })
    return newArray;
};

console.log(jazzifyWithForEach(["Dm", "G", "E", "A"]));


// Schreibe die Funktion mit einem for loop
function jazzifyWithFor(chords) {

}

// ======================================================================================

// CAPITALISM

// Beschreibung: 
// Wir wollen für einen gegeben Satz alle Anfangsbuchstaben groß schreiben

// Beispiele:
// makeTitle("This is a title") ➞ "This Is A Title"
// makeTitle("capitalize every word") ➞ "Capitalize Every Word"
// makeTitle("I Like Pizza") ➞ "I Like Pizza"
// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"

// Schreibe zunächst eine Funktion die den Anfangsbuchstaben eines Wortes groß schreibt
function capitalizeWord(word) {

}

// Schreibe die Funktion für einen Satz mit einem for-of loop, nutze capitalizeWord
function capitalizeSentence(sentence) {

}

// Schreibe die Funktion mit einem while loop, nutze wieder capitalizeWord
function capitalizeWithWhile(sentence) {

}

// ======================================================================================

// JACKPOT

// Schreibe eine Funktion die true zurückgibt wenn alle Elemente in einem Array gleich sind

// testJackpot(["🍌", "🍌", "🍌", "🍌"]) ➞ true
// testJackpot(["7️⃣", "7️⃣", "7️⃣", "7️⃣"]) ➞ true
// testJackpot(["🍓", "🍓", "🍌", "7️⃣"]) ➞ false

function testJackpot(symbols) {

}

// ======================================================================================

// Online Shopping

// Erstelle eine Funktion die zurückgibt ob eine Bestellung ohne Versandkosten verschickt wird
// Der Versand ist kostenlos ab 50€

// freeShipping({ "Shampoo": 5.99, "Quietscheentchen": 15.99 }) ➞ false
// freeShipping({ "Fernseher": 399.99 }) ➞ true
// freeShipping({ "Monopoly": 11.99, "5000 Teile Puzzle": 35.99, "Mensch ärgere dich nicht": 13.99 }) ➞ true

function freeShipping(order) {

}

// ======================================================================================

// Deduplication

// Erstelle eine Funktion die einen Array mit doppelten Werten in einen einzigartigen Array umwandelt

// deduplicate(["a", "a", "b", "c", "c"]) -> ["a", "b", "c"]
// deduplicate(["a", "b", "c"]) -> ["a", "b", "c"]
// deduplicate([]) -> []

function deduplicate(list) {

}
