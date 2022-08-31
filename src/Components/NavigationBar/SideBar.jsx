import './LSideBar.css'
import {HelpOutline} from "@material-ui/icons";
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <i className="material-icons">account_circle</i>
                        <span className="sidebarListItemText">User Name</span>
                    </li>
                    <Link to={'chat'}>
                        <li className="sidebarListItem">
                            <i className="material-icons">question_answer</i>
                            <span className="sidebarListItemText">Messages</span>
                        </li>
                    </Link>

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