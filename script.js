document.getElementById("btn1").addEventListener("click", function (e) {
  e.preventDefault();
  let inp1 = document.getElementById("input1").value;
  function leap(year) {
    if (inp1 % 4 === 0) {
      if (inp1 % 100 === 0) {
        if (inp1 % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  if (leap(inp1)) {
    document.getElementById("result1").innerText = inp1 + " Kabisa yili";
  } else {
    document.getElementById("result1").innerText = inp1 + " Kabisa yili emas";
  }
});

document.getElementById("btn2").addEventListener("click", function (a) {
  a.preventDefault();

  let inp2 = document.getElementById("input2").value;
  if (inp2 % 3 === 0 && inp2 % 5 === 0) {
    document.getElementById("result2").innerText = inp2 + " FizzBuzz";
  } else if (inp2 % 3 === 0) {
    document.getElementById("result2").innerText = inp2 + " Fizz";
  } else if (inp2 % 5 === 0) {
    document.getElementById("result2").innerText = inp2 + " Buzz";
  } else {
    document.getElementById("result2").innerText =
      inp2 + " Not Fizz or Buzz number";
  }
});
