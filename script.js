// 1- var, let e const
var x = 10;
var y = 15;

if ((y = 10)) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;
let i = 100;

if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  const name = "Catarine";
  console.log(name);
}
const name = "pedro";

// 2 - arrow function
const sum = function sum(a, b) {
  return a + b;
};
const arrowSum = (a, b) => a + b; // mais "economia"
console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return "oii" + name + "!";
  } else {
    return "olá";
  }
};
console.log(greeting("Matheus"));

const user = {
  name: "Carlos",
  sayUserName() {
    var self = this;
    setTimeout(function () {
      console.log(self);
      console.log("user:" + self.name);
    }, 500);
  },

  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log("username:" + this.name);
    }, 700);
  },
};

// 3- filter
const arr = [1, 2, 3, 4, 5];

const highNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});
console.log(highNumbers);

const users = [
  { name: "Carlos", avaliable: true },
  { name: "Paulo", avaliable: false },
  { name: "Marcos", avaliable: true },
  { name: "Vitor", avaliable: false },
];

const avaliableUsers = users.filter((user) => user.avaliable);
const notavaliableUsers = users.filter((user) => !user.avaliable);
console.log(avaliableUsers);
console.log(notavaliableUsers);

// 4 - map
const produtos = [
  { name: "camiseta", preço: 20.0, categoria: "roupas" },
  { name: "xicara", preço: 15.0, categoria: "cozinha" },
  { name: "fogão", preço: 400, categoria: "cozinha" },
  { name: "moletom", preço: 60.9, categoria: "roupas" },
];
produtos.map((produtos) => {
  if (produtos.categoria === "roupas") {
    produtos.promo = true;
  }
});
console.log(produtos);

// 5- templates literals
const userName = "catarine";
const age = 18;

console.log(`o nome do usuário é ${userName} e ele tem ${age} anos`);
// 6- desestructing
const frutas = ['maçã', 'laranja', 'mamão']
const [f1, f2, f3] = frutas
console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
    name: "mouse",
    preco: 40.00,
    categoria: "perifericos",
    color: "cinzas"
}
const {name: productName, preco, categoria:productCategory,color } = productDetails

console.log(`o nome do produto é ${productName} custa ${preco} e é um ${productCategory} da cor${color}`)

// 7 - spread operator
const a1 = [11, 22, 33]
const a2 = [44, 55, 66]
const a3 = [...a1,...a2]
console.log(a3)

const a4 = [0, ...a1, 12]
console.log(a4)

// 8 classes 

class Produto {
    constructor(name,price){
        this.name = name
        this.price = price
    }
      descontoProduto(desconto){
        return this.price * ((100 - desconto)/100)
      }
}
const camisa = new Produto('Camisa gola polo', 20)
console.log(camisa.name)
console.log(camisa.descontoProduto(20))
console.log(camisa.descontoProduto(60))

// 9 herança
class ProdutosComAtributos extends Produto {
    constructor(name,price,colors){
        super (name,price)
        this.colors = colors
    } 
    showColors(){
        console.log("Cores:")
         this.colors.forEach((color)=>{
            console.log(color)
         })
    }
}
const hat = new ProdutosComAtributos ("Chapeu", 29.99,["roxo", "azul", "verde"])
console.log (hat.name)
console.log (hat.descontoProduto(15))
hat.showColors()