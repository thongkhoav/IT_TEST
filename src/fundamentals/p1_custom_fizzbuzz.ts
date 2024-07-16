const { number } = require("@inquirer/prompts");

const fizzBuzz = async () => {
  const inputX = await number({
    min: 1,
    required: true,
    message: "Enter number x:",
  });
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
  for (let index = 1; index <= 100; index++) {
    let output = index.toString();
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
