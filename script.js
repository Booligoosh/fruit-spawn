// Credit for the original script goes to https://www.reddit.com/r/javascript/comments/7f9812/i_am_the_best_webdev/


var fruitOptions = ['🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🥝', '🍅', '🥑', '🍆', '🥔', '🌽', '🌮'];
var singleFruit = fruitOptions[Math.ceil(Math.random() * fruitOptions.length - 1)];

var multi = false;

function createNewFruit() {
    setTimeout(createNewFruit, Math.random() * 10);
    let el = document.createElement(`div`);
    el.innerHTML = multi ? fruitOptions[Math.ceil(Math.random() * fruitOptions.length - 1)] : singleFruit;
    el.style.position = `absolute`;
    el.style.zIndex = 999999;
    el.style.fontSize = (((Math.random() * 48) | 0) + 16) + `px`;
    el.style.left = ((Math.random() * innerWidth) | 0) + `px`;
    el.style.top = ((Math.random() * (innerHeight + pageYOffset)) | 0) + `px`;
    //el.style.opacity = `.85`;
    el.style.pointerEvents = `none`;
    document.body.appendChild(el);
}

(function () {

    // Button wrapper
    var button_wrapper = document.createElement('div');
    button_wrapper.id = 'button_wrapper';
    button_wrapper.style.position = 'fixed';
    button_wrapper.style.bottom = '30px';
    button_wrapper.style.right = '30px';
    button_wrapper.style.zIndex = '1000000';
    button_wrapper.style.cursor = 'pointer';
    button_wrapper.style.backgroundColor = 'dodgerblue';
    button_wrapper.style.padding = '1rem';
    button_wrapper.style.borderRadius = '1rem';
    button_wrapper.style.color = 'white';
    button_wrapper.style.fontFamily = 'sans-serif';
    button_wrapper.style.fontSize = '16px';
    button_wrapper.style["-webkit-font-smoothing"] = 'antialiased';
    //button_wrapper.style.display = 'none';

    // Random button
    var random_button = document.createElement('div');
    random_button.innerHTML = 'Random';
    random_button.onclick = function () {
        multi = false;
        singleFruit = fruitOptions[Math.ceil(Math.random() * fruitOptions.length - 1)];
        this.innerHTML = 'Switch fruit';
        createNewFruit();
    }
    random_button.style.display = 'inline';
    random_button.style.paddingRight = '.5rem';
    random_button.style.borderRight = '1px solid white';

    button_wrapper.appendChild(random_button);

    // Salad button
    var salad_button = document.createElement('div');
    salad_button.innerHTML = 'Fruit Salad!';
    salad_button.onclick = function () {
        multi = true;
        random_button.innerHTML = 'Random';
        createNewFruit()
    };
    salad_button.style.display = 'inline';
    salad_button.style.paddingLeft = '.5rem';

    button_wrapper.appendChild(salad_button);

    console.log(button_wrapper);

    document.body.appendChild(button_wrapper);
})();