import NavCategory from "./NavCategory";

const LeftNav = () => {

    return (
        <div>
            <h4>All Category</h4>
            <div className="d-flex flex-column">
                <NavCategory></NavCategory>
            </div>
        </div>
    );
};

export default LeftNav;