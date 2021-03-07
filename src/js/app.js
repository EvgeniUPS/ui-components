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
  $('.header__menu ul li a').click(function (e) {
    e.preventDefault()
    $('.icon-menu').toggleClass('_active')
    $('.menu__body').toggleClass('show')
  })
  /* *********** */
  /* menu-burger */

  /* scroll-to-section */
  /* ************** */
  $('a.scrollto').click(function () {
    var elementClick = $(this).attr('href')
    var destination = $(elementClick).offset().top
    jQuery('html:not(:animated),body:not(:animated)').animate(
      {
        scrollTop: destination,
      },
      800
    )
    return false
  })
  /* ************** */
  /* scroll-to-section */

  /* popup */
  /* ***** */
  $('.modal-btn').click(function (e) {
    e.preventDefault()
    var destinationPopup = $(this).attr('href')
    $(destinationPopup).addClass('show')

    var closeBtn = destinationPopup + '  .popup__close'
    var overlayBtn = destinationPopup + '  .popup__overlay'
    $(closeBtn).click(function (e) {
      e.preventDefault()
      $(destinationPopup).removeClass('show')
    })
    $(overlayBtn).click(function (e) {
      e.preventDefault()
      $(destinationPopup).removeClass('show')
    })
  })
  /* ***** */
  /* popup */
})
