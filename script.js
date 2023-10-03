function validateForm() {
    const nama = document.getElementById('nama');
    const nim = document.getElementById('nim');
    const email = document.getElementById('email');
    const mk = document.getElementById('mk');
    const dosen = document.getElementById('dosen');
    const nimRegex = /^[0-9]+$/;
    
    if (nama.value == "") {
        alert("Nama harus dituliskan.");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    } else if (nim.value == "") {
        alert("NIM harus dituliskan.");
        document.forms["formPendaftaran"]["nim"].focus();
        return false;
    } else if (!nimRegex.test(nim.value) || nim.value.length < 10) {
        alert("Masukkin NRP yang benar!");
        document.forms["formPendaftaran"]["nim"].focus();
        return false;
    } else if (email.value == "") {
        alert("Email harus dituliskan.");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    } else if (mk.value == "") {
        alert("Mata kuliah harus dipilih.");
        document.forms["formPendaftaran"]["mk"].focus();
        return false;
    } else if (dosen.value == "") {
        alert("Dosen mata kuliah harus dituliskan.");
        document.forms["formPendaftaran"]["dosen"].focus();
        return false;
    }
    alert("Data berhasil disubmit!");
}
