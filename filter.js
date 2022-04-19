/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const thatVip = people.filter(vip => vip.name === "Paul"); // inside object with array
console.log(thatVip);

const thatVip2 = people.filter(vip => vip.name === "Paul")[0]; // outside object, just array
console.log(thatVip2);


  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  const candidates1 = students.filter(student => {
      let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
      return strongSkills.length > 0; // basically return result only if at least one result
  })
  console.log(candidates1);

  // or for more cmplex split

  const has5YearsExp = skill => skill.yrsExperience >= 5; // to check if over 5 years
  const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0; // pass 5 years check and return if results (length) more than 1
  const candidates2 = students.filter(hasStrongSkills); // run check if pass skill yrs check

  console.log(candidates2);