let count = 3;
let likeUser = {
    neil : 9,
    nichole: 12,
    jim :9
}
function addlike(){
    let likes = document.querySelector('#like-user');
    count++;
    likes.innerText = count +' like(s)'
}
function likeUsers(elemento){
    let textoLike = elemento.closest('.encabezado').querySelector('#like-user');
    if(elemento.id == 'userNeil'){
        likeUser.neil++;
        textoLike.innerText = likeUser.neil + ' like(s)';
    }else if(elemento.id == 'userNichole'){
        likeUser.nichole++;
        textoLike.innerText = likeUser.nichole + ' like(s)';
    }else if(elemento.id == 'userJim'){
        likeUser.jim++
        textoLike.innerText = likeUser.jim + ' like(s)';
    }
}


