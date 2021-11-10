import PostListItem from "../PostListItem"

const PostList = ({posts, deleted, onToggleImportant, onToggleLiked}) => {
  return (
    <div>
      <ul className="app-list list-group">
        {posts.map((item) => {
          const {id, ...itemProps} = item
          return (
            <li key={id} className="list-group-item">
              <PostListItem {...itemProps} deleted={() => deleted(id)} onToggleImportant={() => onToggleImportant(id)}
              onToggleLiked={() => onToggleLiked(id)}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostList