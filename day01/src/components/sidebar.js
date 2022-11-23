import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function MySidebar() {
    return(
        <div id="header">
			  <Sidebar>
				  <Menu>
				    <SubMenu label="Charts">
				      <MenuItem> Pie charts </MenuItem>
				      <MenuItem> Line charts </MenuItem>
				    </SubMenu>
				    <MenuItem> Documentation </MenuItem>
				    <MenuItem> Calendar </MenuItem>
					 <MenuItem> Calculator </MenuItem>
					 <MenuItem> Schedule </MenuItem>
					 <MenuItem> Workflow </MenuItem>
				  </Menu>
				</Sidebar>
		  </div>
    )
}

export default MySidebar;
