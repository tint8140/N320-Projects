// let exampleDiv = document.getElementById("txtCool");

// TweenMax.to(exampleDiv, {
//   duration: 2,
//   x: 100,
//   y: 100,
//   backgroundColor: "blue",
// });

let navItems = document.getElementsByClassName("navitem");

for (let i = 0; i < navItems.length; i++) {
  TweenLite.to(navItems[i], {
    //if you use -100, it come out
    //try (i + 1) * 0.6
    duration: 0.6,
    x: 100,
    alpha: 0,
    delay: i * 0.1,
  });
}
