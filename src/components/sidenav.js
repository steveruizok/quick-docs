/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Sidenav } from '@theme-ui/sidenav'

import SidebarLink from './sidebar-link'
import Content from '../../content/nav/sidebar.mdx'

export default React.forwardRef((props, ref) => (
	<Sidenav
		{...props}
		components={{
			a: SidebarLink,
		}}
		ref={ref}
		sx={{
			width: 208,
			mr: 3,
			flex: 'none',
			px: 3,
			pt: 3,
			pb: 4,
			mt: [77, 0],
		}}
	>
		<Content />
	</Sidenav>
))
