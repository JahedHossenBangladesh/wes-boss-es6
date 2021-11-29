const posts = [
  { title: "I love JavaScript", author: "Wes Bos", id: 1 },
  { title: "CSS!", author: "Chris Coyier", id: 2 },
  { title: "Dev tools tricks", author: "Addy Osmani", id: 3 },
];

const authors = [
  { name: "Wes Bos", twitter: "@wesbos", bio: "Canadian Developer" },
  {
    name: "Chris Coyier",
    twitter: "@chriscoyier",
    bio: "CSS Tricks and CodePen",
  },
  { name: "Addy Osmani", twitter: "@addyosmani", bio: "Googler" },
];


function getPostById(id){
    return new Promise((resolve,reject) =>{
        const post = posts.find(post => post.id === id);
        if(post){
            resolve(post)
        }else{
            reject(`No post with id ${id}`);
        }
    })
}
function hydrationOfAuthor(post)
{
    return new Promise((resolve,reject) =>{
        const authorDetail = authors.find(author => author.name === post.author);
        if(authorDetail){
            post.author = authorDetail;
            resolve(post);

        } else{
            reject(`No author found for ${post.author}`);
        }
    })
}

getPostById(2).then(post =>{
    
return hydrationOfAuthor(post)
})
.then(data => console.log(data))
.catch(error => console.log(error));
