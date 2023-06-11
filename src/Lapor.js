document.getElementById('laporanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Mengambil nilai input
    var nama = document.getElementById('nama').value;
    var nohp = document.getElementById('nohp').value;
    var deskripsi = document.getElementById('deskripsi').value;
    var lokasi = document.getElementById('lokasi').value;
    var foto = document.getElementById('foto').files[0];

    // Membuat objek FormData untuk mengirim data
    var formData = new FormData();
    formData.append('nama', nama);
    formData.append('nohp', nohp);
    formData.append('deskripsi', deskripsi);
    formData.append('lokasi', lokasi);
    formData.append('foto', foto);

    // Mengirim data ke API menggunakan permintaan HTTP POST
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'URL_API_ANDA', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Tanggapan dari API
            console.log(xhr.responseText);
            alert('Laporan berhasil dikirim!');
            document.getElementById('laporanForm').reset(); // Mereset form setelah pengiriman berhasil
        }
    };
    xhr.send(formData);
});