import "@design";

class HelloWorld {
  constructor(word) {
    this.word = word;
  }

  init = () => {
    console.log(this.word);
  };
}

const hello = new HelloWorld("hello world");

hello.init();

console.log("hello world");
