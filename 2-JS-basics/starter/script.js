// var firstName= "John";
// console.log(firstName);
// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "teacher";
// console.log(job);

// console.log(firstName + " " + age);

// var job, isMarried;
// fob = "teacher"
// isMarried = false;

// console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// var middleName = prompt("what is his middle name?")

// console.log(firstName + middleName + lastName);
// var year = 2018;
// var ageJohn = year - 28;
// var ageMark = year - 33;

// console.log(ageJohn);
// console.log(year + 2);
// console.log(year * 2);
// console.log(year / 10);

//logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);


//operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //multiple assignments
// var x, y;
// x = (3 + 5) * 4 - 6;


//coding challenge: compare bmi: mass / heightsquared

// var heightMark = 72;
// var heightJohn = 74;
// var weightMark = 245;
// var weightJohn = 245;

// var bmiMark = weightMark / (heightMark * heightMark);
// var bmiJohn = weightJohn / (heightJohn * heightJohn);

// var bmiDiff = bmiJohn <= bmiMark;
// console.log(bmiJohn, bmiMark);

// console.log("Is John's BMI less than Mark's? " + bmiDiff);


// if/else statements

// var firstName = "John";
// var maritalStatus = "single";

// if (maritalStatus === "married") {
//     console.log(firstName + " is married.");   
// } else {
//     console.log(firstName + " will hopefully marry soon...");   
// }
// var isMarried = false;
// if (isMarried === true) {
//     console.log(firstName + " is so married.");   
// } else {
//     console.log(firstName + " is so single.");   
// }
// var heightMark = 72;
// var heightJohn = 74;
// var weightMark = 245;
// var weightJohn = 245;

// var bmiMark = weightMark / (heightMark * heightMark);
// var bmiJohn = weightJohn / (heightJohn * heightJohn);

// var bmiDiff = bmiJohn <= bmiMark;
// if (bmiMark > bmiJohn) {
//     console.log("Mark's BMI is higher than John's.");
// } else {
//     console.log("John's BMI is higher than Mark's");
    
// }

//boolean logic
// var firstName = "John";
// var age = 16;

// if (age < 13) {
//     console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + " is a teenager.");
// } else if (age > 20 && age < 30) {
//     console.log(firstName + " is a young man.");
    
// }else {
//     console.log(firstName + " is a man.");  
// }

// ternary operator and switch statements

//var firstName = "John";
// var age = 16;

// age >= 18 ? console.log(firstName + " drinks beer")
// : console.log(firstName + " drinks juice.");

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);
//above instead of this if/else statement below
// if (age >= 18) {
//     var drink = "beer";
// } else {
//     var drink = "juice";
// }

// switch statement
// var job = "teacher";
// switch (job) {
//     case "teacher":
//         console.log(firstName + " teaches kids how to code.");
//         break
//     case "driver":
//         console.log(firstName + " drives an upber in Lisbon.");
//         break
//     case "designer":
//         console.log(firstName + " designs beautiful websites.");
//         break
//     default:
//         console.log(firstName + " does something else.");
// }

// switch (true) {
//     case age < 13:
//     console.log(firstName + " is a boy.");
//     break;
//     case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager.");
//     break;
//     case age >=20 && age < 30:
//     console.log(firstName + " is a young man.");
//     break;
//     default:
//     log(firstName + " is a man.");
// }
//truthy and falsy
//falsy values: undefined, null, 0, "", Nan
//truthy values: anything NOT falsy
// var height;

// height = 23;
// if (height) {
//     console.log("variable is defined");
// } else {
//     console.log("variable isn't defined");
// }
// if (height || height === 0) {
//     console.log("variable is defined");
// } else {
//     console.log("variable isn't defined");
// }

//equality operators
// if (height === "23") {
//     console.log("The == operator does type coercion!");
// }

//coding challenge # 2

// var johnTeam;
// var mikeTeam;

// johnTeam = (89 + 120 + 103) / 3;
// mikeTeam = (116 + 94 + 123) / 3;

// if (johnTeam > mikeTeam) {
    
//     console.log(johnTeam + " is the winner--John's team");
// } else {
//     console.log(mikeTeam + " is the winnder--Mike's team");
// }

//#2 soluction
// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;

// console.log((scoreJohn, scoreMike));

// if (scoreJohn > scoreMike) {
//     console.log("John's team wins with " + scoreJohn + " points.");
// } else if (scoreMike > scoreJohn) {
//     console.log("Mike's team wins with " + scoreMike + " points.");
// } else {
//     console.log("They tied!");
    
// }


// functions
///////////name///////arguement-variable within function
//can also be () or multiple (birthYear, age)
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJan = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJan);

//years to retirement
// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
    
//     if (retirement > 0) {
//         console.log(firstName + " retires in " + retirement + " years.");
//     } else {
//         console.log(firstName + " is already retired.");
        
//     }
// }
// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "Jan");

// function statements and expressions
//function declaration 
// function whatDoYouDo(job, firstName) {}
//function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case "teacher":
//         //don't need break when there is a return, since it immediately finishes the switch job
//         return firstName + " teaches kids how to code";
//         case "driver":
//         return firstName + " drives a cab in Lisbon";
//         case "designer":
//         return firstName + " designs beautiful websites";
//         default:
//         return firstName + " does something else";
//     }
// }
// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Jane"));
// console.log(whatDoYouDo("retired", "Mark"));
/*
/////////////            arrays
//initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948); //not as popular
console.log(names[0]);
console.log(names.length);
//mutated array data
names[1] = "Ben";
console.log(names);
names[5] = "Mary";
console.log(names);

//different data types
var john = ["John", "Smith", 1990, "teacher", false];
//push adds element to end of array
john.push("blue");
//adds element to beginning of array
john.unshift("Mr.");
//removes last element of array
john.pop();
//removes first element of array
john.shift();
console.log(john);
//indexof returns position of element within array
console.log(john.indexOf(1990));
//-1 means it's not in the array, so false, basically
//this checks if john is a designer based on above array, will log no if not, will log yes if yes
var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";
console.log(isDesigner);
*/

//////// challenge 2

// function tipCalc(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }
// console.log(tipCalc(100));

// var bills = [124, 48, 268];
// var tips = [tipCalc(bills[0]),
//             tipCalc(bills[1]),
//             tipCalc(bills[2])];
//             console.log(tips);
//     var finalBill = [bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ]
// console.log(tips, bills, finalBill);

//////////// objects and properties

// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false
// };
// console.log(john)
// console.log(john.firstName);
// console.log(john["lastName"])
// var x = "birthyear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);
// // new object syntax
// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);

///////////// objects and methods
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1980,
//     family: ["Jane", "Mark", "Bob", "Emily"],
//     job: "teacher",
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

//console.log(john.calcAge(1990));
//console.log(john.calcAge());
// john.age = john.calcAge();

// console.log(john);

/////////// coding challenge 4 /////////////

// var mark = {
//     fullName: "Mark Jones",
//     mass: 198,
//     height: 68,
//     bmi: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }


// var john = {
//     fullName: "John Smith",
//     mass: 232,
//     height: 71,
//     bmi: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// john.bmi();
// mark.bmi();
// console.log(john, mark);

// if (john.bmi > mark.bmi) {
//     console.log("john has a higher bmi");

    
// } else {
//     console.log("mark has a higher bmi");
    
// }

//////////////loops and iteration
//prints 0-9
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
//prints 1-20
// for (var i = 1; i <= 20; i++) {
//     console.log(i);
// }
//prints every other number from 1-20 so odd numbers in this example
// for (var i = 1; i <= 20; i+=2) {
//     console.log(i);
// }
// var john = ["john", "smith", 1990, "designer", false];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }
////while loops
// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }
// continue and break statements
// var john = ["John", "Smith", 1990, "designer", false, "blue"];
// for (var i = 0; i < john.length; i++) {
//     // !== means different so if different from a string "string" then continue
//     if (typeof john[i] !== "string") continue;
//     console.log(john[i]);
// }
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== "string") break;
//     console.log(john[i]);
// }
//////looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
    
// }

//////////////coding challenge 5--tip calculator//////////////
var john = {
    fullName: 'john smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalvalues = [];

        for (var i = 0; i < this.bills.length; i++)
            {
                // determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 50) {
                    percentage = .2;
                } else if(bill >= 50 && bill < 200) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }

                // add result to the arrays
                this.tips[i] = bill * percentage;
                this.finalvalues[i] = bill + bill * percentage;
            }
    }
}

john.calcTips();
console.log(john);



var mark = {
    fullName: 'mark miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalvalues = [];

        for (var i = 0; i < this.bills.length; i++)
            {
                // determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
                
                if (bill < 100) {
                    percentage = .2;
                } else if(bill >= 100 && bill < 300) {
                    percentage = .15;
                } else {
                    percentage = .1;
                }

                // add result to the arrays
                this.tips[i] = bill * percentage;
                this.finalvalues[i] = bill + bill * percentage;
            }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i ++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

mark.calcTips();


john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + "pays higher tips with an average of $" + john.average);
    
} else if (mark.average > john.average) {
    
    console.log(mark.fullName + " pays higher tips with an average of $" + mark.average);
    
    
}






