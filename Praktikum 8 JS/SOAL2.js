function hitung_dolar(){
    if(kurs.value == "dollar"){
        let nilai = Number(document.getElementById("nilai").value);
        let dollar = 14650;
        let jumlah = nilai*dollar;
        document.getElementById("jumlah").value=jumlah;
    }
}