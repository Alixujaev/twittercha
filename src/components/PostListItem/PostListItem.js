import React from 'react';
import './PostListItem.css';

function PostListItem(props) {
  let classItem = 'ap_list_item d-flex justify-content-between',
      classStar = 'fa fa-star star',
      classLiked = 'fa fa-heart heart'
    const {label, deleted, onToggleImportant, onToggleLiked, important, like} = props
    if(important){
      classItem += ' important'
      classStar += ' grey'
    }
    if(like){
      classLiked += ' show'
    }
    return(
      <div>
          <div className={classItem}>
            <span className="app_list_item_label" onClick={onToggleLiked}>
             {label}
            </span>
            <div className="buttons d-flex justify-content-center align-items-center">
                <button 
                type="button" 
                className="btn_star btn_sm"
                onClick={onToggleImportant}
                >
                  <i className={classStar}></i>
                </button>
                <button 
                type="button" 
                className="btn_trash btn_sm"
                onClick={deleted}
                >
                  <i className="fas fa-trash trash"></i>
                </button>
                <i className={classLiked}></i>
            </div>
          </div>
        </div>
    )
}

export default PostListItem
