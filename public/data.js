

var categories =  [salads, firstCources, pasta, garniry, bread, meatDishes, pizza, mangal, own, varenniki, bliny, frozen, deserts, coffee, icecoffee,
    tea, extra, juice, cold_drink, /*icecream,
    extra_to_icecream, */ sauce, shisha
];
var categoriesen =  [saladsen, firstCourcesen, pastaen, garniryen, breaden, meatDishesen, pizzaen, mangalen, ownen, varennikien, blinyen, frozenen, desertsen, coffeeen, icecoffeeen,
    teaen, extraen, juiceen, cold_drinken, /*icecreamen,
    extra_to_icecreamen, */ sauceen, shishaen
];

var numberOfCategory = 0;

function nextCategory(user){
    if (numberOfCategory < categories.length){
    numberOfCategory++;
    loadInfoOfCategory(user);
    }
}
function prevCategory(user){
    if (numberOfCategory > 0){
    numberOfCategory--;
    loadInfoOfCategory(user);
    }
}


function loadInfoOfCategory(user){
    let c= categories;
    if (select.value == 'en')
    {
        c = categoriesen;
        document.getElementById('titlemenu').textContent = 'menu';
        document.getElementById('address').textContent = 'Production address foodsUa: Roza mall';
        document.getElementById('open').textContent = 'Open from 1.30 p.m. to 11.30 p.m.';
        document.getElementById('footeraddress').textContent = 'Address';
    }
    if (numberOfCategory >  c.length - 1)
        return;
    var category = c[numberOfCategory];
    fetch(`${category}.txt`).then(r => r.text()).then(d => {
    const menu = d.split('\n');
    let ulItems = document.getElementById('ulItems');
    ulItems.innerHTML = "";

    var itemName = document.getElementById('itemName');
    itemName.innerText = category;
    menu.forEach(item=>{

    const menuItem = document.createElement('li');
        menuItem.textContent = item;
        menuItem.classList.add('option');
        ulItems.appendChild(menuItem);
  
        const price = document.createElement('div');
        price.classList.add('price');
         fetch(`${item}.txt`).then(res => res.text()).then(data => {
        const info = data.split('\n');
        console.log(data);
        if (info[0].length > 3)
        {
        var sostav = document.createElement('div');
     
        sostav.classList.add('sostav');
        sostav.innerText = info[0];
        menuItem.appendChild(sostav);
        }
        else{
            var sostav = "";
        }
   
        price.innerText = info[1];

        menuItem.appendChild(price);
         });
        
    })

    });
    var img = document.getElementById('imgFood');
    img.src = `img/${images[numberOfCategory]}`;
    var img2 = document.getElementById('imgFood2');
    img2.src = `imgtop/${images[numberOfCategory]}`;

}



function showadress(){
    var a = document.getElementsByTagName("footer")[0];
    a.style.display = "block";
}


function hideadress(){
    var a = document.getElementsByTagName("footer")[0];
    a.style.display = "none";
}

var select = document.querySelector('.change-lang');
const allLang = ['en','ru'];
select.addEventListener('change',changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href =window.location.pathname + '#' + lang;
    location.reload();
    
}
function changeLanguage(){
    console.log('hgy');
        let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload;
    }
        else{
        select.value = hash;
 }
}

changeLanguage();

loadInfoOfCategory('user');