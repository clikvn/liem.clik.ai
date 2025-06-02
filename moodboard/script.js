console.log('Script started');

const divider = document.querySelector('.divider');
const content = document.querySelector('.content');

console.log('Divider element:', divider);
console.log('Content element:', content);

let isExpanded = false;

function toggleBottomsheet() {
    console.log('Toggle clicked');
    isExpanded = !isExpanded;
    if (isExpanded) {
        content.classList.add('expanded');
        console.log('Added expanded class');
    } else {
        content.classList.remove('expanded');
        console.log('Removed expanded class');
    }
}

if (divider) {
    divider.addEventListener('click', toggleBottomsheet);
    console.log('Click listener added');
} else {
    console.error('Divider element not found');
} 