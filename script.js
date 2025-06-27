function formatHasil(angka, satuan) {
    return (angka % 1 === 0 ? angka : angka.toFixed(2)) + ' ' + satuan;
}

// Menghitung Luas Segitiga
document.getElementById('buttonluas').addEventListener('click', function () {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const output = document.getElementById('output-luas');

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        output.textContent = 'Masukkan angka lebih dari 0 untuk alas dan tinggi.';
        return;
    }

    const luas = 0.5 * alas * tinggi;
    output.textContent = `Luas segitiga adalah ${formatHasil(luas, 'cm')}`;
});

// Menghitung Keliling Segitiga
document.getElementById('buttonkeliling').addEventListener('click', function () {
    const sisiA = parseFloat(document.getElementById('sisi-a').value);
    const sisiB = parseFloat(document.getElementById('sisi-b').value);
    const sisiC = parseFloat(document.getElementById('sisi-c').value);
    const output = document.getElementById('output-keliling');

    if (
        isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) ||
        sisiA <= 0 || sisiB <= 0 || sisiC <= 0
    ) {
        output.textContent = 'Masukkan angka lebih dari 0 untuk semua sisi.';
        return;
    }

    const keliling = sisiA + sisiB + sisiC;
    output.textContent = `Keliling segitiga adalah ${formatHasil(keliling, 'cm')}`;
});
