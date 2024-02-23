import './Post.scss';

function Post({post, categories, zen}) {

 let category = categories.filter(e => e.id==post.categoryId)[0]?.name;

  return (

    <article className="post" style={{width:zen}}>
      <h2 className="post-title">{post.title}</h2>
      <div className="post-category"> {category} </div>
      <p className="post-excerpt">
        {post.content}
      </p>
    </article>
  );
}

export default Post;
