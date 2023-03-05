import "./sidebar.css"
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircle className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarListItemIcon" />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jonh Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Tery Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Mike Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jonh Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Tery Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Mike Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jane Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Jonh Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Tery Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Mike Doe</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
