$(function () {
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
    const target = $(this).attr('href'),
      bl_top = $(target).offset().top;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  })
});
