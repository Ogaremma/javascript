// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let num = 1; num <= 10; num += 1) {
    console.log("IM IN THE LOOP BABY");
    console.log(num);
};
for (let num = 100; num >= 0; num -= 10) {
    console.log(num);
    console.log("IM IN THE LOOP BABY");
};

// LOOPING OVER ARRAYS
const animals = [
    "Anaconda",
    "Girrafe",
    "Tiger",
    "Lion",
    "Cobra",
    "Antelope",
    "Mosquito",
    "Rhinoceros",
    "Cheetah",
    "Squirrel",
    "Elephant",
    "Crocodile",
    "Mouse",
]

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
};

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
};

for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`       j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW # ${i + 1}`);
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

let count = 0;

while (count < 10) {
    count++;
    console.log(count)
}

let maximum = parseInt(prompt("Enter a max number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"))
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = prompt("TOO HIGH! TO ENTER")
    } else {
        guess = prompt("TOO LOW! TO ENTER")
    }
}
console.log("YOU DON GET AM OHH !!!")