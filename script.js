//Week 2 Javascript challenge

//Very Easy
function min(x, y) {
    console.log(Math.min(x, y));
  }
  min(10,5);
  
  //Easy
  let students = [
    {
      firstName: "thomas",
      lastName: 'mckyer',
      age: 23,
    },
    {
      firstName: 'rashaad',
      lastName: 'bracley',
      age: 26,
    },
    {
    firstName: 'Bob',
    lastName: 'Builder',
    age: 26,
    },
  ]
  console.log(`Hello, My name is ${students[1].firstName} and I’m ${students[1].age} years old.`)
  
  //Medium
  const random = () => {
    let userInput = x;
    let randomNumb = Math.floor(Math.random() * 13);
  let months = ['jan' , 'feb' , 'march' , 'apr' , 'may' , 'june', 'july' , 'aug' , 'sept', 'oct' , 'nov' , 'dec'];
  return months [randomNum]
  }
    if(userIput >=5){
      return
  
  } else{
    console.log('the month is ${months[userImput]}');
  }
  random ()