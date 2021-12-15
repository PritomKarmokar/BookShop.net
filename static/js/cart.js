var updateBtns = document.getElementsByClassName('update-cart')

for(var i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var bookId = this.dataset.book
        var action = this.dataset.action
        console.log('bookId:',bookId, 'action:', action)

        console.log('USER:', user)
        if(user == 'AnonymousUser'){
            addCookieItem(bookId, action)
        }
        else{
            updateUserOrder(bookId, action)
        }
    })
}
// function add cookie item added

function addCookieItem(bookId, action){
    console.log('Not logged in..')

    if(action == 'add'){
        if(cart[bookId] == undefined){
            cart[bookId] = {'quantity':1}
        }
        else{
            cart[bookId]['quantity'] += 1 
        }
    }

    if(action == 'remove'){
        cart[bookId]['quantity'] -= 1 

        if(cart[bookId]['quantity'] <= 0){
            console.log('Remove Item')
            delete cart[bookId]
        }
    }

    console.log('Cart:', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}

function updateUserOrder(bookId, action){
    console.log('User is authenticated, sending data....')

    var url = '/update_item/'

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken, 
        },
        body:JSON.stringify({'bookId': bookId, 'action': action})
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('Data:', data)
        location.reload()
    })
}