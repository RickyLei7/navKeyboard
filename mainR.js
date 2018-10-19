// 1. initialization
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

// 2. Create the Keyboard
// traverse keys, create kbe tag.
generateKeyboard(keys, hash)

// 3. listening User
listenToUser(hash)

/*-- ------------------------------------------------------ --*/

// Tool Function
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}

function createButton(id) {
    var button = tag('button')
    button.textContent = 'Edit'
    button.id = id
    button.onclick = function (keyPress) {
        var button2 = keyPress['target']
        var img2 = button2.previousSibling
        var key = button2['id']
        var newAddress = prompt('Edit a new address.')
        hash[key] = newAddresshash
        img2.src = 'http://' + newAddresshash+ '/favicon.ico'
        img.onerror = function (imgError) {
            imgError.target.src = '//i.loli.net/2018/10/18/5bc793cb24685.png'
        }
        localStorage.setItem('saveHash', JSON.stringify(hash))

    }
    return button
}

function createImge(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = '//i.loli.net/2018/10/18/5bc793cb24685.png'
    }
    img.onerror = function (imgError) {
        imgError.target.src = '//i.loli.net/2018/10/18/5bc793cb24685.png'
    }
    return img
}

function init() {
    var keys = {
        0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        length: 3
    }
    var hash = {
        q: 'qq.com',
        w: 'youtube.com',
        e: 'youtube.com',
        r: 'youtube.com',
        t: 'youtube.com',
        u: 'youtube.com',
        i: 'youtube.com',
    }
    // Catch the saveHash from localStorage
    var hashInLocalStorage = getFromLocalStorage('saveHash')
    if (hashInLocalStorage){
        hash = hashInLocalStorage
    }
    var hashInLocalStorage = getFromLocalStorage('zzz')
    if(hashInLocalStorage){
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}

function generateKeyboard(keys, hash) {
    for (var index = 0; index < keys['length']; index++) {
        var div = tag('div')
        div.className = 'row'

        main.appendChild(div)

        var row = keys[index]
        for (var index2 = 0; index2 < row['length']; index2++) {
            var span = createSpan(row[index2])

            var button = createButton(row[index2])

            var img = createImge(hash[row[index2]])

            var kbd = tag('kbd')
            kbd.className = 'key'

            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)

            div.appendChild(kbd)

        }
    }
}

function listenToUser(hash) {
    document.onkeypress = function (keyPress) {
        var key = keyPress['key']
        website = hash[key]
        window.open('http://' + website, '_blank')
    }
}