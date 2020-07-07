// let array =["20","23","30","33"];

// function logger(array){
//     for (let i =0; i< array.length; i++){
//         console.log(array[i])
//     }
// }
// logger(array);



// var F = [212,32,122,155];
// F.forEach(myFunction)

// function myFunction(item, index, arr) {
//   arr[index] = (item -32)*(5/9);
// }

// document.getElementById("demo").innerHTML = F;

// حل اخر

// function convert(degree) {
//     var x;
//     if (degree == "C") {
//       x = document.getElementById("c").value * 9 / 5 + 32;
//       document.getElementById("f").value = Math.round(x);
//     } else {
//       x = (document.getElementById("f").value -32) * 5 / 9;
//       document.getElementById("c").value = Math.round(x);
//     }
//   }

  //3
//   let c1 =[45,70,25,36,100];
// let value = 40;
// let c2 =[];

// function hottestDays(array,th, empty_array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > th){
//             empty_array.push(array[i]);
//         }
//     }
//     return c2;
// }
// console.log(hottestDays(c1, value,c2));





// var string = "border-radius:10px 20px 30px 40px";
// var numbers = string.match(/\d+/g).map(Number);
// document.getElementById("demo").innerHTML = numbers;



// function sumLetters(str) {
//     let sum = 0;
//     let splitStr = str.split('');
    
//     for (let i = 0; i < splitStr.length; i++) {
        
//     }
    
//     return sum;
// };

values = [];
var summ=0;
let reg =/\d+/g;
let result =[];
let num1,num2,num3,num4;
function addRecord() {
  var inp = document.getElementById('inputtext');
//   values.push(inp.value);
//   inp.value = "";  
  values.push(inp.value);
  console.log(values);
  document.getElementById("values").innerHTML = values.join(" ");
  //console.log(values);

//   var b=values.split`,`.map(x=>+x);
//   function(x){return parseInt(x,10)}// version from techfoobar
// (x)=>{return parseInt(x)}         // lambda are shorter and parseInt default is 10
// (x)=>{return +x}                  // diff. with parseInt in SO but + is better in this case
// x=>+x 
var str = values.toString();
// var numbers = string.match(/\d+/g).map(Number);
result = str.match(reg);
num1 = parseInt(result[0]);
num2 = parseInt(result[1]);
num3 = parseInt(result[2]);
num4= parseInt(result[3]);
summ = num1+num2+num3+num4;
console.log(result);
console.log(num1);


//  numberArray = values.map(Number)

// console.log(numberArray);
//   var summ = numberArray.reduce(function(prevVal, curVal, curIndex, origArr) {
//     return prevVal + curVal;
//   });


console.log(summ);


  //console.log(values);
  //document.getElementById("values1").innerHTML = values.filter(",");
//   ssum();
// var str = "12sf0as9d";
// var pattern = /\d+/g;
// var total=0;
// function myFunctionf() {

// var total = str.match(pattern).reduce(function(prev, num) {
//   return prev + +num;
// }, 0);

// console.log(str.match(pattern)); // ["12", "0", "9"]
// console.log(total);  
// document.getElementById("total").innerHTML = total;
// }


if (summ>=90)
{
    document.getElementById("total").innerHTML = summ;
    document.getElementById("grade").innerHTML = " A";
    // document.getElementById("A").innerHTML = "img";

} else if (summ<90 && summ>=80){
    document.getElementById("total").innerHTML = summ;
    document.getElementById("grade").innerHTML = " B";
    // document.getElementById("B").innerHTML = "img";

}else if (summ < 80 && summ >=70){
    document.getElementById("total").innerHTML = summ;
    document.getElementById("grade").innerHTML = " C";
}
else if (summ < 70 && summ >=60){
    document.getElementById("total").innerHTML = summ;
    document.getElementById("grade").innerHTML = " D";
    // document.getElementById("D").innerHTML = "img";
}
else if (summ < 60){
    document.getElementById("total").innerHTML = summ;
    document.getElementById("grade").innerHTML = " F";
}

}







// function ssum(){
// var sum = values.reduce(function(a, b){

//     return a + b;

// }, 0);


// console.log(sum); 
// }
// function addRecord(){
// var sum = valuses.reduce(function(a, b){

//     return a + b;

// }, 0);



// console.log(sum); 
// }




 // 1
 


//  skills = ["HTML", "CSS", "JavaScript", "PHP", "Swift", "Java"];
//  wanted_skill = 0;
//  cv = {};

//  cv["name"] = prompt(" ما اسمك؟");
//  cv["age"] = prompt(" كم عمرك؟");
//  cv["experience"] = prompt(" كم عدد سنوات الخبرة لديك؟");

//  console.log("\n");
//  console.log(" :لغات البرمجة");
//  console.log("1. " + skills[0]);
//  console.log("2. " + skills[1]);
//  console.log("3. " + skills[2]);
//  console.log("4. " + skills[3]);
//  console.log("5. " + skills[4]);
//  console.log("6. " + skills[5]);
//  console.log("\n");

//  cv["skills"] = [];

//  let skill = prompt("اختر لغة تتقنها من لغات البرمجة المذكورة بإدخال رقمها");
//  cv["skills"].push(skills[parseInt(skill) - 1]);

//  skill = prompt("اختر لغة برمجة أخرى");
//  cv["skills"].push(skills[parseInt(skill) - 1]);

//  if (
//    parseInt(cv["age"]) > 25 &&
//    parseInt(cv["age"]) < 40 &&
//    parseInt(cv["experience"]) > 3 &&
//    (cv["skills"][0] == skills[wanted_skill]) |
//      (cv["skills"][1] == skills[wanted_skill])
//  ) {
//    console.log("تهانينا، تم قبولك يا" + " " + cv["name"]);
//  } else {
//    console.log(".نأسف، أنت لست رائعاً بالشكل الكافي لتعمل معنا");
//  }
 

 

 // 2
 
 // const logger = function (array) {
 //   array.forEach((temp) => console.log(temp));
 // };

 const logger = function (array) {
   for (let i = 0; i < array.length; i++) {
     console.log(array[i]);
   }
 };

 

//  const toCelsius = function (temperatures) {
//    return temperatures.map((t) => parseInt((t - 32) * (5 / 9)));
//  };

 const toCelsius = function (temperatures) {
   for (let i = 0; i < temperatures.length; i++) {
     cel_temp_array.push(
       (temperatures[i] = parseInt((temperatures[i] - 32) * (5 / 9)))
     );
   }
   return cel_temp_array;
 };

 

//  const hottestDays = function (temperatures, threshold) {
//    return temperatures.filter((t) => t > threshold);
//  };

 const hottestDays = function (temperatures, threshold) {
   for (let i = 0; i < temperatures.length; i++) {
     if (temperatures[i] > threshold) {
       temp_gt_th.push(temperatures[i]);
     }
   }
   return temp_gt_th;
 };

 

//  const logHottestDays = function (temperatures, threshold) {
//    logger(toCelsius(hottestDays(temperatures, threshold)));
//  };

 const logHottestDays = function (temperatures, threshold) {
   logger(toCelsius(hottestDays(temperatures, threshold), cel_temp_array));
 };

 

 // example
 let feh_temp_array = [32, 70, 99, 106];
 // let threshold = 30;
 let threshold = 70;
 let cel_temp_array = [];
 let temp_gt_th = [];

 console.log("مثال باستخدام الدالة الأخيرة فقط");
 console.log("مصفوفة درجات الحرارة بالفهرنهايت", feh_temp_array);
 console.log("القيمة المبدئية بالفهرنهايت", threshold);

 console.log("............");
 logger(feh_temp_array);
 console.log("............");
 console.log(toCelsius(feh_temp_array));
 console.log("............");
 console.log(hottestDays(cel_temp_array, threshold));
 console.log("............");

 // Bonus - Some of the above console.logs will change in bonus case
 // logger(toCelsius(hottestDays(feh_temp_array, threshold)));
 logger(toCelsius(hottestDays(feh_temp_array, threshold), cel_temp_array));
 
 