jQuery(document).ready(function () {
  /* scroll to top */
  /* ************* */
  var btn = $('.scrolltotop-btn')
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show')
    } else {
      btn.removeClass('show')
    }
  })
  btn.on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, '300')
  })
  /* ************* */
  /* scroll to top */

  /* menu-burger */
  /* *********** */

  $('.menu__icon').click(function () {
    $('.icon-menu').toggleClass('_active')
    $('.menu__body').toggleClass('show')
  })
  /* *********** */
  /* menu-burger */
})
