import AppHeader from "../AppHeader";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import PostAddForm from "../PostAddForm";
import './App.css';
import React from "react";

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
       data : [
        {label: 'Going to learn React JS', important: false, id:'qa', like: false},
        {label: 'That is so good', important: false, id:'qs', like: false},
        {label: 'I need a break', important: false, id:'qq', like: false},
      ] ,
      term: '',
      filter: 'all'
    };
    this.deletedItem = this.deletedItem.bind(this)
    this.addNewInput = this.addNewInput.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLiked = this.onToggleLiked.bind(this)
    this.searchPost = this.searchPost.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    
    this.maxId = 4
  }

  deletedItem(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const before = data.slice(0, index)
      const after = data.slice(index + 1)
      const newArr = [...before, ...after]
      return {
        data: newArr
      }
    })
  }

  addNewInput(body){
    if(body.length > 0){
      const newItem = {
        label: body,
        important: false,
        id: this.maxId++
      }
      this.setState(({data}) =>{
        const newArr = [...data, newItem]
        return{
          data: newArr
        }
      })

    }

  }

  

  onToggleImportant(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem, important: !oldItem.important}
      console.log(newItem);

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return{
        data: newArr

      }
      
    })
  }
  onToggleLiked(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem, like: !oldItem.like}
      console.log(newItem);

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

      return{
        data: newArr

      }
      
    })
  }

  searchPost(items, term){
    if(term.length === 0){
      return items
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1
    })
  }

  onUpdateSearch(term){
    this.setState({term})
  }

  filterPost(items, filter){
    if(filter === 'like'){
      return items.filter(item => item.like)
    }else{
      return items
    }
  }
  onFilterSelect(filter){
    this.setState({filter})
  }
  
  render(){
    const {data, term, filter} = this.state
    const liked = data.filter(item => item.like).length
    const allPosts = data.length
    const visiblePost = this.filterPost(this.searchPost(data, term), filter)


    
    return (
      <div className="app">
        <AppHeader  liked={liked} allPosts={allPosts}/>
        <div className="search_panel d-flex">
        <SearchPanel searchUpdate={this.onUpdateSearch}/>
        <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList 
        posts={visiblePost} 
        deleted={this.deletedItem}
        onToggleImportant={this.onToggleImportant}
        onToggleLiked={this.onToggleLiked}/> 
        <PostAddForm addNewInput={this.addNewInput}/>
      </div>
    )
  }
}

