// Get Element
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabItems = $$('.tab-item');
var tabPanes = $$('.tab-pane');

const line = $('.line');
line.style.left = $('.tab-item.active').offsetLeft + 'px';
line.style.width = $('.tab-item.active').offsetWidth + 'px';



tabItems.forEach(function(tabItem,index) {
    var pane = tabPanes[index];

    tabItem.onclick = function() {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    }
});
