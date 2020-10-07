import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const STORAGE_KEY = 'theme';

changeTheme(localStorage.getItem(STORAGE_KEY));

function changeTheme(theme) {
  if (theme === Theme.DARK) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    refs.themeSwitch.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
}

function onThemeSwitchClick() {
  localStorage.setItem(
    STORAGE_KEY,
    refs.themeSwitch.checked ? Theme.DARK : Theme.LIGHT,
  );
  changeTheme(localStorage.getItem(STORAGE_KEY));
}
export default onThemeSwitchClick;