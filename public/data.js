

var categories =  [salads, firstCources, pasta, garniry, bread, meatDishes, mangal, own, varenniki, bliny, deserts, coffee, icecoffee,
    tea, extra, juice, cold_drink, /*icecream,
    extra_to_icecream, */ sauce, shisha
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
    if (numberOfCategory > categories.length - 1)
        return;
    var category = categories[numberOfCategory];
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


loadInfoOfCategory('user');

function showadress(){
    var a = document.getElementsByTagName("footer")[0];
    a.style.display = "block";
}


function hideadress(){
    var a = document.getElementsByTagName("footer")[0];
    a.style.display = "none";
}