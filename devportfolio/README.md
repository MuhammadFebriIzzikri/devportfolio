# DevPortfolio — Python + JavaScript

Portofolio developer dengan tema gelap, dibuat menggunakan HTML, CSS, JavaScript, Python, dan Flask.

## Fitur
- Desain responsif untuk desktop dan ponsel
- Navigasi ponsel
- Animasi masuk yang ringan
- Daftar proyek dimuat dari API `/api/projects`
- Endpoint pemeriksaan server `/health`

## Menjalankan di Windows

1. Instal Python 3 dan VS Code.
2. Buka folder ini di VS Code.
3. Buka terminal di VS Code.
4. Buat virtual environment:

   ```powershell
   python -m venv .venv
   ```

5. Aktifkan virtual environment (PowerShell):

   ```powershell
   .venv\Scripts\Activate.ps1
   ```

   Jika PowerShell memblokir aktivasi, kamu dapat memilih Command Prompt di terminal VS Code dan menjalankan `.venv\Scripts\activate.bat`.

6. Instal dependensi:

   ```powershell
   python -m pip install -r requirements.txt
   ```

7. Jalankan server:

   ```powershell
   python app.py
   ```

8. Buka `http://127.0.0.1:5000` di browser.

## Menguji
- Buka `http://127.0.0.1:5000/` untuk melihat portofolio.
- Buka `http://127.0.0.1:5000/api/projects` untuk melihat data proyek dalam JSON.
- Buka `http://127.0.0.1:5000/health` untuk memeriksa server.
- Uji navigasi pada layar ponsel atau dengan memperkecil jendela browser.

## Personalisasi sebelum dipublikasikan
- Ubah nama, judul, deskripsi, dan tautan email di `templates/index.html`.
- Ganti data contoh pada daftar `PROJECTS` di `app.py` dengan proyek yang benar-benar sudah kamu buat.
- Ganti tautan GitHub contoh dengan URL repository milikmu.
- Jangan menulis kemampuan atau pengalaman yang belum kamu miliki.

## Deploy backend Flask ke Render
1. Unggah repository ini ke GitHub.
2. Di Render, pilih **New → Web Service**, lalu hubungkan repository.
3. Build command: `pip install -r requirements.txt`
4. Start command: `gunicorn app:app`
5. Pilih paket yang sesuai dan deploy. Layanan gratis, jika tersedia untuk akun/region kamu, dapat tidur setelah tidak aktif.

GitHub Pages hanya melayani situs statis dan tidak menjalankan Python. Karena proyek ini menggunakan Flask, deploy sebagai Web Service (misalnya Render) agar halaman dan API sama-sama berfungsi.
