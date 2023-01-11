import { Component } from 'react';
import { ToastContainer, toast} from "react-toastify";
import {AppContainer} from '../app/App.styled'
import {Search} from '../searchbar/Searchbar'
import {Gallery} from '../imagegallery/ImageGallery'
import {GalleryItem} from '../imagegalleryitem/ImageGalleryItem'
import {Button} from '../button/Button'
import {LoaderSpiner} from '../loader/Loader'
import { fetchArticlesWithQuery } from 'components/services/Api';
// import { Modal } from 'components/modal/Modal';


export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };


      async componentDidUpdate(_, prevState) {
        const {name, page} = this.state;
        if (prevState.name !== name || prevState.page !== page) {
          this.setState({ loading: true });
          try {
            const options = await fetchArticlesWithQuery(name, page);
            console.log(options)
            const images = options.map(option => ({
              id: option.id,
              webformatURL: option.webformatURL,
              largeImageURL: option.largeImageURL,
              tags: option.tags
            }))
            this.setState ({
              images: images})
              // console.log(this.state.images)

            } catch (error) {
            this.setState({error: toast('Something went wrong!')})
          } finally {
            this.setState({ loading: false, });
          }}
          return
        }

  

onLoadMore = () => {
  this.setState((prevState) => {
    return {
      page: prevState.page + 1,
      loading: true,
    }
  })
}



handleFormSubmit = name => {
this.setState({
  name: name,
  images: [],
  page: 1,
})
}

reset = () => {
    this.setState ({name: '',});
};


  render(){
    const img = this.state.images.map(image => image.webformatURL)
    console.log(img)
    return(
      <AppContainer>
      <Search  onSubmit={this.handleFormSubmit}/>
      <Gallery images={this.state.images} />
      <GalleryItem images={this.state.images}/>
      {this.state.images.length > 1 && <Button/>}
      {/* <Modal/> */}
      {this.state.loading && <LoaderSpiner/>}
      
      <>
      <ul>
        
        <li>
          
          <img src={img} alt="" />
        </li>
      </ul>
      </>
      <ToastContainer/>
      </AppContainer>
    )
  }
}
