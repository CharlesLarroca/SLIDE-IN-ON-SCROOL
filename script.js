const sliderImages = document.querySelectorAll('.slide-in')

function debounce(func, wait =20, immediate = true){
  let timeout
  return function(){
    let context = this, args = arguments
    let later = function(){
      timeout = null
      if(!immediate) func.apply(context, args)
    }
  let callNow = immediate && !timeout
  clearTimeout(timeout)
  timeout = setTimeout(later, wait)
  if (callNow) func.apply(context, args)
  }
}
function checkSlide (e) {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2 //calculará se o caminho percorrido com o scroll é no meio de onde a imagem deveria aparecer
    const imageBotton = sliderImage.offsetTop + sliderImage.height //caminho até o final da imagem na pagina
    const isHalfShown = slideInAt > sliderImage.offsetTop //valida se caminho percorrido é maior que local onde inicia a imagem na pagina
    const isNotScrolledPast = window.scrollY < imageBotton //valida se caminho percorrido é menor que local onde acaba a imagem na pagina

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))