const { number } = require("@inquirer/prompts");

const fizzBuzz = async () => {
  // Prompt user to enter number x
  const inputX = await number({
    min: 1,
    required: true,
    message: "Enter number x:",
  });
  // Prompt user to enter number y
  const inputY = await number({
    min: 1,
    required: true,
    validate: (input: string) => {
      if (input === inputX) {
        return "Number y must be different from x = " + inputX;
      }
      return true;
    },
    message: "Enter number y:",
  });
  // Loop through 1 to 100
  for (let index = 1; index <= 100; index++) {
    let output = index.toString();
    // Check if the number is equal to x, y or x*y
    switch (index) {
      case inputX:
        output = "Foo";
        break;
      case inputY:
        output = "Bar";
        break;
      case inputX * inputY:
        output = "FooBar";
        break;
      default:
        break;
    }
    console.log(output);
  }
};
fizzBuzz();
