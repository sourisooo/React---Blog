import Post from '../Post/Post';

import './Posts.scss';

function Posts({posts, categories, zen}) {

  console.log(posts);

  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">

      { posts.map((post) => <Post key={post.id} post={post} categories={categories} zen={zen}/>)}

      </div>
    </main>
  );
}

export default Posts;
