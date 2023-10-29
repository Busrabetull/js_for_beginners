function sayiUret(deneme = 49) {
    return Math.ceil(Math.random() * deneme);
}

//kodları düzenlemek için format document kullanmayı unutma
// i 1 iken içeride 6 tane blok çalışacak, i 2 olacak yine 6 tane blok çalışacak

for (var i = 1; i <= 8; i++) {
    console.log(i + ". KOLON");
    for (var j = 1; j <= 6; j++) {

        console.log(sayiUret());

    }
}

//burada 49 bizim default değerimiz ani değer girmediğimiz sürece en yüksek
// değerimiz 49 olacak. değer girersek en yüksek referans olarak girdiğimzi değeri alacak

