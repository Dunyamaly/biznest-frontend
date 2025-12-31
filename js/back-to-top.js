// back-to-top.js

document.addEventListener('DOMContentLoaded', () => {
  const homePageGo = document.getElementById('homePageGo')
  const minScroll = 0
  const duration = 200

  if (!homePageGo) return

  function easeOutQuad(t) {
    return t * (2 - t)
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > minScroll) {
      homePageGo.style.display = 'flex'
    } else {
      homePageGo.style.display = 'none'
    }
  })

  homePageGo.addEventListener('click', () => {
    const start = window.scrollY
    const end = minScroll
    const distance = start - end
    const startTime = performance.now()

    function step(currentTime) {
      let t = Math.min((currentTime - startTime) / duration, 1)
      t = easeOutQuad(t)
      window.scrollTo(0, start - distance * t)
      if (t < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  })
})
