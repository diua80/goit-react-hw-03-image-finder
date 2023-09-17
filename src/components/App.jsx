import React, { Component } from 'react';
import { SearchBar } from './searchBar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Loader } from './loader/Loader';
import { getImages } from '../api';
import { Button } from './button/Button';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    loadedImgCount: 0,
    randomId: 0,
  };

  handleQueryChange = newQuery => {
    this.setState(prevState => ({
      query: newQuery,
      images: [],
      page: 1,
      randomId: nanoid(),
    })
    );
  }
  
  async componentDidUpdate(prevProps, prevState) {
    const newQuery = this.state.query;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page ||
      prevState.randomId !== this.state.randomId
    ) {
      const result = newQuery.slice(newQuery.indexOf('/') + 1);
      
      this.setState({ isLoading: true });

      try {
        const data = await getImages(result, this.state.page);
        
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          loading: false,
          loadedImgCount: Math.ceil(data.totalHits / 12),
        }));
      } catch (error) {
        console.error("Помилка при отриманні даних:", error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {

    return (
      <div>
        <div>
          <SearchBar onHandleQueryChange={this.handleQueryChange} />
        </div>
        <div>
          <ImageGallery images={this.state.images } />
        </div>
        <div>
          {this.state.loadedImgCount > 0 && this.state.loadedImgCount !== this.state.page && <Button onHandleLoadMore={this.handleLoadMore} />}
        </div>
        <div>
          {this.state.isLoading && <Loader />}
        </div>
      </div>
    );
  }
}
