const krediHesapla = () => {
    let cekilecekTutar,
        vadeSayisi,
        aylikTaksit,
        odenecekToplamTutar;
        
    cekilecekTutar = document.getElementById("txtKrediTutari").value;
    console.log(cekilecekTutar)
    let liste = document.getElementById("listeVade");
    vadeSayisi=liste.options[liste.selectedIndex].value;

    if(vadeSayisi == 12) {
        odenecekToplamTutar=cekilecekTutar*1.1;
    }else if(vadeSayisi == 24) {
        odenecekToplamTutar=cekilecekTutar*1.2;
    }else if(vadeSayisi == 36) {
        odenecekToplamTutar=cekilecekTutar*1.3;
    }else if(vadeSayisi == 48) {
        odenecekToplamTutar=cekilecekTutar*1.4;
    }
    
    
    odenecekToplamTutar = cekilecekTutar*1.1;

    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML= odenecekToplamTutar + "" + aylikTaksit;
}