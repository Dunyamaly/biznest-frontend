// sale-cards.js

document.addEventListener('DOMContentLoaded', () => {
  const saleCards = document.querySelector('.sale-cards')
  const scrollBtn = document.querySelector('.right-ox i')
  const seeAllCard = saleCards ? saleCards.querySelector('.see-all-card') : null

  if (saleCards && scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      saleCards.scrollBy({ left: 200, behavior: 'smooth' })
    })
  }
})
