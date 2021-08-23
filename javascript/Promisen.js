const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + ' is greater than 10');
    } else {
      reject(num + ' is less than 10');
    }
  });
};

testNum(9)
  .then(result => console.log(result))
  .catch(error => console.log(error));

testNum(11)
  .then(result => console.log(result))
  .catch(error => console.log(error));
//*****************************************************************/



const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      words.every(word => {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(word => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Not a string!');
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

const theseAreWords = ['promise', 'practice', 'break'];

makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

const theseAreNotWords = [1, 'hello', 9];

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));
  


////****************************************************************** */
// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const sinterklaasIsGul = true;

// const krijgIkEenNieuweiPhone = new Promise(
//     (resolve, reject) => {
//         if (sinterklaasIsGul) {
//             const smartphone = {
//                 merk: 'Apple',
//                 type: 'iPhone 11'
//             };
//             resolve(smartphone);
//         } else {
//             const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
//             reject(metWelkeReden);
//         }

//     }
// );

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
//     krijgIkEenNieuweiPhone
//         .then(function (resolved) {
//             // yay, je hebt een nieuwe smartphone
//             console.log(resolved);
//         })
//         .catch(function (error) {
//             // oeps, geen Sinterklaas cadeau dit jaar
//             console.log(error.message);
//         });
// }

// vraagAanSinterklaas();
