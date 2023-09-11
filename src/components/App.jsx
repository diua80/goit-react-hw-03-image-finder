import React, { Component } from 'react';
import { SearchBar } from './searchBar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Loader } from './loader/Loader';
import { getImages } from '../api';
import { Button } from './button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    loadedImgCount: 0,
    // showLoadMoreButton: false,
  };

  handleSubmit = query => {
    console.log(query);
  };

  handleQueryChange = newQuery => {
    console.log(newQuery);
  this.setState({
    query: `${Date.now()}/${newQuery}`,
    images: [],
    page: 1,
  });
};

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) { 
      let index = this.state.query.indexOf('/');
      let result = this.state.query.slice(index + 1);
      this.setState({ isLoading: true });
      try {
        const data = await getImages(result, this.state.page);
        this.setState({ images: data.hits });
        this.setState({ loadedImgCount: data.totalHits -12 });
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
          {this.state.loadedImgCount > 0 && <Button onHandleLoadMore={this.handleLoadMore} />}
        </div>
        <div>
          {this.state.isLoading && <Loader />}
        </div>
      </div>
    );
  }
}
