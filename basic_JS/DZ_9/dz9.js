// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.
//
//     Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають.
//     Якщо ж все ок, то ви маєте прожити свій звичайний день.
//     Кожна подія має бути з рандомною (не по зростанню) затримкою.

// let money = 0;
//
// function wakeUp(isAlarmSet, cb) {
//     setTimeout(() => {
//         if (isAlarmSet) {
//             cb(null, 'прокидайся, пора вставати, багато справ попереду')
//         } else {
//             cb('упс, по ходу хтось проспав', null)
//         }
//     }, 3000)
//
// };
//
// function coffee(coffee, cb) {
//     setTimeout(() => {
//         if (coffee) {
//             cb(null, 'кава є, пий і го працювати')
//         } else {
//             cb('упс, нема кави, сьогодні будеш сонний')
//         }
//     }, 2000)
// };
//
// function goBus(isPresent, cb) {
//     setTimeout(() => {
//         if (isPresent) {
//             cb(null, 'ура, є автобус, приїду на роботу вчасно')
//         } else {
//             cb('блін, автобуса нема, запізнюся на роботу.. капець, сьогодні не мій день, кароч, краще піду в кіно', null)
//         }
//     }, 1000)
// };
//
// function work(isALotOfWork, cb) {
//     setTimeout(() => {
//         if (isALotOfWork) {
//             cb('ну і завалили роботою, в кіно я сьогодні точно не піду', null);
//         } else {
//             money = 500
//             cb(null, 'клас, роботи мало, швиденько все зроблю і го в кінцо');
//
//         }
//     }, 5000)
//
// };
//
//
// function goToMovie(cb) {
//     setTimeout(() => {
//         if (money < 400) {
//             cb('упс, а грошей на кінцо нема...', null);
//         } else {
//             money = money -400
//             cb('ура, фільмєц був кльовий');
//
//         }
//     }, 2500)
// }
//
// function goHome(cb) {
//     setTimeout(() => {
//         if (money > 150) {
//             cb(null, 'клас, є гроші на таксі')
//         } else {
//             cb('блін, грошей на таксу нема, доведеться йти пішки...', null)
//         }
//     }, 3500)
// }
//
// wakeUp(true, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res);
//         coffee(false, (err, res) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(res)
//             }
//             goBus(true, (err, res) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log(res)
//                 }
//                 work(false, (err, res) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         console.log(res);
//                         console.log(money);
//                         goToMovie((err, res) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//
//                                 console.log(res);
//
//                             }
//                             goHome( (err, res) => {
//                                 if (err) {
//                                     console.log(err)
//                                 } else {
//                                     console.log(money);
//                                     console.log(res);
//
//                                 }
//                             })
//                         })
//                     }
//                 })
//             })
//         })
//     }
// });





// let money = 0;
// function goWork (go) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (go) {
//                 money = 500
//                 resolve(`тепер ти маєш ${money} гривень`)
//
//             } else {
//                 reject('ти нічо не заробив')
//             }
//         }, 2000)
//     })
// };
// function goToMovie () {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (money > 300) {
//                 resolve('в тебе є гроші шоб піти в кінцо')
//             } else {
//                 reject('шоб йти в кінцо треба було спочатку заробити дєнєг')
//             }
//         }, 4000)
//     })
// }
// goWork(false)
//     .then(value => {
//         console.log(value);
//         return goToMovie()                                                 //чому не виводить локальну помилку?
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason)
//     });


//
//

// let money = 0;
// function wakeUp(isAlarmSet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isAlarmSet) {
//                 resolve('прокидайся, пора вставати, багато справ попереду')
//             } else {
//                 reject('упс, по ходу хтось проспав')
//             }
//         }, 3000)
//     })
//
// }
//
// function coffee(coffee) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (coffee) {
//                 resolve('кава є, пий і го працювати')
//             } else {
//                 reject('упс, нема кави, сьогодні будеш сонний')
//             }
//         }, 2000)
//     })
// }
//
//
// function goBus(isPresent, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPresent) {
//                 resolve( 'ура, є автобус, приїду на роботу вчасно')
//             } else {
//                 reject('блін, автобуса нема, запізнюся на роботу.. капець, сьогодні не мій день, кароч, краще піду в кіно')
//             }
//         }, 1000)
//     })
// };
//
// function work(isALotOfWork, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isALotOfWork) {
//                 reject('ну і завалили роботою, в кіно я сьогодні точно не піду');
//             } else {
//                 money = 500;
//                 resolve( 'клас, роботи мало, швиденько все зроблю і го в кінцо');
//
//             }
//         }, 5000)
//     })
//
// }
//
//
// function goToMovie() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 400) {
//                 reject('упс, а грошей на кінцо нема...');
//             } else {
//                 console.log(1);
//                 money = money - 400;
//                 console.log(money);
//                 resolve('ура, фільмєц був кльовий');
//
//             }
//         }, 2500)
//     })
// }
//
// function goHome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 150) {
//                 resolve( 'клас, є гроші на таксі')
//             } else {
//                 reject('блін, грошей на таксу нема, доведеться йти пішки...')
//             }
//         }, 3500)
//     })
// }
//
// wakeUp(true)
//     .then(value => {
//         console.log(value)
//         return coffee(true)
//     })
//     .then(value => {
//         console.log(value);
//         return goBus(true)
//     })
//     .then(value => {
//         console.log(value);
//
//         return work(false)
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return goToMovie()
//     })
//     .then(value => {
//         console.log(value);
//         console.log(money);
//         return goHome()
//     }).then(value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// });






///////////////////////////////////////////////////////////////




//
//
// let money = 0;
// function wakeUp(isAlarmSet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isAlarmSet) {
//                 resolve('прокидайся, пора вставати, багато справ попереду')
//             } else {
//                 reject('упс, по ходу хтось проспав')
//             }
//         }, 3000)
//     })
//
// }
//
// function coffee(coffee) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (coffee) {
//                 resolve('кава є, пий і го працювати')
//             } else {
//                 reject('упс, нема кави, сьогодні будеш сонний')
//             }
//         }, 2000)
//     })
// }
//
//
// function goBus(isPresent, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPresent) {
//                 resolve( 'ура, є автобус, приїду на роботу вчасно')
//             } else {
//                 reject('блін, автобуса нема, запізнюся на роботу.. капець, сьогодні не мій день, кароч, краще піду в кіно')
//             }
//         }, 1000)
//     })
// };
//
// function work(isALotOfWork, cb) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isALotOfWork) {
//                 reject('ну і завалили роботою, в кіно я сьогодні точно не піду');
//             } else {
//                 money = 500;
//                 resolve( 'клас, роботи мало, швиденько все зроблю і го в кінцо');
//
//             }
//         }, 5000)
//     })
//
// }
//
//
// function goToMovie() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 400) {
//                 reject('упс, а грошей на кінцо нема...');
//             } else {
//                 console.log(1);
//                 money = money - 400;
//                 console.log(money);
//                 resolve('ура, фільмєц був кльовий');
//
//             }
//         }, 2500)
//     })
// }
//
// function goHome() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 150) {
//                 resolve( 'клас, є гроші на таксі')
//             } else {
//                 reject('блін, грошей на таксу нема, доведеться йти пішки...')
//             }
//         }, 3500)
//     })
// }
//
//
// async function myDay() {
//     try {
//         let res = await wakeUp(true );
//         console.log(res);
//         let cof = await coffee(true);
//         console.log(cof);
//         let bus = await goBus(true);
//         console.log(bus);
//         let workP = await work(false);
//         console.log(workP);
//         let movie = await goToMovie(true);
//         console.log(movie);
//         let home = await goHome();
//         console.log(home);
//     } catch (e) {
//         console.error(e)
//     }
// };
// myDay();