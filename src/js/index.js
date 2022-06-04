const search = document.querySelector('.searsh')
const close = document.querySelector('.close')

const toggleSearchActive = () =>
{
  document.body.classList.toggle('search-active')
}
search.addEventListener('click', toggleSearchActive)
close.addEventListener('click', toggleSearchActive)