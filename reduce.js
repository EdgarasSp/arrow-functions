  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr); // must take 2 x parameters here: reduce((acc, curr))
                                                  // acc = Accumulator and curr = currentValue
                                                  // acc is ultimately the value which will be returned by .reduce
                                                  // curr = current value, represents the current array  item that the callback function is being run on.  
console.log(sum)


//expanded version to show steps
const nums1 = [0, 1, 2, 3, 4];
let sum1 = nums1.reduce((acc, curr) => {
  console.log(
    "Accumulator:", acc,
    "Current Value", curr,
    "Total:", acc + curr
  )
  return acc + curr;
}, 0);    // NOTE reduce takes another parameter for then to start, default is 1st value, if what to start from 0 value then must specify.
console.log(sum1)



const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
  
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience) // 16


// fancy

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession; //  current profession list
  if (!acc[key]) { // if accumulator does not have profession stored in the key "unique"
    acc[key] = curr.yrsExperience; // new account accumulator sum yrs experience
  } else {
    acc[key] += curr.yrsExperience; // if prof in current key, then just sum
  }
  return acc;
}, {}); // the firs {} is callback the second is is array telling the first pass locations sort of think 0 start not 1

console.log(experienceByProfession);

  // Grouping by a property, and totaling it too