var Product = /** @class */ (function () {
    function Product(pid, productName, price) {
        this.pid = pid;
        this.productName = productName;
        this.price = price;
    }
    Product.prototype.getProductDetails = function () {
        //return this.pid+" "+this.productName+" "+this.price;
        return "The product Details are ".concat(this.pid, " ").concat(this.productName, " ").concat(this.price, " ");
    };
    return Product;
}());
var eobj = new Product(211, "mouse", 600);
console.log(eobj.productName);
var pdetails = eobj.getProductDetails();
console.log(pdetails);
