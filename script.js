async function getData() {
    try {
     const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
     const data = await response.json();
     loadData(data); 
        
    } catch (error) {
        throw console.log("FAILED",error);
    }
   
 }
 getData();

//header part 
var div_1 = document.createElement('div')
div_1.setAttribute('class','no-gutters')
// Adding a paragraph to it
var paragraph = document.createElement("P");
var text = document.createTextNode("Thara Beauty Products");
paragraph.style.fontWeight="bold";
paragraph.style.fontSize="20px";
paragraph.style.marginTop = "50px";

paragraph.appendChild(text);
div_1.appendChild(paragraph);
document.body.append(div_1);

// Styling it
div_1.style.textAlign = "center";
div_1.style.marginLeft = "200px";
div_1.style.marginRight = "200px";

//Adding break element

let titlebreak=document.createElement('br');
div_1.appendChild(titlebreak);


// Adding a paragraph to it

var paragraph2 = document.createElement("P");
var text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nihil, nam perferendis rem quos asperiores? Est adipisci blanditiis, placeat veritatis doloribus quasi cumque repudiandae laudantium!");
paragraph2.appendChild(text);
div_1.appendChild(paragraph2);

//Adding break element

let textbreak=document.createElement('br');
div_1.appendChild(textbreak);

//Adding image

const img=document.createElement("img");
img.src="Makeup image.png";
img.id="imgID";

//Adding style to the image
img.style.textAlign = "center";
img.style.marginLeft = "100px";
img.style.marginRight = "100px";
img.style.marginTop = "50px";

document.body.appendChild(img);

//Adding break element

let imgbreak=document.createElement('br');
div_1.appendChild(imgbreak);

let imgbreak2=document.createElement('br');
div_1.appendChild(imgbreak2);

// Display MakeupAPI data
var divbd1 = document.createElement('div')
divbd1.setAttribute("class","container-fluid px-4 no-gutters")
divbd1.setAttribute("id","container2")
var divbd2 = document.createElement('div')
divbd2.setAttribute("class","card text-white bg-dark mb-3")
divbd2.setAttribute('id','makeup_dt')
divbd1.append(divbd2)
document.body.append(divbd1)


function loadData(data){

  //looping all the data into the html elements
    for(i=10;i<100;i++){        // this MAKEUP API was not good it takes more time to load and this api have  more than 950 data, first 1 to 10 some images are not available so i took 10 to 100 array data only.it will get data array of 10 to 100 only, i have used this for reduce rendering time.
        var row = document.createElement('div');
        row.setAttribute('class','row pt-4')
        var col = document.createElement('div')
        col.setAttribute('class','col-md-4')
         var image = document.createElement('img');
        image.setAttribute('class','card-img-top pl-3')
        image.setAttribute('id','mkp_img')
        var col_2 = document.createElement('div')
        col_2.setAttribute('class','col-md-8') 
        var card_body= document.createElement('div')
        var name = document.createElement('h1')
        var brand = document.createElement('h2');
        var price = document.createElement('h3');
        var des  = document.createElement('p');

        image.src= data[i].image_link;
        image.alt="Not available"; 
        name.innerText = (data[i].name);
        brand.innerText = ('Brand : ' + data[i].brand);
        price.innerText = ('Price : ' + data[i].price_sign +" " + data[i].price);
        des.innerHTML = (data[i].description);
        row.append(col);
        col.append(image);
        row.append(col_2);
        col_2.append(card_body);
        card_body.append(name,brand,price,des);
         document.getElementById("makeup_dt").append(row);
    }
}

//Adding drop down list for products

var divElement2 = document.createElement("Div");
divElement2.id = "divID2";
divElement2.class="container";

document.body.appendChild(divElement2);

// Styling it
divElement2.style.textAlign = "Left";
divElement2.style.marginLeft = "100px";
divElement2.style.marginRight = "100px";

var paragraph3 = document.createElement("P");
var text = document.createTextNode("Products");
paragraph3.appendChild(text);
divElement2.appendChild(paragraph3);

(function(){

    // All items we'd like to add
    var navItems = [
        {href: 'http://google.com', text: 'Bronzer'},
        {href: 'http://bing.com', text: 'Eyeliner'},
        {href: 'http://stackoverflow.com', text: 'Foundation'},
        {href: 'http://stackoverflow.com', text: 'Lipstick'},
        {href: 'http://stackoverflow.com', text: 'Mascara'}
    ];

    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"), 
        navItem, navLink;

    navElem.appendChild(navList);

    // Cycle over each nav item
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");

        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;

        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Set first list item as current
    navList.children[0].className = "current";

    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    }

}());


//Adding break element

let listbreak=document.createElement('br');
myParent.appendChild(listbreak);

























