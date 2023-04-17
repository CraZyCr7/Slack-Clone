import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import { Add, Apps, BookmarkBorder, Comment, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, PeopleAlt } from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import db from "./firebase";
import { useStateValue } from './StateProvider';
function Sidebar() {

  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    // Run this once code when the sidebar component loads
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }))
        )
    ))
  },[])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>CraZyCr7</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create/>
      </div>
        <SidebarOption Icon={Comment} title="Threads"/>
        <SidebarOption Icon={Inbox} title="Mentions & Reactions"/>
        <SidebarOption Icon={Drafts} title="Saved items"/>
        <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
        <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
        <SidebarOption Icon={Apps} title="Apps"/>
        <SidebarOption Icon={FileCopy} title="File browser"/>
        <SidebarOption Icon={ExpandLess} title="Show less"/>
        <hr/>
        <SidebarOption Icon={ExpandMore} title="Channels"/>
        <hr/>
        <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>

        {/* Connect to Db and list all the channels  */}
        {/* SIdebarOption By mapping with DB */}
        {channels.map((channel) => (
          <SidebarOption title={channel.name} id={channel.id}/>
        ))}
    </div>
  );
}

export default Sidebar