// Data 
const $gallery = document.getElementById('gallery')

const iconsJapanese = `
    <div class="icon-div"><p class="icon-show">&#127514;</p> <p>127514</p></div>
    <div class="icon-div"><p class="icon-show">&#127535;</p> <p>127535</p></div>
    <div class="icon-div"><p class="icon-show">&#127538;</p> <p>127538</p></div>
    <div class="icon-div"><p class="icon-show">&#127539;</p> <p>127539</p></div>
    <div class="icon-div"><p class="icon-show">&#127540;</p> <p>127540</p></div>
    <div class="icon-div"><p class="icon-show">&#127541;</p> <p>127541</p></div>
    <div class="icon-div"><p class="icon-show">&#127542;</p> <p>127542</p></div>
    <div class="icon-div"><p class="icon-show">&#127544;</p> <p>127544</p></div>
    <div class="icon-div"><p class="icon-show">&#127545;</p> <p>127545</p></div>
    <div class="icon-div"><p class="icon-show">&#127546;</p> <p>127546</p></div>
`
const iconsMoon = `
    <div class="icon-div"><p class="icon-show">&#127770;</p> <p>127770</p></div>
    <div class="icon-div"><p class="icon-show">&#127761;</p> <p>127761</p></div>
    <div class="icon-div"><p class="icon-show">&#127762;</p> <p>127762</p></div>
    <div class="icon-div"><p class="icon-show">&#127763;</p> <p>127763</p></div>
    <div class="icon-div"><p class="icon-show">&#127764;</p> <p>127764</p></div>
    <div class="icon-div"><p class="icon-show">&#127773;</p> <p>127773</p></div>
    <div class="icon-div"><p class="icon-show">&#127765;</p> <p>127765</p></div>
    <div class="icon-div"><p class="icon-show">&#127766;</p> <p>127766</p></div>
    <div class="icon-div"><p class="icon-show">&#127767;</p> <p>127767</p></div>
    <div class="icon-div"><p class="icon-show">&#127768;</p> <p>127768</p></div>
`
const iconsPlants = `
    <div class="icon-div"><p class="icon-show">&#127799;</p> <p>127799</p></div>
    <div class="icon-div"><p class="icon-show">&#127800;</p> <p>127800</p></div>
    <div class="icon-div"><p class="icon-show">&#127801;</p> <p>127801</p></div>
    <div class="icon-div"><p class="icon-show">&#127802;</p> <p>127802</p></div>
    <div class="icon-div"><p class="icon-show">&#127803;</p> <p>127803</p></div>
    <div class="icon-div"><p class="icon-show">&#127804;</p> <p>127804</p></div>
    <div class="icon-div"><p class="icon-show">&#127812;</p> <p>127812</p></div>
    <div class="icon-div"><p class="icon-show">&#127794;</p> <p>127794</p></div>
    <div class="icon-div"><p class="icon-show">&#127795;</p> <p>127795</p></div>
    <div class="icon-div"><p class="icon-show">&#127796;</p> <p>127796</p></div>
`
const iconsFruits = `
    <div class="icon-div"><p class="icon-show">&#127815;</p> <p>127815</p></div>
    <div class="icon-div"><p class="icon-show">&#127816;</p> <p>127816</p></div>
    <div class="icon-div"><p class="icon-show">&#127817;</p> <p>127817</p></div>
    <div class="icon-div"><p class="icon-show">&#127818;</p> <p>127818</p></div>
    <div class="icon-div"><p class="icon-show">&#127819;</p> <p>127819</p></div>
    <div class="icon-div"><p class="icon-show">&#127773;</p> <p>127773</p></div>
    <div class="icon-div"><p class="icon-show">&#127820;</p> <p>127820</p></div>
    <div class="icon-div"><p class="icon-show">&#127821;</p> <p>127821</p></div>
    <div class="icon-div"><p class="icon-show">&#127822;</p> <p>127822</p></div>
    <div class="icon-div"><p class="icon-show">&#127823;</p> <p>127823</p></div>
`
const iconsFood = `
    <div class="icon-div"><p class="icon-show">&#127828;</p> <p>127828</p></div>
    <div class="icon-div"><p class="icon-show">&#127829;</p> <p>127829</p></div>
    <div class="icon-div"><p class="icon-show">&#127830;</p> <p>127830</p></div>
    <div class="icon-div"><p class="icon-show">&#127831;</p> <p>127831</p></div>
    <div class="icon-div"><p class="icon-show">&#127836;</p> <p>127836</p></div>
    <div class="icon-div"><p class="icon-show">&#127839;</p> <p>127839</p></div>
    <div class="icon-div"><p class="icon-show">&#127843;</p> <p>127843</p></div>
    <div class="icon-div"><p class="icon-show">&#127844;</p> <p>127844</p></div>
    <div class="icon-div"><p class="icon-show">&#127845;</p> <p>127845</p></div>
    <div class="icon-div"><p class="icon-show">&#127859;</p> <p>127859</p></div>
`
const iconsActivities = `
    <div class="icon-div"><p class="icon-show">&#127908;</p> <p>127908</p></div>
    <div class="icon-div"><p class="icon-show">&#127909;</p> <p>127909</p></div>
    <div class="icon-div"><p class="icon-show">&#127911;</p> <p>127911</p></div>
    <div class="icon-div"><p class="icon-show">&#127912;</p> <p>127912</p></div>
    <div class="icon-div"><p class="icon-show">&#127918;</p> <p>127918</p></div>
    <div class="icon-div"><p class="icon-show">&#127920;</p> <p>127920</p></div>
    <div class="icon-div"><p class="icon-show">&#127921;</p> <p>127921</p></div>
    <div class="icon-div"><p class="icon-show">&#127936;</p> <p>127936</p></div>
    <div class="icon-div"><p class="icon-show">&#127946;</p> <p>127946</p></div>
    <div class="icon-div"><p class="icon-show">&#127955;</p> <p>127955</p></div>
`
const iconsPlaces = `
    <div class="icon-div"><p class="icon-show">&#127969;</p> <p>127969</p></div>
    <div class="icon-div"><p class="icon-show">&#127970;</p> <p>127970</p></div>
    <div class="icon-div"><p class="icon-show">&#127971;</p> <p>127971</p></div>
    <div class="icon-div"><p class="icon-show">&#127972;</p> <p>127972</p></div>
    <div class="icon-div"><p class="icon-show">&#127984;</p> <p>127984</p></div>
    <div class="icon-div"><p class="icon-show">&#127975;</p> <p>127975</p></div>
    <div class="icon-div"><p class="icon-show">&#127976;</p> <p>127976</p></div>
    <div class="icon-div"><p class="icon-show">&#127977;</p> <p>127977</p></div>
    <div class="icon-div"><p class="icon-show">&#127979;</p> <p>127979</p></div>
    <div class="icon-div"><p class="icon-show">&#127981;</p> <p>127981</p></div>
`
const iconsAnimalsOne = `
    <div class="icon-div"><p class="icon-show">&#128000;</p> <p>128000</p></div>
    <div class="icon-div"><p class="icon-show">&#128005;</p> <p>128005</p></div>
    <div class="icon-div"><p class="icon-show">&#128009;</p> <p>128009</p></div>
    <div class="icon-div"><p class="icon-show">&#128014;</p> <p>128014</p></div>
    <div class="icon-div"><p class="icon-show">&#128018;</p> <p>128018</p></div>
    <div class="icon-div"><p class="icon-show">&#128019;</p> <p>128019</p></div>
    <div class="icon-div"><p class="icon-show">&#128022;</p> <p>128022</p></div>
    <div class="icon-div"><p class="icon-show">&#128011;</p> <p>128011</p></div>
    <div class="icon-div"><p class="icon-show">&#128008;</p> <p>128008</p></div>
    <div class="icon-div"><p class="icon-show">&#128021;</p> <p>128021</p></div>
`
const iconsAnimalsTwo = `
    <div class="icon-div"><p class="icon-show">&#128045;</p> <p>128045</p></div>
    <div class="icon-div"><p class="icon-show">&#128047;</p> <p>128047</p></div>
    <div class="icon-div"><p class="icon-show">&#128050;</p> <p>128050</p></div>
    <div class="icon-div"><p class="icon-show">&#128052;</p> <p>128052</p></div>
    <div class="icon-div"><p class="icon-show">&#128053;</p> <p>128053</p></div>
    <div class="icon-div"><p class="icon-show">&#128020;</p> <p>128020</p></div>
    <div class="icon-div"><p class="icon-show">&#128055;</p> <p>128055</p></div>
    <div class="icon-div"><p class="icon-show">&#128051;</p> <p>128051</p></div>
    <div class="icon-div"><p class="icon-show">&#128049;</p> <p>128049</p></div>
    <div class="icon-div"><p class="icon-show">&#128054;</p> <p>128054</p></div>
`
const iconsEmoji = `
    <div class="icon-div"><p class="icon-show">&#128512;</p> <p>128512</p></div>
    <div class="icon-div"><p class="icon-show">&#128513;</p> <p>128513</p></div>
    <div class="icon-div"><p class="icon-show">&#128514;</p> <p>128514</p></div>
    <div class="icon-div"><p class="icon-show">&#128516;</p> <p>128516</p></div>
    <div class="icon-div"><p class="icon-show">&#128517;</p> <p>128517</p></div>
    <div class="icon-div"><p class="icon-show">&#128518;</p> <p>128518</p></div>
    <div class="icon-div"><p class="icon-show">&#128519;</p> <p>128519</p></div>
    <div class="icon-div"><p class="icon-show">&#128521;</p> <p>128521</p></div>
    <div class="icon-div"><p class="icon-show">&#128522;</p> <p>128522</p></div>
    <div class="icon-div"><p class="icon-show">&#128523;</p> <p>128523</p></div>
`

// Code 

// Run 
$gallery.innerHTML += 
    '<h2>Japanese Characters</h2>' +
    '<div class="icons">' + iconsJapanese + '</div>' +
    '<h2>Moon Cycle</h2>' +
    '<div class="icons">' + iconsMoon + '</div>' +
    '<h2>Moon Cycle</h2>' +
    '<div class="icons">' + iconsPlants + '</div>' +
    '<h2>Plants, Mashrooms, Trees</h2>' +
    '<div class="icons">' + iconsFruits + '</div>' +
    '<h2>Foods</h2>' +
    '<div class="icons">' + iconsFood + '</div>' +
    '<h2>Activities & Hobbies</h2>' +
    '<div class="icons">' + iconsActivities + '</div>' +
    '<h2>Places & Buildings</h2>' +
    '<div class="icons">' + iconsPlaces + '</div>' +
    '<h2>Animals Full Body</h2>' +
    '<div class="icons">' + iconsAnimalsOne + '</div>' +
    '<h2>Animals Only Head</h2>' +
    '<div class="icons">' + iconsAnimalsTwo + '</div>' +
    '<h2>Emojis</h2>' +
    '<div class="icons last">' + iconsEmoji + '</div>'

