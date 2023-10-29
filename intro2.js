function sayiUret(dene){
    return (Math.ceil(Math.random()*dene))


}
 


var sayi1 = sayiUret()
var sayi2 = sayiUret()
var sayi3 = sayiUret(180)


console.log( "HERE ARE: " + sayi1 + ' ' + sayi2 + ' ' + sayi3)

//ne öğrendim:

//return yazmazsan değeri kullanamzsın
//fonksiyon içine var girmeden çalışıyo
//default değeri
//console.log sadece ekrana yazdırır
//default değer olmadan boş fonksiyon nan çalışır

