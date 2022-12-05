const string1 = document.querySelector("#message");

const codeMessage = () => {
  let message = string1.value;
  let inputValue = message;

  if (inputValue.length > 81) {
    console.log("Invalid message, Input is to long");
    alert("Invalid message, Input is to long");
    return false;
  }

  if (inputValue == "") 
  {
    alert("Invalid message, type input");
    return "";
  }

  let outValue = inputValue.toLowerCase().replace(/\s+|[^a-zA-Z0-9]/g, "");
  let L = Math.sqrt(outValue.length);
  let r = Math.round(L, 0);
  let c = Math.ceil(L);
  //rows and columns

  let rectangle = [];
  let string = "";
  let tmp = 0;

  // Rectangle
  for (let j = 0; j < r; j++) {
    string = "";
    for (let i = tmp; i < c + tmp; i++) {
      if (outValue[i] == undefined) string += " ";
      else string += outValue[i];
    }
    tmp += c;
    rectangle.push(string);
  }

  outValue = "";
  //coded  message
  for (let i = 0; i < c; i++) {
    for (let j = 0; j < r; j++) {
      outValue += rectangle[j].charAt(i);
      //console.log(outValue);
    }
    if (i != c - 1) outValue += " ";
    //return outValue;
  }
  console.log(outValue);
  document.getElementById("message").value = outValue;
  return outValue;
};
