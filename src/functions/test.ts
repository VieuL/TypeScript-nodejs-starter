import { MyInterface } from "../models/model";

export class Test {
  public async test() {
    console.log("This is my test")
  }

  public async create(val: MyInterface) {
    val.Avaule = "new"
  }
}