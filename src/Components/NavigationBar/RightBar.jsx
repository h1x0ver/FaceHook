import './LSideBar.css'

 function RightBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                       <span className="material-icons">add</span>

                        <span className="sidebarListItemText">Create Group</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default RightBar