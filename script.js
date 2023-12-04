//Завдання 1

// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}

// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
async function getData() {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await для очікування виконання Promise.
    const data = await fetchFakeData();
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log("Data:", data);
  } catch (error) {
    // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
    console.error("Error:", error.message);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}

// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
async function logRandomNumberAfterSeconds(seconds) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
    // В функцію потрібно передати в seconds в якості аргументу
    // Результат виконання функції присвоюється константі randomNumber.
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    // Виводимо отримане випадкове число в консоль
    console.log(randomNumber);
  } catch (error) {
    // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
    console.error(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
async function getDataFromUrl(URL) {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch для відправки GET-запиту на вказаний URL
    const response = await fetch(URL)

    // Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль
    if (!response.ok) {
      throw new Error(`Помилка при отриманні даних. Статус: ${response.status}`);
    }

    // Конвертуємо відповідь у формат JSON
    const data = await response.json();

    // Виводимо дані в консоль
    console.log("Отримані дані:", data);
  }
  catch (error) {
    // Виводимо помилки в консоль, якщо вони є
    console.error("Помилка:", error.message);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
async function postDataWithAuth(url, data, authToken) {

  // Використовуємо try для обробки помилок
  try {
    // Використовуємо fetch для відправки POST-запиту на вказаний URL
    const response = await fetch(url, {
      method: 'POST', // Вказуємо метод запиту POST
      headers: {
        'Content-Type': 'application/json', // Вказуємо заголовок "Content-Type" зі значенням "application/json"
        'Authorization': `Bearer ${authToken}` // Вказуємо заголовок "Authorization" з переданим токеном авторизації
      },
      body: JSON.stringify(data) // Перетворюємо дані в формат JSON та передаємо їх в тіло запиту
    });

    // Перевіряємо через властивість ok, чи є відповідь вдалою
    if (!response.ok) {
      throw new Error(`Помилка при отриманні даних. Статус: ${response.status}`);
    }

    // Конвертуємо відповідь у формат JSON
    const responseData = await response.json();

    // Виводимо відповідь в консоль
    console.log(response)
  }
  catch (error) {
    // Виводимо помилки в консоль якщо вони є 
    console.error(error);
  }
}

// Розкоментуйте після виконання завданння
// console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
async function* asyncGenerator() {
  let i = 0;
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Затримка 1 секунда
    yield i++;
  }
}

// Створюємо асинхронну функцію printFiveItems
async function printFiveItems() {
  // Використовуємо асинхронний генератор та записуємо його значення в константу gen
  const gen = asyncGenerator();

  // Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
  for await (const value of gen) {
    // Виводимо в консоль поточне значення
    console.log(value);

    // Умова "if (value === 4)" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
    if (value === 4) {
      break;
    }
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
async function* gatherData() {
  try {
    // Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
    const dbData = await getDataFromDB();
    // Використовуємо yield для того, щоб повернути значення dbData
    yield dbData;

    // Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData
    const apiData = await getDataFromAPI();
    yield apiData;

    // І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
    const cacheData = await getDataFromCache();
    yield cacheData;
  } catch (error) {
    // Виводимо помилки в консоль, якщо вони є
    console.error("Помилка при отриманні даних:", error.message);
  }
}

// Створюємо асинхрону функцію displayData
async function displayData() {
  // Створюємо екземпляр генератора gatherData
  const dataGenerator = gatherData();

  // Три рази виводимо поточне значення генератора в консоль
  for (let i = 0; i < 3; i++) {
    const result = await dataGenerator.next();
    console.log(result.value);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");
displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
function* countdownGenerator(start) {
  // Ініціюємо лічильник змінну count зі стартовим значенням параметра start
  let count = start;

  // Цикл, що триває доки лічильник більший або рівний 0
  while (count >= 0) {
    // Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
    yield count;

    // Зменшуємо лічильник на 1
    count--;
  }
}

console.log("Завдання: 7 ==============================");

// Створюємо екземпляр генератора countdown з лічильником 5
const countdown = countdownGenerator(5);

// Запускаємо генератор та отримуємо перше значення яке записуємо в змінну nextValue
let nextValue = countdown.next();

// Цикл while, що виводить значення з генератора, та працює поки генератор не вичерпається (done === true).
while (!nextValue.done) {
  // Виводимо поточне значення
  console.log(nextValue.value);

  // Отримуємо наступне значення з генератора
  nextValue = countdown.next();
}
