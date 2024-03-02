import PropTypes from 'prop-types';

function List(props) {
    // Extracting props
    const { category, items } = props;

    // Mapping the items to list elements
    const listItems = items.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.calories}</b>
        </li>
    );

    return (
        <>
            {/* Displaying the category name */}
            <h3 className="list-category">{category}</h3>
            {/* Displaying the list items */}
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

// Typechecking for props
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
};

// Default props in case they are not provided
List.defaultProps = {
    category: "Category",
    items: [],
};

export default List;
