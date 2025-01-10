document.getElementById('transaksi-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nama = document.getElementById('nama').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;
  
    if (!nama || !jumlah || !kategori) {
      alert('Harap isi semua kolom!');
      return;
    }
  
    const tableBody = document.getElementById('transaksi-data');
    const row = document.createElement('tr');
  
    row.innerHTML = `
      <td>${nama}</td>
      <td>${jumlah}</td>
      <td>${kategori}</td>
    `;
  
    tableBody.appendChild(row);
  
    this.reset();
  });
  