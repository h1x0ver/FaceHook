import '../../Style/LSideBar.css'
import {
    Chat,
    Group,
    Bookmark,
    HelpOutline,
    School,
} from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i className="material-icons">account_circle</i>
                        <span className="sidebarListItemText">User Name</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="material-icons">question_answer</i>

                        <span className="sidebarListItemText">Messages</span>
                    </li>

                    <li className="sidebarListItem">
                        <i className="material-icons">group_add</i>

                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="material-icons">bookmark</span>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>

                </ul>
            </div>
        </div>
    );
}