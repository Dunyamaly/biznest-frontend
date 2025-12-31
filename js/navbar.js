// navbar.js

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav')
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
  const navSection = document.querySelector('.nav-section')
  const searchInput = document.querySelector('.nav-search input')
  const searchBtn = document.querySelector('.search-btn')

  // ===== Scroll ilə navbar göstər/gizlət =====
  let lastScroll = 0

  if (nav) {
    // səhifə açılan kimi görün
    nav.classList.add('show')

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset

      // yuxarı scroll → göstər
      if (currentScroll < lastScroll) {
        nav.classList.add('show')
      }

      // aşağı scroll → gizlət
      if (currentScroll > lastScroll) {
        nav.classList.remove('show')
      }

      lastScroll = currentScroll
    })
  }

  // ===== Mobil menu toggle =====
  if (mobileMenuToggle && navSection) {
    mobileMenuToggle.addEventListener('click', () => {
      navSection.classList.toggle('active')
    })
  }

  // ===== Search input aktiv/deaktiv =====
  // ===== Search input və düymə funksionallığı =====
  if (searchInput && searchBtn) {
    // Input dəyişdikdə
    searchInput.addEventListener('input', function () {
      if (this.value.trim() !== '') {
        searchBtn.classList.add('active')
      } else {
        searchBtn.classList.remove('active')
      }
    })

    // Düyməyə kliklənəndə
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim()
      if (query) {
        // URL-də listing.html səhifəsinə yönləndir və query əlavə et
        window.location.href = `../html/listing.html?q=${encodeURIComponent(query)}`
      }
    })

    // Əgər URL-də ?q= varsa inputa qoy
    const urlParams = new URLSearchParams(window.location.search)
    const q = urlParams.get('q')
    if (q) {
      searchInput.value = q
      // düyməni aktiv et
      searchBtn.classList.add('active')
    }
  }
})
