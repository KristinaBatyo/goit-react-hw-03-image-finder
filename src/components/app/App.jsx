import { Component } from 'react';
import { ToastContainer, toast} from "react-toastify";
import {AppContainer} from '../app/App.styled'
import {Search} from '../searchbar/Searchbar'
import axios from 'axios';
import {Gallery} from '../imagegallery/ImageGallery'
import {GalleryItem} from '../imagegalleryitem/ImageGalleryItem'
import {Button} from '../button/Button'
import {LoaderSpiner} from '../loader/Loader'
import { fetchArticlesWithQuery } from 'components/services/Api';
// import {fetchArticlesWithQuery} from '../services/Api'
// import { Modal } from 'components/modal/Modal';


export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const articles = fetchArticlesWithQuery();
        this.setState({ articles });
    }catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  

  // async componentDidUpdate(_, prevState) {
  //   try {
      
  //     const {name, page} = this.state;
  //     if (prevState.name !== name || prevState.page !== page) {
  //   const response = await axios.get(`https://pixabay.com/api/?q=${name.query}&page=${page}&key=30952901-4af86608fbbf1ce290900eb34&image_type=photo&orientation=horizontal&per_page=12`);
  //   this.setState({ images: [response.data.hits] });
        
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  // }


// async componentDidUpdate(_, prevState) {
//   this.setState({ loading: true });
//   try {
//     const articles = fetchArticlesWithQuery();
//       this.setState({ articles });
//   }catch (error) {
//     this.setState({ error });
//   } finally {
//     this.setState({ loading: false });
//   }
// }

  // const {page, name,} = this.state;
  // const {images} = this.state;
  // if (prevState.name !== name || prevState.page !== page) {
  //   fetch (`https://pixabay.com/api/?q=${name.query}&page=${page}&key=30952901-4af86608fbbf1ce290900eb34&image_type=photo&orientation=horizontal&per_page=12`)
  //   .then(res => res.json())
  //   .then(this.setState({ images: [...images] }))
  //   .then(console.log)
  // }


  // const {page, name, images} = this.state;
  // if (prevState.name !== name || prevState.page !== page) {
  //   try {
  //   this.setState({loading: true})
  //   const response = await axios.get(`https://pixabay.com/api/?q=${name.query}&page=${page}&key=30952901-4af86608fbbf1ce290900eb34&image_type=photo&orientation=horizontal&per_page=12`)
  //   const data = response.data.hits;
  //   const dataArray = [];
  //   data.map(({id, webformatURL, largeImageURL}) => dataArray.push({
  //     id, webformatURL, largeImageURL
  //   }))
  //   if (dataArray.length === 0){
  //     toast('Nothing found!')
  //   } 
  //   this.setState({
  //     images: dataArray,
  //   })
    
  //   console.log(images)
  // } 
  // catch (error) {
  //       this.setState({error: toast('Something went wrong!')})
  //     } finally {
  //       this.setState({loading: false})
  //     }
  //   }
// }


// formSubmitHandler = name => {
//   this.setState({name});
// }

onLoadMore = () => {
  this.setState((prevState) => {
    return {
      page: prevState.page + 1,
      loading: true,
    }
  })
}

handleChange = e => {
            
  this.setState ({
    name: e.currentTarget.value,
  })
}
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
        toast('Enter the name of the picture!');
        return;
    }
    console.log(this.state.name)

    this.reset();
}

reset = () => {
    this.setState ({name: '',});
};

// addImages = (newImages) => {
//   this.state((prevState) =>{
//     if (prevState.images.length === 0) {
//       return {
//         images: newImages,
//       }
//     } return {
//       cards: [...prevState.images, ...newImages]
//     }
//   })
// }


  render(){
    // console.log(this.state.images)
    return(
      <AppContainer>
      <Search onChange={this.handleChange} onSubmit={this.handleSubmit} value={this.state.name}/>
      {/* <Gallery images={this.state.images} /> */}
      <GalleryItem/>
      {this.state.images.length > 1 && <Button/>}
      {/* <Modal/> */}
      {this.state.loading && <LoaderSpiner/>}
      <ToastContainer/>
      </AppContainer>
    )
  }
}
