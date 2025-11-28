<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>C. Luxury Ethnic — Akar Bahar Kepulauan Kei</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    :root{
      --deep-brown:#4A3526;
      --cream:#F4EDE2;
      --soft-gold:#C8A97E;
      --navy:#0F1D2B;
      --glass: rgba(255,255,255,0.6);
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;color:var(--navy);background:var(--cream);}

    /* HERO */
    .hero{min-height:88vh;background-image:linear-gradient(rgba(10,18,28,0.42), rgba(10,18,28,0.18)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80');background-size:cover;background-position:center;background-attachment:fixed;display:flex;align-items:center}
    .container{width:100%;max-width:1200px;margin:0 auto;padding:40px}
    .hero-grid{display:grid;grid-template-columns:1fr 420px;gap:36px;align-items:center}
    .hero-title{color:var(--cream);font-family:'Playfair Display',serif;font-size:44px;line-height:1.05;margin:0 0 12px}
    .hero-sub{color:var(--cream);opacity:0.95;margin:0 0 20px;font-size:16px}

    .cta-row{display:flex;gap:14px}
    .btn{display:inline-block;padding:12px 18px;border-radius:10px;text-decoration:none;font-weight:600}
    .btn-primary{background:var(--soft-gold);color:var(--navy);box-shadow:0 8px 24px rgba(200,169,126,0.16)}
    .btn-outline{background:transparent;border:1px solid rgba(255,255,255,0.18);color:var(--cream)}

    /* card */
    .glass-card{background:linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));backdrop-filter: blur(6px);padding:22px;border-radius:14px;border:1px solid rgba(255,255,255,0.06)}

    /* motif bar */
    .motif{height:92px;background:linear-gradient(90deg, rgba(74,53,38,0.06), rgba(200,169,126,0.03));display:flex;align-items:center;justify-content:center}
    .motif svg{width:86%;opacity:0.12}

    /* sections */
    section{padding:64px 0}
    .section-title{font-family:'Playfair Display',serif;font-size:28px;color:var(--deep-brown);margin:0 0 18px}
    .lead{color:rgba(45,45,45,0.8);max-width:780px}

    /* catalog grid */
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:22px}
    .product{background:linear-gradient(180deg,white, #fffaf6);border-radius:14px;padding:16px;border:1px solid rgba(74,53,38,0.06);box-shadow:0 8px 20px rgba(16,24,32,0.04);display:flex;flex-direction:column}
    .product img{width:100%;height:260px;object-fit:cover;border-radius:10px}
    .product h4{margin:12px 0 6px;font-size:18px;color:var(--deep-brown)}
    .price{font-weight:700;color:var(--deep-brown)}
    .meta{font-size:13px;color:rgba(45,45,45,0.6);margin-top:8px}

    /* features */
    .features{display:flex;gap:20px;flex-wrap:wrap}
    .feature{flex:1;min-width:220px;background:linear-gradient(180deg, #fff, #fffefc);padding:18px;border-radius:12px;border:1px solid rgba(74,53,38,0.04)}

    /* footer */
    footer{padding:32px 0;text-align:center;color:rgba(45,45,45,0.7)}

    /* small screens */
    @media (max-width:880px){.hero-grid{grid-template-columns:1fr}.hero{padding-bottom:40px}.hero-title{font-size:34px}.product img{height:220px}}

    /* ANIMATIONS */
    .reveal{opacity:0;transform:translateY(18px);animation:fadeUp .9s forwards ease-out}
    .delay-1{animation-delay:.15s}.delay-2{animation-delay:.28s}.delay-3{animation-delay:.42s}.delay-4{animation-delay:.58s}
    @keyframes fadeUp{to{opacity:1;transform:none}}

    /* decorative islands */
    .islands{position:relative;height:120px;margin-top:-40px}
    .islands svg{display:block;width:100%;height:100%}

    /* form */
    .order-form{background:#fff;padding:18px;border-radius:12px;border:1px solid rgba(74,53,38,0.06)}
    .form-row{display:flex;gap:8px}
    .form-row .field{flex:1}
    input,textarea,select{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(16,24,32,0.06);font-size:14px}
    label{font-size:13px;color:var(--deep-brown);display:block;margin-bottom:6px;font-weight:600}

    /* gold accent underline */
    .accent{height:4px;background:linear-gradient(90deg,var(--soft-gold), rgba(200,169,126,0.6));border-radius:6px;width:110px;margin:14px 0}
  </style>
</head>
<body>
  <!-- HERO -->
  <header class="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="reveal delay-1">
          <h1 class="hero-title">Ocean‑Born Luxury — Akar Bahar from Kepulauan Kei</h1>
          <p class="hero-sub">Handcrafted ethnic jewelry. Ethically sourced. Limited pieces. Each item tells the story of the sea and the people who tend it.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="mailto:faqihumarahmadgazali@gmail.com?subject=Pemesanan%20Akar%20Bahar&body=Halo%2C%20saya%20ingin%20memesan%20produk%20Akar%20Bahar.%0A%0ANama%3A%20%0AProduk%3A%20%0AJumlah%3A%20%0AUkuran%3A%20%0AAlamat%3A%20%0ACatatan%3A%20">Order via Email</a>
            <a class="btn btn-outline" href="#catalog">View Collection</a>
          </div>
        </div>

        <aside class="glass-card reveal delay-2">
          <h3 style="margin:0 0 8px;color:var(--cream);font-family:'Playfair Display';font-size:20px">Limited Offer</h3>
          <div style="margin-bottom:6px;color:var(--cream);font-weight:700">Promo — Rp 100.000</div>
          <p style="margin:0 0 12px;color:rgba(255,255,255,0.92);font-size:13px">Get a premium Akar Bahar piece today — includes sticker & raw sample.</p>

          <div style="display:flex;gap:8px;align-items:center">
            <div style="flex:1">
              <div style="font-size:12px;color:rgba(255,255,255,0.9);">Starting at</div>
              <div style="font-size:18px;font-weight:700;color:var(--navy);background:var(--cream);display:inline-block;padding:6px 10px;border-radius:8px;margin-top:6px">IDR 55.000</div>
            </div>
            <div style="width:92px;text-align:right">
              <a class="btn btn-primary" href="mailto:faqihumarahmadgazali@gmail.com?subject=Pemesanan%20Akar%20Bahar&body=Halo%2C%20saya%20ingin%20memesan%20produk%20Akar%20Bahar.%0A%0ANama%3A%20%0AProduk%3A%20%0AJumlah%3A%20%0AUkuran%3A%20%0AAlamat%3A%20%0ACatatan%3A%20">Order</a>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div class="islands" aria-hidden="true">
      <!-- subtle island/rock silhouette -->
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,40 C180,110 360,0 720,40 C1080,80 1260,20 1440,60 L1440 120 L0 120 Z" fill="rgba(15,29,43,0.06)" />
      </svg>
    </div>
  </header>

  <!-- MOTIF BAR -->
  <div class="motif" role="presentation">
    <!-- simple Papua/Maluku vector wave motif (decorative) -->
    <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="6"><path d="M60 70c120-60 200 20 360 30s260-40 420-20 220 50 320 10"/></g></svg>
  </div>

  <!-- ABOUT -->
  <main class="container">
    <section id="about" class="reveal delay-3">
      <h2 class="section-title">Crafted by Nature, Refined by Hand</h2>
      <div class="accent"></div>
      <p class="lead">From the sheltered coves of Kepulauan Kei, Akar Bahar emerges — dark, textured, and charged by the sea. C. Luxury Ethnic partners with local artisans to transform raw material into wearable heritage. Every purchase supports UMKM in the islands.</p>
    </section>

    <!-- CATALOG -->
    <section id="catalog" class="reveal delay-4">
      <h2 class="section-title">Featured Collection</h2>
      <div class="grid" style="margin-top:18px">

        <article class="product">
          <img src="GELANG AKAR BAHAR AKAR BATU.jfif" alt="Gelang Akar Bahar" />
          <h4>Gelang Akar Bahar — Natural Form</h4>
          <div class="price">Promo: Rp 100.000 • Normal: Rp 250.000</div>
          <div class="meta">Size S: Rp 55.000 • M: Rp 88.000 • L: Rp 99.000</div>
        </article>

        <article class="product">
          <img src="White Ash (Stained Black) Ring, Size S 1_2.jfif" alt="Cincin Akar Bahar" />
          <h4>Cincin Akar Bahar — Polished Black</h4>
          <div class="price">Promo: Rp 100.000 • Normal: Rp 250.000</div>
          <div class="meta">Size S: Rp 55.000 • M: Rp 88.000 • L: Rp 99.000</div>
        </article>

      </div>

      <div style="margin-top:26px;display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <a class="btn btn-primary" href="mailto:faqihumarahmadgazali@gmail.com?subject=Pemesanan%20Akar%20Bahar&body=Halo%2C%20saya%20ingin%20memesan%20produk%20Akar%20Bahar.%0A%0ANama%3A%20%0AProduk%3A%20%0AJumlah%3A%20%0AUkuran%3A%20%0AAlamat%3A%20%0ACatatan%3A%20">Order All</a>
        <a class="btn" href="#contact">Contact & Shipping</a>
      </div>
    </section>

    <!-- FEATURES / MISSION -->
    <section class="reveal delay-1">
      <h2 class="section-title">Why Choose C. Luxury Ethnic</h2>
      <div class="features" style="margin-top:12px">
        <div class="feature">
          <h4 style="margin:0 0 8px">Authentic & Limited</h4>
          <p style="margin:0;color:rgba(45,45,45,0.75)">Each piece is unique — hand-selected and finished by local artisans in Kei.</p>
        </div>
        <div class="feature">
          <h4 style="margin:0 0 8px">Ethical Sourcing</h4>
          <p style="margin:0;color:rgba(45,45,45,0.75)">We support sustainable collection and give direct income to island UMKM.</p>
        </div>
        <div class="feature">
          <h4 style="margin:0 0 8px">Premium Packaging</h4>
          <p style="margin:0;color:rgba(45,45,45,0.75)">Beautiful, secure packaging with complimentary sticker & raw sample.</p>
        </div>
      </div>
    </section>

    <!-- ORDER / CONTACT -->
    <section id="contact" class="reveal delay-2">
      <h2 class="section-title">Order & Contact</h2>
      <p class="lead">Send your order via email. We will respond to confirm stock, shipping, and payment details.</p>

      <div style="display:grid;grid-template-columns:1fr 360px;gap:22px;margin-top:18px">
        <div>
          <form class="order-form" id="orderForm">
            <label for="nama">Nama</label>
            <input id="nama" name="nama" placeholder="Nama lengkap" required />

            <div class="form-row" style="margin-top:10px">
              <div class="field">
                <label for="produk">Produk</label>
                <select id="produk" name="produk">
                  <option>Gelang Akar Bahar — Natural Form</option>
                  <option>Cincin Akar Bahar — Polished Black</option>
                </select>
              </div>
              <div class="field">
                <label for="jumlah">Jumlah</label>
                <input id="jumlah" name="jumlah" type="number" min="1" value="1" />
              </div>
            </div>

            <label for="ukuran" style="margin-top:10px">Ukuran</label>
            <select id="ukuran" name="ukuran">
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>

            <label for="alamat" style="margin-top:10px">Alamat</label>
            <textarea id="alamat" name="alamat" rows="3" placeholder="Alamat pengiriman"></textarea>

            <label for="catatan" style="margin-top:10px">Catatan</label>
            <textarea id="catatan" name="catatan" rows="2" placeholder="Permintaan khusus (opsional)"></textarea>

            <div style="display:flex;gap:10px;margin-top:12px;align-items:center">
              <button type="button" class="btn btn-primary" onclick="sendOrder()">Kirim Pesanan (Email)</button>
              <div style="font-size:13px;color:rgba(45,45,45,0.65)">atau email ke <strong>faqihumarahmadgazali@gmail.com</strong></div>
            </div>

          </form>
        </div>

        <aside class="glass-card">
          <h4 style="margin-top:0;color:var(--deep-brown)">Shipping & Payment</h4>
          <div style="margin-top:8px;font-size:14px;color:rgba(45,45,45,0.8)">
            <ul style="margin:0;padding-left:18px">
              <li>Metode: Transfer Bank, COD (tergantung area)</li>
              <li>Kurir: JNE / J&T / SiCepat / AnterAja</li>
              <li>Biaya kirim menyesuaikan lokasi</li>
            </ul>
          </div>

          <div style="margin-top:18px">
            <h5 style="margin:0 0 8px;color:var(--deep-brown)">What you will receive</h5>
            <p style="margin:0;font-size:14px;color:rgba(45,45,45,0.8)">1x product — safe packaging — bonus sticker & raw Akar Bahar sample</p>
          </div>
        </aside>
      </div>
    </section>

  </main>

  <footer>
    <div class="container">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
        <div style="text-align:left">
          <strong style="color:var(--deep-brown)">C. Luxury Ethnic</strong>
          <div style="font-size:13px;color:rgba(45,45,45,0.65)">Akar Bahar — Kepulauan Kei</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:13px;color:rgba(45,45,45,0.7)">Order: <a href="mailto:faqihumarahmadgazali@gmail.com">faqihumarahmadgazali@gmail.com</a></div>
          <div style="font-size:12px;color:rgba(45,45,45,0.55);margin-top:6px">© 2025 C. Luxury Ethnic — Motif Papua/Maluku</div>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Simple animated reveal on load
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('revealed');});
    });

    // Build and open mailto link from form
    function sendOrder(){
      var nama = encodeURIComponent(document.getElementById('nama').value || '');
      var produk = encodeURIComponent(document.getElementById('produk').value || '');
      var jumlah = encodeURIComponent(document.getElementById('jumlah').value || '1');
      var ukuran = encodeURIComponent(document.getElementById('ukuran').value || '');
      var alamat = encodeURIComponent(document.getElementById('alamat').value || '');
      var catatan = encodeURIComponent(document.getElementById('catatan').value || '');

      var subject = encodeURIComponent('Pemesanan Akar Bahar');
      var body = 'Halo, saya ingin memesan produk Akar Bahar.%0A%0A' +
                 'Nama: ' + nama + '%0A' +
                 'Produk: ' + produk + '%0A' +
                 'Jumlah: ' + jumlah + '%0A' +
                 'Ukuran: ' + ukuran + '%0A' +
                 'Alamat: ' + alamat + '%0A' +
                 'Catatan: ' + catatan + '%0A';

      var mailto = 'mailto:faqihumarahmadgazali@gmail.com?subject=' + subject + '&body=' + body;
      window.location.href = mailto;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        var id = this.getAttribute('href').substring(1);
        var el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });
  </script>
</body>
</html>
