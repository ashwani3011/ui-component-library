const obj = {
  name: "steve",
  func: function () {
    Console.log(this);
  },
};
Obj.calcAge();

const func = function () {
  console.log(this);
};
func();

const func = () => {
  console.log(this);
};

button.addEventListener("click", () => {
  console.log(this);
});
