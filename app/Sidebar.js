import React from "react";
import styles from './Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

import {
	faBookOpen,
	faGauge,
	faTag,
    faUser,
	faNewspaper,
	faSquareFull,
	faEye,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
			<span style={{ cursor: "pointer" , color:"white" , textAlign: "center", fontSize:"22px" }}>دكتور عيون</span>
			<FontAwesomeIcon
							icon={faEye}
							style={{ width: "18px", cursor: "pointer" , color:"white" }}
						/>{" "}
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={faGauge}
							style={{ width: "18px", cursor: "pointer" , color:"white" }}
						/>{" "}
						<Link href="/">Dashboard</Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faNewspaper}
							style={{ width: "18px", cursor: "pointer" , color:"white" }}
						/>{" "}
						<Link href="/AddNewArticle">Article</Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faUser}
							style={{ width: "18px", cursor: "pointer", color:"white" }}
						/>{" "}
						<Link href="/AddNewUser">User</Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer", color:"white" }}
						/>{" "}
						<Link href="/AddNewPage">Add Page</Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSquareFull}
							style={{ width: "18px", cursor: "pointer", color:"white" }}
						/>{" "}
						<Link href="/AddNewCategory">Categories</Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faTag}
							style={{ width: "18px", cursor: "pointer", color:"white" }}
						/>{" "}
						<Link href="/AddNewTag">Add Tag</Link>
					</li>
					
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
