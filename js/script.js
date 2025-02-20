/*======================== toggle icon navbar ========================*/
let menuIcon = document.querySelector("#menu-icon"); // Ikon menu
let navbar = document.querySelector(".navbar"); // Navbar

// Fungsi untuk toggle menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Tambahkan/tanggalkan class 'bx-x' (untuk ikon)
  navbar.classList.toggle("active"); // Tambahkan/tanggalkan class 'active' (untuk menampilkan navbar)
};

// Fungsi untuk scrolling
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a"); 

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; // Jarak scroll dari atas
    let offset = sec.offsetTop - 150; // Hitung offset section
    let height = sec.offsetHeight; // Tinggi section
    let id = sec.getAttribute("id"); // ID section

    if (top >= offset && top < offset + height) {
      // Highlight navbar link aktif
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // Sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Tutup menu saat link di-klik
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*======================== efek animasi scroll ========================*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading, .container", { origin: "top" });
ScrollReveal().reveal(".home-img, .skill-container .portofolio-box, .contact form, .see-more", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img, .content h1, .program-item", { origin: "left" });
ScrollReveal().reveal(".home-content p, .content p, .portfolio-container", { origin: "right" });

document.addEventListener("DOMContentLoaded", function () {
  // Cek apakah URL mengandung #more-portfolio
  if (window.location.hash === "#more-portfolio") {
      document.getElementById("more-portfolio").style.display = "block";
      document.getElementById("portfolio").style.display = "none"; // Sembunyikan yang lama
  }

  // Tambahkan event listener untuk navigasi perubahan hash
  window.addEventListener("hashchange", function () {
      if (window.location.hash === "#more-portfolio") {
          document.getElementById("more-portfolio").style.display = "block";
          document.getElementById("portfolio").style.display = "none";
      } else {
          document.getElementById("more-portfolio").style.display = "none";
          document.getElementById("portfolio").style.display = "block";
      }
  });
});


