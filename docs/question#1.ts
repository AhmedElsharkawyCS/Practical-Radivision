class Question1 {
  public msg: string;
  constructor(message: string) {
    this.msg = message;
  }
  public reverse(): string {
    let words: Array<string> = this.msg.split(/\s+/);
    let result: string = "";
    for (const word in words) {
      result += word.split("").reverse().join("");
    }
    return result;
  }
}

console.log(new Question1("Mary had a little lamb.").reverse());
