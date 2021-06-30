// Wordnik API key:
// let api_key = '/?api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7'

console.log('pop up running');
document.getElementById("but").addEventListener("click", myFunction);
   
function myFunction() {
var userinput = document.getElementById("userinput").value ;

var url_en = "https://api.dictionaryapi.dev/api/v2/entries/en_US/"+userinput;
//var url_hi = "https://api.dictionaryapi.dev/api/v2/entries/hi/"+userinput;
console.log(url_en);
//console.log(url_hi);



async function funcName(url1){
  let response = await fetch(url1);
  let data = await response.json();

  console.log(data[0].meanings[0].definitions[0]);
  document.getElementById('Def').innerHTML = "Definition : \n" + data[0].meanings[0].definitions[0].definition;
  document.getElementById('Ex').innerHTML = 'Example : "'+ data[0].meanings[0].definitions[0].example +'"';
  }

  //async function funcName_hi(url11){
   // let response_hi = await fetch(url11);
    //let data_hi = await response_hi.json();
  
  //  console.log(data_hi[0].meanings[0].definitions[0]);
  //  document.getElementById('Def_hi').innerHTML = "Hindi Definition: \n" + data_hi[0].meanings[0].definitions[0].definition;
    
  //  }

funcName(url_en);
//funcName_hi(url_hi);


}
  

