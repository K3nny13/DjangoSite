const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

const slugify = (value) => {
    return value.toString().toLowerCase().trim()
        .replace(/&/g, '-and-') // replaces '&' with '-and-'
        .replace(/[\s\W-]+/g, '-') // replaces spaces, non word chars and dashes with a single dash
}

titleInput.addEventListener('keyup', (event) => {
    slugInput.setAttribute('value', slugify(titleInput.value))
});