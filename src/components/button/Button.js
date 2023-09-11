export const Button = ({ onHandleLoadMore }) => {
    return (
        <div className="Button-wrapper">
            <button onClick={onHandleLoadMore} className="Button">Load more</button>
        </div>
    )
}