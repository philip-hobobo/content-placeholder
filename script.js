const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="">'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/40.jpg" alt="">'
  name.innerHTML = 'Jane Doe'
  date.innerHTML = 'April 2nd, 2021'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
