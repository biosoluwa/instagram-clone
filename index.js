renderPosts()

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let renderEl = document.getElementById("render-el");

function renderPosts(){
    let postItems = "";
    for(let i = 0; i < posts.length; i++){
       postItems += (` <section>
                                <div class="post" id="post-${i}">
                                    <div class="avatar-image">
                                    <img src="${posts[i].avatar}" alt="" class="avatar" />
                                    <p>
                                        <span class="bold-text">${posts[i].name}</span> <br />${posts[i].location}
                                    </p>
                                    </div>
                                    <img class="post-image" src="${posts[i].post}" alt="" />
                                    <div class="show-engagement">
                                    <div class="icons">
                                        <img src="images/icon-heart.png" alt="" class="icon" />
                                        <img src="images/icon-comment.png" alt="" class="icon" />
                                        <img src="images/icon-dm.png" alt="" class="icon" />
                                    </div>
                                    <p class="bold-text" id="bold-text-${i}">${posts[i].likes}</p>
                                    <p>
                                        <span class="bold-text">${posts[i].username}</span> ${posts[i].comment}
                                    </p>
                                    </div>
                                </div>
                    </section>
      </div>`)
    }
    renderEl.innerHTML = postItems;

    for(let i = 0; i < posts.length; i++){

let increaseLikes = document.getElementById(`post-${i}`);
let showLikes = document.getElementById(`bold-text-${i}`)

increaseLikes.addEventListener("dblclick", function(){
    posts[i].likes ++;
showLikes.textContent = `${posts[i].likes} likes`
})
    }
}