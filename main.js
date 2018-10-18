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
    div.className = 'row'
    main.appendChild(div)
    row = keys[index]
    index2 = 0
    while (index2<row['length']){
        kbd = document.createElement('kbd')
        span = document.createElement('span')
        span.textContent = row[index2]
        span.className = 'text'
        kbd.appendChild(span)
        kbd.className = 'key'
        button = document.createElement('button')
        button.textContent = 'Edit'

        button.id=row[index2]
        img = document.createElement('img')
        if(hash[row[index2]]){
            img.src = 'http://'+hash[row[index2]]+'/favicon.ico'
        }else{
            img.src = '//i.loli.net/2018/10/18/5bc793cb24685.png'
        }
        img.onerror = function(imgError){
            imgError.target.src = '//i.loli.net/2018/10/18/5bc793cb24685.png'
        }




        button.onclick = function(keyPress){
            button2 = keyPress['target']
            img2 = button2.previousSibling
            key = button2['id']
            newAddress = prompt('Edit a new address.')
            hash[key] = newAddress
            img2.src = 'http://'+hash[row[index2]]+'/favicon.ico'
            img.onerror = function(imgError){
                imgError.target.src = '//i.loli.net/2018/10/18/5bc793cb24685.png'
            }
            localStorage.setItem('saveHash',JSON.stringify(hash))
        }
        kbd.appendChild(img)
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
