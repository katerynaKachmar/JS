let money = 0;

function wakeUp(isAlarmSet, cb) {
    setTimeout(() => {
        if (isAlarmSet) {
            cb(null, 'прокидайся, пора вставати, багато справ попереду')
        } else {
            cb('упс, по ходу хтось проспав', null)
        }
    }, 3000)

};

function coffee(coffee, cb) {
    setTimeout(() => {
        if (coffee) {
            cb(null, 'кава є, пий і го працювати')
        } else {
            cb('упс, нема кави, сьогодні будеш сонний')
        }
    }, 2000)
};

function goBus(isPresent, cb) {
    setTimeout(() => {
        if (isPresent) {
            cb(null, 'ура, є автобус, приїду на роботу вчасно')
        } else {
            cb('блін, автобуса нема, запізнюся на роботу.. капець, сьогодні не мій день, кароч, краще піду в кіно', null)
        }
    }, 1000)
};

function doNothing(internet, cb) {
    setTimeout(() => {
        if (internet) {
            cb(null, 'дивись ютубчик')
        } else {
            cb('вмирай з таски', null)
        }
    }, 2000)
}

function goEat(food, cb) {
    setTimeout(() => {
        if (food) {
            cb(null, 'готуй їсти')
        } else {
            cb('нема з чого готувати, йди в магаз', null)
        }
    }, 2500)
}


function work(isALotOfWork, cb) {
    setTimeout(() => {
        if (isALotOfWork) {
            cb('ну і завалили роботою, в кіно я сьогодні точно не піду', null);
        } else {
            money = 500
            cb(null, 'клас, роботи мало, швиденько все зроблю і го в кінцо');

        }
    }, 5000)

};


function goToMovie(cb) {
    setTimeout(() => {
        if (money < 400) {
            cb('упс, а грошей на кінцо нема...', null);
        } else {
            money = money - 400
            cb('ура, фільмєц був кльовий');

        }
    }, 2500)
}

function goHome(cb) {
    setTimeout(() => {
        if (money > 150) {
            cb(null, 'клас, є гроші на таксі')
        } else {
            cb('блін, грошей на таксу нема, доведеться йти пішки...', null)
        }
    }, 3500)
}

wakeUp(true, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res);
        coffee(false, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res)
            }
            goBus(false, (err, res) => {
                if (err) {
                    console.log(err)
                    doNothing(false, (err, res) => {
                        if (err) {
                            console.log(err);
                            goEat(false, (err, res)=>{
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(res);
                                }
                            })
                        } else {
                            console.log(res);

                        }
                    })
                } else {
                    console.log(res)
                    work(false, (err, res) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log(res);
                            console.log(money);
                            goToMovie((err, res) => {
                                if (err) {
                                    console.log(err)
                                } else {

                                    console.log(res);

                                }
                                goHome((err, res) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        console.log(money);
                                        console.log(res);

                                    }
                                })
                            })
                        }
                    })
                }

            })
        })
    }
});


