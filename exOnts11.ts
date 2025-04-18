class Product{
   
    pid:number;
    productName:string;
    price:number;

    constructor(pid:number,productName:string,price:number){
       this.pid=pid;
       this.productName=productName;
       this.price=price;
    }
    
    getProductDetails():string{
        //return this.pid+" "+this.productName+" "+this.price;
      return `The product Details are ${this.pid} ${this.productName} ${this.price} `
    }
    
}

let eobj = new Product(211,"mouse",600);
console.log(eobj.productName);

let pdetails:string=eobj.getProductDetails();
console.log(pdetails)