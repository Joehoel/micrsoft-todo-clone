import All from "@material-ui/icons/AllInclusive";
import Planned from "@material-ui/icons/EventNote";
import ListIcon from "@material-ui/icons/List";
import Sun from "@material-ui/icons/WbSunny";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../contexts";
import { db } from "../firebase";
import { SET_ACTIVE_LIST } from "../reducers";
import NewList from "./NewList";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import SidebarUser from "./SidebarUser";

function Sidebar() {
	const [{ user }, dispatch] = useStateValue();
	const [lists, setLists] = useState([]);

	useEffect(() => {
		db.collection("lists").onSnapshot(snapshot => {
			const lists = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});

			setLists(lists.filter(list => list.uid === user.uid));
		});
	}, [user.uid]);

	return (
		<div className="sidebar">
			<SidebarUser
				displayName={user?.displayName}
				photoURL={user?.photoURL}
				email={user?.email}
			/>
			<div className="sidebar__items">
				<div className="sidebar__items__smart">
					<SidebarItem Icon={Sun} text="My Day" />
					<SidebarItem Icon={Planned} text="Planned" />
					<SidebarItem Icon={All} text="All" />
				</div>
				<hr />
				<div className="sidebar__items__lists">
					{lists?.map(list => (
						<SidebarItem
							onClick={() =>
								dispatch({
									type: SET_ACTIVE_LIST,
									activeList: list,
								})
							}
							Icon={ListIcon}
							text={list.name}
							key={list.id}
						/>
					))}
					<NewList />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
