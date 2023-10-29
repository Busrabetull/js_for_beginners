function createNum(){
    console.log(Math.ceil( Math.random() * 80))
}

createNum()

// değeri istediğimiz fonksiyonlarda return kullanmamız gerekir.
// bir fonksiyonda birden fazla adım ve atama olabilir. bu atamaları hangi
// değere vericeğini fonksiyon bilemez return kullanman lazım yani.


var sayi1 = Math.ceil( Math.random() * 49)
var sayi2 = Math.ceil( Math.random() * 49)
var sayi3 = Math.ceil( Math.random() * 49)
var sayi4 = Math.ceil( Math.random() * 49)
var sayi5 = Math.ceil( Math.random() * 49)
var sayi6 = Math.ceil( Math.random() * 49)

console.log('Kolon : ' + sayi1 + ' '
+ sayi2 + ' ' + sayi3 + ' ' + sayi4 + ' ' + sayi5 + ' ' + sayi6 )

var sayi1 = createNum()
var sayi2 = createNum()
var sayi3 = createNum()
var sayi4 = createNum()
var sayi5 = createNum()
var sayi6 = createNum()
