class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  private tenants: Person[] = [];

  abstract openDoor(key: Key): void;

  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("You're in the house!");
    } else {
      console.log("The door is closed!");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open!");
    } else {
      this.door = false;
      console.log("The key doesn't fit!");
    }
  }
}

const key = new Key(13);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
