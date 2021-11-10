import './AppHeader.css'

const AppHeader = ({liked, allPosts}) => {
  return(
    <div className="AppHeader d-flex" >
      <h1 className="appheader_h1">Islom Alixujaev</h1>
      <h2 className='appheader_h2'>{allPosts} posts, like: {liked}</h2>
    </div>
  )
}

export default AppHeader