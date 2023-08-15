/**
 * automically sets the color theme of the website to be dark or light 
 */
function set_sys_theme() {

  var r = document.querySelector(':root');

  const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkThemeMq.matches) {
    r.style.setProperty('--white', 'black');
    r.style.setProperty('--black', 'white');

    const cyan_text = document.querySelectorAll('info_output');

    cyan_text.forEach(text => {
      text.style.color = 'cyan';
    });
  }

  else {
    r.style.setProperty('--white', 'white');
    r.style.setProperty('--black', 'black');
  }
}

set_sys_theme();