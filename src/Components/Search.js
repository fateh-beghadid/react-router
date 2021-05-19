const Search = (props) => {

    return (
        <div className="search-bar">
            <div className="search-fild">
                <input className="search" placeholder="Search"
                onChange={props.onChange} />
            </div>
            <div></div>
        </div>
    )
}
export default Search;