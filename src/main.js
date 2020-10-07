import menuMarkup from './js/menu';
import refs from './js/refs';
import onThemeSwitchClick from './js/theme';

refs.menuList.innerHTML = menuMarkup;
refs.themeSwitch.addEventListener('change', onThemeSwitchClick);
