const btn = document.querySelector('.btn')
const follow = document.querySelector('.follow')
const Name = document.querySelector('.name')
const Repo = document.querySelector('.repo')
const img = document.querySelector('img')

const req = 'https://api.github.com/users/SHAHUL-AHMED-77'
const xhr = new XMLHttpRequest();
xhr.open('GET', req);
xhr.onload = function() {
    if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText)
        btn.addEventListener('click',()=>{
            Name.innerHTML = `${data.name}`
            follow.innerHTML = `${data.followers}`
            Repo.innerHTML = `${data.public_repos}`
            img.setAttribute("src",`${data.avatar_url}`)
        })
    }
    else{
        console.log("error");
    }
}
xhr.send()