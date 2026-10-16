from flask import Flask, jsonify, render_template

app = Flask(__name__)

# Contoh data proyek. Ganti dengan proyek dan tautan milikmu sendiri.
PROJECTS = [
    {
        "title": "Smart Inventory",
        "category": "Web App",
        "description": "Aplikasi latihan untuk mencatat barang, memantau stok, dan melihat barang yang hampir habis.",
        "tech": ["Python", "Flask", "JavaScript"],
        "demo": "#projects",
        "code": "https://github.com/",
        "icon": "▦",
        "accent": "blue"
    },
    {
        "title": "Personal Finance Tracker",
        "category": "Dashboard",
        "description": "Konsep aplikasi pencatat pemasukan dan pengeluaran dengan ringkasan keuangan.",
        "tech": ["JavaScript", "CSS", "API"],
        "demo": "#projects",
        "code": "https://github.com/",
        "icon": "↗",
        "accent": "purple"
    },
    {
        "title": "Task Manager",
        "category": "Productivity",
        "description": "Aplikasi daftar tugas untuk membantu pengguna mengatur pekerjaan dan progresnya.",
        "tech": ["HTML", "CSS", "JavaScript"],
        "demo": "#projects",
        "code": "https://github.com/",
        "icon": "✓",
        "accent": "green"
    }
]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/projects")
def get_projects():
    """API sederhana yang mengirim data proyek dalam format JSON."""
    return jsonify(PROJECTS)

@app.route("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    # Hanya untuk development lokal. Untuk produksi gunakan Gunicorn.
    app.run(debug=True)
