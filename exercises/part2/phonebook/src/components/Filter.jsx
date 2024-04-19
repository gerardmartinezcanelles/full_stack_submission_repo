const Filter = ( props ) => {
    return (
        <form>
            <div>
            filter show with: <input
                value={props.filter}
                onChange={props.handleFilter}
            />
            </div>
        </form>
    )
}
  
export default Filter