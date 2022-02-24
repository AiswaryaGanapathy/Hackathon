

var topmostdiv = document.createElement("div")
document.body.appendChild(topmostdiv)
topmostdiv.backgroundColor = "pink"

// nav bar

var navDiv = document.createElement("div");
navDiv.setAttribute("class", "navi navbar-fixed")
topmostdiv.appendChild(navDiv)

var nav = document.createElement("nav")
nav.setAttribute("class", "navi navbar navbar-expand-lg navbar-light")
nav.backgroundColor = "pink"
navDiv.appendChild(nav)

var contf = document.createElement("div");
contf.className = "container-fluid"
nav.appendChild(contf)

nav.style.padding = "2%"
var anchortag = document.createElement("a")
anchortag.setAttribute("class", "navbar-brand")
contf.appendChild(anchortag)




var logo = document.createElement("button")
logo.setAttribute("class", "navbar-toggler")
logo.setAttribute("data-toggle", "collapse")
logo.setAttribute("data-target", "#navbarSupportedContent")
logo.setAttribute("aria-controls", "navbarSupportedContent")
logo.setAttribute("aria-expanded", "false")
logo.setAttribute("aria-label", "Toggle navigation")
logo.type = "button"
contf.appendChild(logo);

var span = document.createElement("span")
span.setAttribute("class", "navbar-toggler-icon")
logo.appendChild(span)


var navDiv2 = document.createElement("div");
navDiv2.setAttribute("class", "collapse navbar-collapse")
navDiv2.setAttribute("id", "navbarSupportedContent")
contf.appendChild(navDiv2)


var ul1 = document.createElement("ul");
ul1.setAttribute("class", "navbar-nav ml-auto");
navDiv2.appendChild(ul1)

var li1 = document.createElement("li")
li1.setAttribute("class", "nav-item active")
ul1.appendChild(li1)

var tab1 = document.createElement("a");
tab1.setAttribute("id", "shop")
tab1.setAttribute("class", "nav-link")
tab1.href = ""
tab1.innerText = "Cart"
ul1.appendChild(tab1)

var li1 = document.createElement("li")
li1.setAttribute("class", "nav-item active")
ul1.appendChild(li1)

var tab1 = document.createElement("a");
tab1.setAttribute("id", "shop")
tab1.setAttribute("class", "nav-link")
tab1.href = ""
tab1.innerText = "My Account"
ul1.appendChild(tab1)


var li1 = document.createElement("li")
li1.setAttribute("class", "nav-item active")
ul1.appendChild(li1)

var tab1 = document.createElement("a");
tab1.setAttribute("id", "shop")
tab1.setAttribute("class", "nav-link")

tab1.innerText = "Styles"
ul1.appendChild(tab1)





//top-div

var div = document.createElement("div");
div.style.display = "flex"
div.setAttribute("class", "container-fluid my-2 my-lg-0");
div.style.padding = "2%"
div.style.paddingTop = "0px";
div.style.borderBottom = "20%"
div.style.display = "flex"
navDiv.appendChild(div)


//heading

var heading = document.createElement("a");
heading.style.fontWeight = "thin"
heading.style.color = "black"
heading.textAlign = "center"
heading.style.marginLeft = "500px"
heading.style.textDecoration = "none"
heading.setAttribute("id", "heading");
heading.innerText = "Makeup API";
heading.style.borderRadius = "5px"
heading.style.fontFamily = "'Bitter', serif";
heading.style.fontSize = "50px"
heading.setAttribute("href", "")
heading.setAttribute("class", "heading");


document.body.appendChild(heading);




//form

var form = document.createElement("div");
document.body.appendChild(form);


form.setAttribute("class", "form-inline ml-auto")

var textField = document.createElement("input")
textField.setAttribute("class", "form-control mr-sm-2");
textField.setAttribute("id", "myInput");

textField.placeholder = "Search for Products"
textField.style.borderRadius = "10px"
textField.style.height = "50px"
textField.style.marginRight = "30px"
textField.style.marginLeft = "1000px"
textField.type = "search"
form.appendChild(textField);

var getButton = document.createElement("button")
getButton.setAttribute("class", "btn btn-outline-info my-2 my-sm-0")
getButton.style.borderRadius = "10px"
getButton.style.height = "50px"
getButton.setAttribute("onclick", "handleChange2()")
getButton.innerText = "Search"
form.appendChild(getButton)



var jsonDiv = document.createElement("div")
document.body.appendChild(jsonDiv)
jsonDiv.style.padding = "2%"
jsonDiv.style.backgroundColor = "pink"
jsonDiv.style.marginTop = 0



var droplist = document.createElement("select")
jsonDiv.appendChild(droplist)
droplist.setAttribute("class", "custom-select col-lg-4")
droplist.setAttribute("onchange", "handleChange(this)")


var a0 = document.createElement("option")
a0.selected = "Search Brands"
a0.innerText = "Search Brands"
droplist.appendChild(a0)


var a1 = document.createElement("option")
droplist.appendChild(a1)
a1.innerText = "alva"
a1.setAttribute("value", "alva")


var a2 = document.createElement("option")
droplist.appendChild(a2)
a2.innerText = "almay"
a2.setAttribute("value", "almay")

var a3 = document.createElement("option")
droplist.appendChild(a3)
a3.innerText = "anna sui"
a3.setAttribute("value", "anna sui")

var a4 = document.createElement("option")
droplist.appendChild(a4)
a4.innerText = "annabelle"
a4.setAttribute("value", "annabelle")

var a5 = document.createElement("option")
droplist.appendChild(a5)
a5.innerText = "benefit"
a5.setAttribute("value", "benefit")

var a6 = document.createElement("option")
droplist.appendChild(a6)
a6.innerText = "boosh"
a6.setAttribute("value", "boosh")

var a7 = document.createElement("option")
droplist.appendChild(a7)
a7.innerText = "clinique"
a7.setAttribute("value", "clinique")

var a8 = document.createElement("option")
droplist.appendChild(a8)
a8.innerText = "glossier"
a8.setAttribute("value", "glossier")

var a9 = document.createElement("option")
droplist.appendChild(a9)
a9.innerText = "iman"
a9.setAttribute("value", "iman")

var a10 = document.createElement("option")
droplist.appendChild(a10)
a10.innerText = "smashbox"
a10.setAttribute("value", "smashbox")




var newDiv4 = document.createElement("div")
document.body.appendChild(newDiv4)


const img=document.createElement("img");
img.src="Makeup image.png";
img.id="imgID";

//Adding style to the image
img.style.textAlign = "center";
img.style.marginLeft = "100px";
img.style.marginRight = "100px";
img.style.marginTop = "50px";

document.body.appendChild(img);

let aboutdiv =document.createElement('div')
aboutdiv.className="container bodydiv"
aboutdiv.innerHTML =`<h5 class="font-weight-bold">About the Makeup API</h5><hr><br>
                        <ul>
                            <li><b>Protocol:</b>The transport is HTTP. This API conforms to REST principals</p>
                            <li><b>API Endpoints:</b>The endpoint for the current API version is:
                                    <ul>
                                        <li><a href="http://makeup-api.herokuapp.com/api/v1/products.json">http://makeup-api.herokuapp.com/api/v1/products.json</a></li>
                                    </ul>
                            <li><b>There is currently one API call:</b>Search makeup products</li>
                            <li><b>Type:</b>GET</li>
                            <li><b>Response Format:</b>json</li>
                        </ul>`
                        document.body.appendChild(aboutdiv);
let exdiv = document.createElement("div")
exdiv.className="container examplediv"
exdiv.innerHTML =`<h5 class="font-weight-bold">Examples</h5><hr><br>
                    <ul>
                        <li>To search for the brand “maybelline”, append ‘brand=maybelline’. For example:
                            <ul>
                                <li><a href="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline">http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline</a></li>
                            </ul>
                        <li>To search for the “lipsticks” by the brand “covergirl”, you would append ‘brand=covergirl’ and ‘&product_type=lipstick’. For example:
                            <ul>
                                <li><a href="http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick">http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick</a></li>
                        </li>`
                        document.body.appendChild(exdiv);
//search parameter
let searchdiv = document.createElement("div");
searchdiv.className="container search"
searchdiv.innerHTML=`<h5 class="font-weight-bold">Search Parameters</h5><hr><br>
                    <ul>
                        <li>Search for products and filter them by brand, price, product category, tags and many more. Take a look at the full list below!</li>
                        <li>This API also provides visual representation of the all of JSON data that is available as well</li>`
let table = document.createElement("table")
table.className="container table"
table.innerHTML =`  <thead>
                        <tr>
                            <th>Parameter</th>
                            <th>Data Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>product_type</th>
                            <th>string</th>
                            <td>The type of makeup being searched for (ie. lipstick, eyeliner). See list of product types below. Will return a list of all products of this type</td>
                        </tr>
                        <tr>
                            <th>product_category</th>
                            <th>string</th>
                            <td>Sub-category for each makeup-type. (ie. lip gloss is a category of lipstick). See product types below. If a category exists it will be under 'By Category'. Will return a list of all products of this category</td>
                        </tr>
                        <tr>
                            <th> product_tags</th>
                            <th>string, list separated by commas</th>
                            <td>Options each product could be tagged with. (ie. vegan). each product can have multiple tags. If tags exist it will be in the product types under 'By Tag'. Will return a list of products filtered by all tags indicated</td>
                        </tr>
                        <tr>
                            <th>brand</th>
                            <th>string</th>
                            <td>Brand of the product. Will return all products for each brand</td>
                        </tr>
                        <tr>
                            <th>price_greater_than</th>
                            <th>number</th>
                            <td>Will return a list of products with price greater than indicated number (exclusive)</td>
                        </tr>
                        <tr>
                            <th>price_less_than</th>
                            <th>number</th>
                            <td>Will return a list of products with price less than indicated number (exclusive)</td>
                        </tr>
                        <tr>
                            <th>rating_greater_than</th>
                            <th>number</th>
                            <td>Will return a list of products with a rating more than indicated number (exclusive)</td>
                        </tr>
                        <tr>
                            <th>rating_less_than</th>
                            <th>number</th>
                            <td>Will return a list of products with a rating less than indicated number (exclusive)</td>
                        </tr>
                    </tbody>`
                    searchdiv.append(table)
                    document.body.appendChild(searchdiv);
// Tags list
let tagListHeading =document.createElement("h5");
tagListHeading.className="font-weight-bold"
tagListHeading.innerText="Tags list"
tagListHeading.style.marginLeft="120px"
let tagsdiv = document.createElement("div")
tagsdiv.style.marginLeft="120px"
tagsdiv.className="container tags"
tagsdiv.innerHTML=` <span class="tag">Canadian</span> 
                    <span class="tag">CertClean</span>
                    <span class="tag">Chemical Free</span>
                    <span class="tag">Dairy Free</span>
                    <span class="tag">EWG Verified</span>
                    <span class="tag">EcoCert</span>
                    <span class="tag">Fair Trade</span>
                    <span class="tag">Gluten Free</span>
                    <span class="tag">Hypoallergenic</span>
                    <span class="tag">Natural</span>
                    <span class="tag">No Talc</span>
                    <span class="tag">Non-GMO</span>
                    <span class="tag">Organic</span>
                    <span class="tag">Peanut Free Product</span>
                    <span class="tag">Sugar Free</span>
                    <span class="tag">USDA Organic</span>
                    <span class="tag">Vegan</span>
                    <span class="tag">alcohol free</span>
                    <span class="tag">cruelty free</span>
                    <span class="tag">oil free</span>
                    <span class="tag">purpicks</span>
                    <span class="tag">silicone free</span>
                    <span class="tag">water free</span>`
                    document.body.appendChild(tagListHeading);
                    document.body.appendChild(tagsdiv);
// Brands list
let brandListHeading =document.createElement("h5");
brandListHeading.className="font-weight-bold"
brandListHeading.style.marginLeft="120px"
brandListHeading.innerText="Brand list"
let branddiv = document.createElement("div")
branddiv.style.marginLeft="120px"
branddiv.className="container tags"
branddiv.innerHTML=` <span class="tag">almay</span> 
                    <span class="tag">alva</span>
                    <span class="tag">anna sui</span>
                    <span class="tag">annabelle</span>
                    <span class="tag">benefit</span>
                    <span class="tag">boosh</span>
                    <span class="tag">burt's bees</span>
                    <span class="tag">butter london</span>
                    <span class="tag">c'est moi</span>
                    <span class="tag">cargo cosmetics</span>
                    <span class="tag">china glaze</span>
                    <span class="tag">clinique</span>
                    <span class="tag">coastal classic creation</span>
                    <span class="tag">colourpop</span>
                    <span class="tag">covergirl</span>
                    <span class="tag">dalish</span>
                    <span class="tag">deciem</span>
                    <span class="tag">dior</span>
                    <span class="tag">dr. hauschka</span>
                    <span class="tag">e.l.f.</span>
                    <span class="tag">essie</span>
                    <span class="tag">fenty</span>
                    <span class="tag">glossier</span>
                    <span class="tag">green people</span>
                    <span class="tag">iman</span>
                    <span class="tag">l'oreal</span>
                    <span class="tag">lotus cosmetics usa</span>
                    <span class="tag">maia's mineral galaxy</span>
                    <span class="tag">marcelle</span>
                    <span class="tag">marienatie</span>
                    <span class="tag">maybelline</span>
                    <span class="tag">milani</span>
                    <span class="tag">mineral fusion</span>
                    <span class="tag">misa</span>
                    <span class="tag">mistura</span>
                    <span class="tag">moov</span>
                    <span class="tag">nudus</span>                    
                    <span class="tag">nyx</span>
                    <span class="tag">orly</span>
                    <span class="tag">pacifica</span>
                    <span class="tag">penny lane organics</span>
                    <span class="tag">physicians formula</span>
                    <span class="tag">piggy paint</span>
                    <span class="tag">pure anada</span>
                    <span class="tag">rejuva minerals</span>
                    <span class="tag">revlon</span>
                    <span class="tag">sally b's skin yummies</span>
                    <span class="tag">salon perfect</span>
                    <span class="tag">sinful colours</span>
                    <span class="tag">smashbox</span>
                    <span class="tag">stila</span>
                    <span class="tag">suncoat</span>
                    <span class="tag">w3llpeople</span>
                    <span class="tag">wet n wild</span>
                    <span class="tag">zorah</span>
                    <span class="tag">zorah biocosmetiques</span>
                    `
                    document.body.appendChild(brandListHeading);
document.body.appendChild(branddiv);

//porduct part
let productdiv =document.createElement("div");
productdiv.className="container"
productdiv.innerHTML=` <div class="container-fluid" style="border: 2px solid black;"><tr>
<table><tr>
<td>    
    <img src="http://makeup-api.herokuapp.com/assets/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg" alt="img">Blush
</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Powder</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>   
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Non-gmo</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Usda organic</a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div> <br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/bronzer-2d423487eea3e4571229bd95689bb4eb4331f05740f3921ede7c7c765c7954b1.svg" alt="img">Bronzer</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Powder</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/eyebrow-fc49d8d480ace717203a21fe863c2231970063add91ed2f15181fe8e2d3b96b9.svg" alt="img">Eyebrow</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/eyeliner-de329b6d65d721a45190051af1153e23202df9eb1c393d1ac65972376ee42d50.svg" alt="img">Eyeliner</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Liquid</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Gel</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    
    <li><a href="#">Ecocert</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/eyeshadow-67f9f8fd19df1862c95122f9b3460c7e6674d5a6d178cde00e6e4be908dd898a.svg" alt="img">Eyeshadow</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Palette</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li> 
    <li><a href="#"></a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>  
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">NON-gmo </a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">organic</a> - <a href="">JSON</a></li>
    <li><a href="#">Usda organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    <li><a href="#">Ecocert</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/foundation-9985c8a404d4a19cf7a2985ed504958cadd9f71252a73c90b6a7178bf7075143.svg" alt="img">Foundation</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Concealer</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Liquid</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Contour</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Bb cc</a> - <a href="#">JSON</a> </li>  
    <li><a href="#">Cream</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Mineral</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Powder</a> - <a href="#">JSON</a> </li>
    <li><a href="#">Highlighter</a> - <a href="#">JSON</a> </li>
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian</a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    <li><a href="#">Water free </a> - <a href="#">JSON</a> </li>
    <li><a href="#">Cruelty free</a> - <a href="">JSON</a></li>
    <li><a href="#">Alcohol free </a> - <a href="">JSON</a></li>
    <li><a href="#">Oil free </a> - <a href="">JSON</a></li>
    <li><a href="#">Silicone free</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/lip_liner-3f40bb63957aa7d47e3a2d1356b9380aa093271e5d58f3518181fd427e388d93.svg" alt="img">Lip liner</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#">Pencil</a> - <a href="#">JSON</a> </li> 
</ul>
</li>
<li>By Tag
<ul>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
   
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
    <li><a href="#">Cruelty free</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul>
</td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/lipstick-4531b48ee71839393857e24c8cbc4dede1f99d2284ef82a6eb0a2a4d03540a14.svg" alt="img">Lipstick</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
</ul>
<li>By Category
<ul>
    <li><a href="#">Lipstick</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Lip gloss</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Liquid</a> - <a href="#">JSON</a> </li> 
    <li><a href="#">Lip stain</a> - <a href="#">JSON</a> </li> 
</li>
<li>By Tag
<ul>
    <li><a href="#">Canadian </a> - <a href="">JSON</a></li>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Non-gmo</a> - <a href="">JSON</a></li>
    <li><a href="#">Peanut free product</a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li> 
    <li><a href="#">Cruelty free</a> - <a href="">JSON</a></li> 
    <li><a href="#">Organic</a> - <a href="">JSON</a></li> 
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean </a> - <a href="">JSON</a></li>
    <li><a href="#">Chemical free</a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">No talc</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/mascara-0deeeb81e58f31ddbff07847bfd0820e5ecdba1419f4281da743a05e0d6b3e69.svg" alt="img">Maskara</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Category
<ul>
    <li><a href="#"></a> - <a href="#">JSON</a> </li>
</li>
</ul>
<li>By Tag
<ul>
    <li><a href="#">Natural</a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Vegan </a> - <a href="">JSON</a></li>
    
    <li><a href="#">Canadian </a> - <a href="">JSON</a></li>
    <li><a href="#">Organic </a> - <a href="">JSON</a></li>
    <li><a href="#">Purpicks</a> - <a href="">JSON</a></li>
    <li><a href="#">Ewg verified</a> - <a href="">JSON</a></li>
    <li><a href="#">Hypoallergenic</a> - <a href="">JSON</a></li>
    <li><a href="#">Non talc</a> - <a href="">JSON</a></li>
   
    <li><a href="#">Ecocert </a> - <a href="">JSON</a></li>
    <li><a href="#">Usda organic</a> - <a href="">JSON</a></li>
    <li><a href="#">Certclean</a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>
</table>
</div>
<br>
<div class="container-fluid" style="border: 2px solid black;">
<table>
<tr>
<td>
    
    <img src="http://makeup-api.herokuapp.com/assets/nail_polish-a7e7204834c0c30e8b57a1ba9896656331e228b0daa09d1705d1ab29bc0b7151.svg" alt="img">Nail Polish</td>
<td><ul>
<li> <a href="#">JSON by product</a> </li>
<li>By Tag
<ul>
    <li><a href="#">Vegan</a> - <a href="">JSON</a></li>
    <li><a href="#">Canadian </a> - <a href="">JSON</a></li>
    <li><a href="#">Natural </a> - <a href="">JSON</a></li>
    <li><a href="#">Gluten free</a> - <a href="">JSON</a></li>
    <li><a href="#">Fair trade</a> - <a href="">JSON</a></li>
    <li><a href="#">Sugar free</a> - <a href="">JSON</a></li>
    <li><a href="#">Non-gmo </a> - <a href="">JSON</a></li>
   
    <li><a href="#">Dairy free  </a> - <a href="">JSON</a></li>
</ul>
</li>
</ul></td>
</tr>`


document.body.appendChild(productdiv);
document.body.append(div)



//var newDiv = document.createElement("div");
//document.body.appendChild(newDiv);


function handleChange2() {


    async function searchData() {


        var value2 = document.getElementById("myInput").value

        try {

            var data3 = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${value2}`)

            var resData3 = await data3.json();

            console.log(resData3)

            var album = document.createElement("div")
            album.setAttribute("class", "album py-5 bg-light")
            album.id = "album"
            album.style.padding = "2%"
            newDiv4.innerHTML = "";
            newDiv4.appendChild(album)

            var cont = document.createElement("div")
            album.setAttribute("class", "container-fluid")
            album.style.marginRight = "2%"
            album.style.marginTop = "2%"
            album.appendChild(cont)

            //

            var row = document.createElement("div")
            row.setAttribute("class", "row")
            row.id = "rows"
            album.appendChild(row)


            // For Loops

            for (var i = 0; i <= resData3.length; i++) {


                var divcol = document.createElement("div");
                divcol.setAttribute("class", "col-lg-3 col-md-4 d-flex" )
                row.appendChild(divcol);

                var boxshad = document.createElement("div");
                boxshad.setAttribute("class", "card mb-4 box-shadow ")
                boxshad.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
                divcol.appendChild(boxshad);

                var img = document.createElement("img");
                boxshad.appendChild(img)
                img.setAttribute("id", "flagsimage")
                img.setAttribute("class", "card-img-top")
                img.style.display = "block"
                img.style.height = "225px"
                img.style.width = "100%"
                img.src = resData3[i].image_link;

                var cardBody = document.createElement("div")
                cardBody.setAttribute("class", "card-body")
                boxshad.appendChild(cardBody);


                var h1 = document.createElement("h6");
                h1.innerText = ("BrandName : " + resData3[i].brand)
                h1.style.fontFamily = "'Bitter', serif";
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"

                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // Product Name

                var h1 = document.createElement("h6");
                h1.innerText = ("Name : " + resData3[i].name)
                h1.setAttribute = ("class", "card-text")
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.lineHeight = "30px"
                h1.style.fontWeight = "bolder"

                cardBody.appendChild(h1);

                // product Link

                var h1 = document.createElement("a");
                h1.innerText = (resData3[i].product_link)
                h1.style.textDecoration = "none"
                h1.href = resData3[i].product_link
                h1.style.fontFamily = "'Bitter', serif";
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
           
                h1.style.fontWeight = "bold"
                cardBody.appendChild(h1);

                // Price of the Product

                var h1 = document.createElement("h6");
                h1.innerText = ("Price : " + resData3[i].price)
                h1.style.fontFamily = "'Bitter', serif";
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);


                // Brand Description

                var h1 = document.createElement("h6");
                h1.innerText = ("Description : " + resData3[i].name)
                h1.style.fontFamily = "'Bitter', serif";
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
            
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);




            }


        } catch (err) {
            console.log(err)
        }
    }

    searchData()

}


function handleChange(e) {


    var value = e.value
    // var value = document.getElementById("myInput").value;

    async function getData() {


        try {
            let number = 0

            if (number === 1) {
                document.body.style.display = "none"
                number = 0
            }


            var data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=" + value);

            var resData = await data.json();



            newDiv4.innerHTML = ""
            var album = document.createElement("div")
            album.setAttribute("class", "album py-5 bg-light")
            album.id = "album"
            album.style.padding = "2%"
            newDiv4.appendChild(album)

            var cont = document.createElement("div")
            album.setAttribute("class", "container-fluid")
            album.style.marginRight = "2%"
            album.style.marginTop = "2%"
            album.appendChild(cont)

            var row = document.createElement("div")
            row.setAttribute("class", "row")
            album.appendChild(row)


            // For Loops

            for (var i = 0; i <= resData.length; i++) {


                var divcol = document.createElement("div");
                divcol.setAttribute("class", "col-lg-3 col-md-4 d-flex")
                row.appendChild(divcol);

                var boxshad = document.createElement("div");
                boxshad.setAttribute("class", "card mb-4 box-shadow box")
                boxshad.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
                
                divcol.appendChild(boxshad);

                var cardimg = document.createElement("div")
                cardimg.setAttribute("class","card-img")
                boxshad.appendChild(cardimg)

                var img = document.createElement("img");
                cardimg.appendChild(img)
                img.setAttribute("id", "flagsimage")
                img.setAttribute("class", "card-img-top")
                img.style.display = "block"
                img.style.height = "225px"
                img.style.width = "100%"
                img.src = resData[i].image_link;

                var cardBody = document.createElement("div")
                cardBody.setAttribute("class", "card-body")
                boxshad.appendChild(cardBody);



                var h1 = document.createElement("h6");
                h1.innerText = ("BrandName : " + resData[i].brand)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // Product Name

                var h1 = document.createElement("h6");
                h1.innerText = ("Name : " + resData[i].name)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // product Link

                var h1 = document.createElement("a");
                h1.innerText = (resData[i].product_link)
                h1.href = resData[i].product_link
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // Price of the Product

                var h1 = document.createElement("h6");
                h1.innerText = ("Price : " + resData[i].price)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);


                // Brand Description

                var h1 = document.createElement("h6");
                h1.innerText = ("Description : " + resData[i].name)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);


                number += 1




            }
        } catch (err) {
            console.log(err)
        }
    }

    getData()


}



function toggleClick() {

    var element1 = document.body;
    element1.classList.toggle("dark");
}

function headingDark() {
    var element2 = document.getElementById("heading")
    element2.classList.toggle("dark2")
}


function toggleBtn() {
    var obj = document.getElementById("weathers", "icon");
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}


/* <p id='demo' style='display: none'>Hello Javascript</p>
<button type='button' onclick="toggleText()">Click me</button> */