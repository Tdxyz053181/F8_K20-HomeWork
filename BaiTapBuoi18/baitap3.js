function Person(name) {
 this.name = name;
}
const p = Person('Alice');
console.log(p);
console.log(typeof window !== 'undefined' ? window.name : global.name);
