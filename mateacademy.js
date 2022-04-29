// CASE#1

/* Напиши функцію hasNoneLetters, яка приймає два рядка phrase та blacklist і повертає true, якщо phrase не містить жодної букви з blacklist, інакше false.

Порівняння має бути нечутливим до регістру, тобто x у blacklist забороняє також використання X. */

function hasNoneLetters(blacklist, phrase) {
  const bListLetters = blacklist.toLowerCase().match(/[a-z]/g);
  const phraseLetters = phrase.toLowerCase().match(/[a-z]/g);

  return !bListLetters.some((letter) => phraseLetters.includes(letter));
}

hasNoneLetters("Mate Academy", "pqrs");
hasNoneLetters("ABC", "a");

// CASE#2

// Implement function that returns last character of the string.

function getLastCharacter(input) {
  return input.match(/.$/g).toString();
}

getLastCharacter("123");

// CASE#3

/* Напиши функцію checkSubstring, яка приймає рядки text та part і перевіряє, чи text містить part. Регістр не має значення. */

function checkSubstring(text, part) {
  if (part === "") {
    return true;
  } else {
    return text
      .toLowerCase()
      .split(" ")
      .some((word) => word === part.toLowerCase());
  }
}

checkSubstring("mate academy", "school"); // === false
checkSubstring("mate academy", "mate"); // === true
checkSubstring("Mate academy", "matE"); // === true
checkSubstring("Mate academy", ""); // === true
