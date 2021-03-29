/* AGES 1-8 SECTION HONDURAS */
const honduras = 'https://api.unsplash.com/collections/14679510/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
let url;

fetch(honduras)
.then(res => {
    return res.json()
})

.then((json)=> {
    let hondurasArr = json;
    // console.log(hondurasArr);
    hondurasPics(hondurasArr)

})


function hondurasPics(pics){
    console.log(pics[0].urls.full)
    for(let i = 0; i <= pics.length; i++){
        console.log(pics[i].urls.full)
        let picture = document.getElementById('d-block w-100')
        picture.src = pics.urls.full  
    }

    
    // return (Math.random(pics).length.urls.full)
}

hondurasPics();







// /* AGES 9-18 SECTION SCHOOL */

// const schoolYears = 'https://api.unsplash.com/collections/1297899/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
// // let url;

// fetch(schoolYears)
// .then(res => {
//     return res.json()
// })

// .then((json)=> {
//     console.log(json)
// })


// /* AGES 19-24 SECTION MILITARY  */

// const militaryYears = 'https://api.unsplash.com/collections/3621321/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
// // let url;

// fetch(militaryYears)
// .then(res => {
//     return res.json()
// })

// .then((json)=> {
//     console.log(json)
// })


// /* AGES 25-28 SECTION COLLEGE */

// const collegeYears = 'https://api.unsplash.com/collections/9799532/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
// // let url;

// fetch(collegeYears)
// .then(res => {
//     return res.json()
// })

// .then((json)=> {
//     console.log(json)
// })


// /* AGES 29-32 SECTION AIRPLANES  */

// const airplaneYears = 'https://api.unsplash.com/collections/8518898/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
// // let url;

// fetch(airplaneYears)
// .then(res => {
//     return res.json()
// })

// .then((json)=> {
//     console.log(json)
// })



// /* AGES 33 SECTION PROGRAMMING  */

// const programming = 'https://api.unsplash.com/collections/14679510/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
// // let url;

// fetch(programming)
// .then(res => {
//     return res.json()
// })

// .then((json)=> {
//     console.log(json)
// })


