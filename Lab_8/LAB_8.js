function Palindrome_chk(string_ary){
    var cstr = string_ary.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
   var ccount = 0;
   if(cstr==="") {
     console.log("Nothing found!");
     return false;
   }
   if ((cstr.length) % 2 === 0) {
     ccount = (cstr.length) / 2;
   } else {
     if (cstr.length === 1) {
       console.log("Entry is a palindrome.");
       return true;
     } else {
       ccount = (cstr.length - 1) / 2;
     }
   }
   for (var x = 0; x < ccount; x++) {
     if (cstr[x] != cstr.slice(-1-x)[0]) {
       console.log("Entry is not a palindrome.");
       return false;
     }
   }
   console.log("Entry is a palindrome.");
   return true;
 }
     Palindrome_chk('sus');
     Palindrome_chk('nitendra');
     Palindrome_chk('pop');
 
 function Files_listing() {
   const fs = require('fs');
   fs.readdir('.', (err, files) => {
     if (err) {
       console.log(err);
       return;
     }
     console.log(files);
   });
 }
 
 Files_listing();
 
 
 
 
 const fs = require('fs');
 
 function readFileAsync(filepath, callback) {
   fs.readFile(filepath, 'utf8', (err, data) => {
     if (err) {
       callback(err);
     } else {
       callback(null, data);
     }
   });
 }
 
 
 readFileAsync('aguero.txt', (err, data) => {
   if (err) {
     console.error(err);
   } else {
     console.log(data);
   }
 });
 
 
 const axios = require('axios');
 
 async function HttpRequest(url) {
   try {
     const response = await axios.get(url);
     console.log(`Status code: ${response.status}`);
     console.log(`Response data: ${response.data}`);
   } catch (error) {
     console.error(error);
   }
 }
 
 
 HttpRequest('https://api.weather.gov/gridpoints/TOP/28,81/forecast')
   .then(() => console.log('Request complete'))
   .catch((error) => console.error(`Request failed: ${error.message}`));