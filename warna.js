const ButtontUbah = document.getElementById('tUbahWarna');
// const body = document.getElementsByTagName('body')[0];
//menggunakan EVENT HANDLER
ButtontUbah.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // //menggunakan setAttribute
    // document.body.setAttribute('class', 'biru-muda');
    //menggunakan classList
    document.body.classList.toggle('biru-muda');
}

//memebuat button di js
const tRandomWarna = document.createElement('button');
const tekTombol = document.createTextNode('Acak Warna');
tRandomWarna.appendChild(tekTombol);
tRandomWarna.setAttribute('type', 'button');
//menyimpan posisi button setelah button ubah
ButtontUbah.after(tRandomWarna);

tRandomWarna.addEventListener('click', function () {
    const w = Math.round(Math.random() * 255 * 1);
    const g = Math.round(Math.random() * 255 * 1);
    const b = Math.round(Math.random() * 255 * 1);
    document.body.style.backgroundColor = 'rgb(' + w + ',' + g + ',' + b + ')';
});

//isi slider dengan jalankan fungsi addlistene nya
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
    const w = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + w + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
    const w = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + w + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function () {
    const w = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + w + ',' + g + ',' + b + ')';
});


//mengubah warna ketika cursor mouse digerakan
document.body.addEventListener('mouseover', function (e) {
    //posisi mouse
    //console.log(e.clientY);
    //ukuran window browser
    //console.log(window.innerWidth);
    //sumbu X dan Y
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',100)';
});