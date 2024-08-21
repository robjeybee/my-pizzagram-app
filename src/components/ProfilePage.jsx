import "../styles/ProfilePage.css"

const posts = Array.from({ length: 12 }, (_, index) => ({
    src: `src/assets/pizza/pizza${index + 1}.jpg`,
  alt: `Pizza ${index + 10}`,
  caption: `Here's my pizza ${index + 10}`,
}));


export default function ProfilePage() {
  return (
    <>
      <h1>ProfilePage/Username</h1>
      <p>Bio</p>
      <button>Edit Profile</button>
      <button>Create Post</button>
      <p>Followers</p>
      <p>Following</p>
      <br></br>
          <p>Posts</p>
          
          <div className="grid">
              {posts.map((post, index) => (
                  <div key={index} className="grid-item">
                      <img src={post.src} alt={post.alt} />
                      <p>{post.caption}</p>
                  </div>
              ))}
          </div >
    </>
  );
}
