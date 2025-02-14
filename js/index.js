function convertir(){
    let km = parseFloat(document.getElementById('km').value) 
    let metros = parseFloat(document.getElementById('metros').value) 
    let pies = parseFloat(document.getElementById('pies').value) 
    let yardas = parseFloat(document.getElementById('yardas').value)
    
    let resultadokm_m = km ? parseFloat(km) * 1000 : 0;
    let resultadomc_m = metros ? parseFloat(metros) * 100 : 0;
    let resultadoft_pulg = pies ? parseFloat(pies) * 12 : 0;
    let resultadoyd_pulg = yardas ? parseFloat(yardas) * 36 : 0;

    document.getElementById('resultado_km_m').innerText = resultadokm_m + " metros";
    document.getElementById('resultado_m_cm').innerText = resultadomc_m + " centimetros";
    document.getElementById('resultado_ft_pulg').innerText = resultadoft_pulg + " pulgadas";
    document.getElementById('resultado_yd_pulg').innerText = resultadoyd_pulg + " pulgadas";

}