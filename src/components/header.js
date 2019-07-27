/** @jsx jsx */
import { jsx, Header, Container, Flex } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'

import MenuButton from './menu-button'
import NavLink from './nav-link'
import Content from '../../content/nav/header.mdx'

const components = {
	a: NavLink,
}

const styles = {
	alignItems: 'center',
	width: '100%',
	m: 0,
	h1: {
		m: 0,
		fontSize: [3, 4],
		p: [2],
		lineHeight: 1,
		'& a': {
			fontSize: [3, 4],
			color: 'colors.text',
		},
	},
	ul: {
		my: 0,
		ml: 'auto',
		display: 'flex',
		listStyleType: 'none',
	},
	li: {
		my: 0,
		ml: 3,
	},
	pb: [0, 2],
}

export default ({ menuOpen, setMenuOpen, nav }) => {
	return (
		<Header>
			<Container
				sx={{
					px: [1, 3],
					position: ['fixed', 'static'],
					top: 0,
					left: 0,
					backgroundColor: '#FFFFFF',
					borderBottom: '1px solid #666',
				}}
			>
				<Flex sx={{ justifyContent: 'space-between', pt: [1, 2], px: [3, 0] }}>
					<Flex sx={styles}>
						<MenuButton
							sx={{ mr: 2 }}
							onClick={(e) => {
								setMenuOpen(!menuOpen)
								if (!nav.current) return
								const navLink = nav.current.querySelector('a')
								if (navLink) navLink.focus()
							}}
						/>
						<MDXProvider components={components}>
							<Content />
						</MDXProvider>
					</Flex>
				</Flex>
			</Container>
		</Header>
	)
}
