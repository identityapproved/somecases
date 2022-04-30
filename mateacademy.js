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
  return text.toLowerCase().includes(part.toLowerCase());
}

checkSubstring("mate academy", "school"); // === false
checkSubstring("mate academy", "mate"); // === true
checkSubstring("Mate academy", "matE"); // === true
checkSubstring("Mate academy", ""); // === true
checkSubstring("Lorem ipsum dolor sit amet, consectetur", ", c"); // === true

// CASE#4

/* Допиши функцію getSum, яка приймає масив numbers і повертає суму всіх чисел в ньому.

Масив містить тільки числа. */

function getSum(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

getSum([1, 2, 3]); // === 6
getSum([1.2, 2.8, 3]); // === 7
getSum([-7, 2, 3]); // === -2

// CASE#5

/* Напиши функцію removeVowelKeys, яка приймає масив рядків keys та повертає новий масив тільки з тими словами, які починаються НЕ з голосної літери (aeiouy). Регістр не має значення. */

function removeVowelKeys(keys) {
  const vowels = "aeiouAEIOU";
  const withoutVowels = [];

  if (keys.length === 0) {
    return withoutVowels;
  } else {
    keys.forEach((word) => {
      if (vowels.indexOf(word[0]) === -1) {
        withoutVowels.push(word);
      }
    });
  }
  return withoutVowels;
}

removeVowelKeys(["alarm", "chip", "isValid", "Advice", "onClick"]); // ['chip']
removeVowelKeys([]); // []

// CASE#6

/* Дано масив years, який містить роки життя різних людей у вигляді рядків в форматі 1714-1748 (рік народження - рік смерті).

Допиши функцию getAverageAge так, щоб вона повертала среднюю тривалість життя всіх людей, округлену до найближчого цілого (Math.round) */

function getAverageAge(years) {
  const lifeLength = [];
  for (let i = 0; i < years.length; i++) {
    const eachLife = years[i].split("-");
    const length = +eachLife[1] - +eachLife[0];
    lifeLength.push(length);
  }
  const sum = lifeLength.reduce((pre, curr) => {
    return (pre += curr);
  }, 0);

  return Math.round(sum / lifeLength.length);
}

getAverageAge(["1832-1905", "1876-1956", "1683-1724", "1714-1748"]) === 57;

getAverageAge([
  "1907-1997",
  "1761-1833",
  "1535-1582",
  "1918-2012",
  "1877-1968",
  "1696-1724",
  "1602-1642",
  "1692-1743",
  "1695-1762",
  "1570-1636",
  "1762-1807",
  "1668-1731",
]) === 63;
