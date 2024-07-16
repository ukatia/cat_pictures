import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('cat_pictures.json', 'utf8'));

let numberOfUniqueNames = 0;
let widest = 0;
let heightest = 0;
let cats = [];
let types = [];
data.map(obj => {
    const catName = obj.alt.split(":")[0];
   if (cats.indexOf(catName) < 0) {
    cats.push(catName);
   }
   if (obj.width > widest) {
    widest = obj.width;
   }   
   if (obj.height > heightest) {
    heightest = obj.height;
   }   

   const type = obj.filename.split(".").pop();
   if (!types[type])  {
        types[type] = 1;
   } else {
        types[type]++;
   }

})
const result = {"uniquenames": cats.length, "widest": widest, "heightest": heightest, "formats": types}
console.log(result);