function toggleTheme() {
    let root = document.documentElement;
    let currentTheme = root.style.getPropertyValue('--bg-color') === '#ECF2FF' ? 'light' : 'dark';

    if (currentTheme === 'light') {
        root.style.setProperty('--bg-color', '#2B283A');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#D5D4D8');
        document.getElementById('eggEmoji').classList.remove('excited');
    } else {
        root.style.setProperty('--bg-color', '#ECF2FF');
        root.style.setProperty('--text-color', '#2B283A');
        root.style.setProperty('--title-color', '#4A4E74');
        document.getElementById('eggEmoji').classList.add('excited');
    }
}
