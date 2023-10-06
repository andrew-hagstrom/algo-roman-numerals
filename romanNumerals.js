function toRomanLazy(num) {
  let output = "";
  const romanNumeralToArabic = {
   I: 1, 
   V: 5, 
   X: 10, 
   L: 50, 
   C: 100, 
   D: 500, 
   M: 1000,
  }; 

  const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  for (ltr of romanNumeralPriorityOrder) { 
    if (num / romanNumeralToArabic[ltr] >=1) {
      howMany = Math.floor(num / romanNumeralToArabic[ltr]); 
      for (i = howMany; i > 0; i--) {
        output += ltr; 
        num -= romanNumeralToArabic[ltr] }
    }
  }
  return output; 
}
  function toRoman(num) {
  let  output = "";
  var romanNumeralToArabic = {
    I: 1, 
    IV: 4, 
    V: 5, 
    IX: 9, 
    X: 10, 
    XL: 40, 
    L: 50, 
    C: 100, 
    CD: 400, 
    D: 500, 
    CM: 900, 
    M: 1000,
}; 
var romanNumeralPriorityOrder = [
  "M", 
  "CM", 
  "D", 
  "CD", 
  "C", 
  "L",
  "XL", 
  "X", 
  "IX", 
  "V", 
  "IV", 
  "I", 
]
for (ltr of romanNumeralPriorityOrder) {

  if (num / romanNumeralToArabic[ltr] < 1) {
  } else if (num / romanNumeralToArabic[ltr] >= 1) {
    howMany = Math.floor(num / romanNumeralToArabic[ltr]); 
    for (i = howMany; i > 0; i--) {
      output += ltr; 
      num -= romanNumeralToArabic[ltr]; 
    }
  }
}
return output;
  }

  console.log(toRoman(4)); 
  console.log(toRoman(150));
  console.log(toRoman(944));

module.exports = {toRoman, toRomanLazy};
