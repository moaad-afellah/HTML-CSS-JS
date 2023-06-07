let control_button = document.querySelector('#left-panel .title .control_button');
let action = document.querySelectorAll('#left-panel .list  .action h2 ')
let title_panel = document.querySelector('#left-panel .title h1')
let panel = document.querySelector('#list-action')





let type_panel = open
control_button.addEventListener('click', () => {
    if (type_panel == open) {
        title_panel.style.display = 'none'
        panel.style.width = '5' + 'vw'
        action.forEach(element => {
            element.style.display = 'none'
        });
        type_panel = close
    }
    else if (type_panel == close) {
        title_panel.style.display = ''
        panel.style.width = 'auto'
        action.forEach(element => {
            element.style.display = ''
        });
        type_panel = open
    }

})





