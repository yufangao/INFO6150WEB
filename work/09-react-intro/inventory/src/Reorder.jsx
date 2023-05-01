function Reorder({ onReorder }) {
    return (
        <span className="reorder">
            <button
                type="button"
                onClick={ () => onReorder() }
            >Reorder</button>
        </span>
    );
}

export default Reorder;