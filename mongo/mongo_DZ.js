//
// 1) Знайти всіх дітей в яких сердня оцінка 4.2

// db.getCollection('students').find({
//     avgScore: 3.5})



// 2) Знайди всіх дітей з 1 класу

// db.getCollection('students').find({
//     class: 1})

// 3) Знайти всіх дітей які вивчають фізику

// db.getCollection('students').find({
//     lessons: "physics"})

// 4) Знайти всіх дітей, батьки яких працюють в науці ( scientist )

// db.getCollection('students').find({
//     'parents.profession': 'scientist'})

// 5) Знайти дітей, в яких середня оцінка більша за 4

// db.getCollection('students').find({
//     avgScore: {
//         $gt: 4 }})


// 6) Знайти найкращого учня


// db.getCollection('students').find({}).sort({
//     avgScore: -1, class: -1}).limit(1)


// 7) Знайти найгіршого учня

// db.getCollection('students').find({
//     avgScore: {
//         $exists: 1}})
//     .sort({
//         avgScore: 1}).limit(1)


// 8) Знайти топ 3 учнів


// db.getCollection('students').find({}).sort({
//     avgScore: -1}).limit(3)

// 9) Знайти середній бал по школі



// db.students.aggregate([
//     {
//         $group: {
//             '_id': '',
//             'avgAll': {
//                 $avg: '$avgScore'}
//         }
//     }
// ])


// 10) Знайти середній бал дітей які вивчають математику або фізику


// db.students.aggregate([
//     {
//         $match: {
//             $or: [
//                 {lessons: 'mathematics'},
//                 {lessons: 'physics'}
//             ]}
//     },
//     {
//         $group: {
//             '_id': '',
//             'avgClass': {
//                 $avg: '$avgScore'
//             }
//         }
//     }
// ])


// 11) Знайти середній бал по 2 класі

// db.students.aggregate([
//     {
//         $match: {
//             class: 2}
//     },
//     {
//         $group: {
//             '_id': '',
//             'avgClass': {
//                 $avg: '$avgScore'
//             }
//         }
//     }
// ])



// 12) Знайти дітей з не повною сімєю

// db.students.find({
//     $or: [
//         {parents:{$size: 0}},
//         {parents:{$size: 1}}
//     ]
// })


// 13) Знайти батьків які не працюють
// db.students.find({
//     'parents.profession': null
// })




// 14) Не працюючих батьків влаштувати офіціантами


//
// db.students.updateMany({
//     $and: [{parents: {$ne: null}},
//         {'parents.profession': null}
//     ]},{
//     $set: {
//         'parents.$.profession': 'waiter'
//     }})

// 15) Вигнати дітей, які мають середній бал менше ніж 2.5


// db.students.deleteMany({
//     avgScore: {
//         $lt: 2.5}
// })

// 16) Дітям, батьки яких працюють в освіті ( teacher ) поставити 5

// db.students.updateMany({
//         'parents.profession': 'teacher'},
//     {$set: {avgScore: 5}}
// )

// 17) Знайти дітей які вчаться в початковій школі (до 5 класу) і вивчають фізику ( physics )





// 18) Знайти найуспішніший клас




