/* AGES 1-8 SECTION HONDURAS */
// const honduras = 'https://api.unsplash.com/collections/14679510/photos?client_id=DZEuSfi74vIUmStnngQNyRr7gq-_uXtslvCBuVX32CQ'
// let url;

// fetch(honduras)
// .then(res => {
//     return res.json()
// })

// .then((json)=> {
//     let hondurasArr = json;
//     console.log(hondurasArr);
//     hondurasPics(hondurasArr)
// })
 

// function hondurasPics(pics){
// for(i = 0; i < pics.length; i++){
//     // let pix = pics[0].urls.full
//     // console.log(pix)
//     // document.querySelector('.picture').src = pix
//     document.getElementById('firstImg').src = pics[0].urls.full
//     document.getElementById('secImg').src = pics[1].urls.full
//     document.getElementById('thirdImg').src = pics[2].urls.full
//     console.log('abc')

//     // document.querySelectorAll('').src = pix
// }  
// }

// hondurasPics();

// console.log(pics[0].urls.full)
// {
//     console.log(pics[i].urls.full)
//     let picture = document.getElementById('d-block w-100')
//     picture.src = pics[0].urls.full  
// }

$(document).ready(function(){
    // Activate Carousel
    $("#carouselExampleControls").carousel();
      
    // // Enable Carousel Indicators
    // $(".item1").click(function(){
    //   $("#myCarousel").carousel(0);
    // });
    // $(".item2").click(function(){
    //   $("#myCarousel").carousel(1);
    // });
    // $(".item3").click(function(){
    //   $("#myCarousel").carousel(2);
    // });
    // $(".item4").click(function(){
    //   $("#myCarousel").carousel(3);
    // });
      
    // Enable Carousel Controls
    $(".left").click(function(){
      $("#carouselExampleControls").carousel("prev");
    });
    $(".right").click(function(){
      $("#carouselExampleControls").carousel("next");
    });
  });





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


