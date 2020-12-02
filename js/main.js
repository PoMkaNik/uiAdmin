jQuery(function () {
  $('.ui.sidebar')
    .sidebar({
      dimPage: true,
      transition: 'overlay',
      mobileTransition: 'overlay',
    })
    .sidebar('attach events', '.sidebar-menu-toggler');

  $('.ui.dropdown').dropdown();
});
