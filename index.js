/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//1. Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants. --  -- rework price range


function randomGen() {
return (NAMES)[Math.floor(Math.random()* (NAMES.length))] 
+ (OCCUPATIONS)[Math.floor(Math.random()* (OCCUPATIONS.length))] 
+ [Math.floor(Math.random()* (PRICE_RANGE.max - PRICE_RANGE.min +1))+PRICE_RANGE.min];
 }
 


 //2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
function numFreeState() {
    const freelanceArr = []
    for(let i=0;i<=100;i++){
        const newFree = randomGen()
        freelanceArr.push(newFree)
    }
    console.log("freeState", freelanceArr)
    return freelanceArr
}
numFreeState()



// // 3. Write a function that returns the average rate of all freelancers in state.

function retAvgState() {
//get sum of all Free in state

//divide sum of allFree by NUM_FREELANCERS
return  sumValues / NUM_FREELANCERS;
}


// // 4. Use that function to initialize a state variable which will store the average rate of all freelancers. 
// const AvgRate = retAvg()

// // 5. Write a component function to represent a single freelancer. - - create element -- give it content via h tag and -- 
// function singleFree() {

// }
// // 6. Write a component function to represent an array of freelancers. -- stateFree.map -- create element container as a div -- append html elements -- append the body
// function arrFree() {
    
// }
// // 7. Write a component function to represent the average rate of all freelancers. -- 
// function avgFree() {
    
// }
// // 8. Write and call a render function that will mount the application onto the document. -- init function -- get data -- form to add data -- ui to display data (await, add, render)
// function render() {
    
// }
