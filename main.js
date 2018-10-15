keys = {
    0:['q','w','e','r','t','y','u','i','o','p'],
    1:['a','s','d','f','g','h','j','k','l'],
    2:['z','x','c','v','b','n','m'],
    length:3
}

hash = {
    q: 'qq.com',
    w: 'weixin.com',
    e: 'ebay.ca',
    r: 'renren.com',
    t: 'tianya.com',
    u: 'uc.com',
    i: 'aiqiyi.com',
}

hashInLocalStorage = JSON.parse(localStorage.getItem('saveHash')||'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

// traverse keys, create kbe tag.
index = 0
while(index<keys['length']){
    div = document.createElement('div')
    main.appendChild(div)
    row = keys[index]
    index2 = 0
    while (index2<row['length']){
        kbd = document.createElement('kbd')
        kbd.textContent = row[index2]
        button = document.createElement('button')
        button.textContent = 'Edit'

        button.id=row[index2]
        button.onclick = function(keyPress){
            key = keyPress['target']['id']
            newAddress = prompt('Edit a new address.')
            hash[key] = newAddress
            localStorage.setItem('saveHash',JSON.stringify(hash))
        }

        kbd.appendChild(button)
        div.appendChild(kbd)
        index2 = index2 + 1
    }

    index = index+1
}

document.onkeypress = function (keyPress) {
    key = keyPress['key']
    website = hash[key]
    //location.href = 'http://' + website
    window.open('http://' + website, '_blank')
}
