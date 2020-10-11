import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";
import SidebarUser from "./SidebarUser";
import Sun from "@material-ui/icons/WbSunny";
import Planned from "@material-ui/icons/EventNote";
import All from "@material-ui/icons/AllInclusive";
import ListIcon from "@material-ui/icons/List";
import { useStateValue } from "../contexts";
import { db } from "../firebase";
import NewList from "./NewList";
import { SET_ACTIVE_LIST } from "../reducers";

function Sidebar() {
	const [{ user }, dispatch] = useStateValue();
	const [lists, setLists] = useState([]);

	useEffect(() => {
		db.collection("lists").onSnapshot(snapshot => {
			setLists(
				snapshot.docs.map(doc => {
					return {
						id: doc.id,
						name: doc.data().name,
					};
				})
			);
		});
	}, []);

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
