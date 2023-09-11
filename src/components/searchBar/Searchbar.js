import '../../styles.css';

export const SearchBar = ({ onHandleQueryChange }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const queryValue = evt.target.elements.query.value.trim();
    if (queryValue) {
      onHandleQueryChange(queryValue);
    evt.target.reset();
    } else {
      alert("Введіть запит перед надсиланням форми");
    }
    
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit">
          <span className="SearchForm-button"></span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
