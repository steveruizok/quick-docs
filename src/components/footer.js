/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import Content from '../../content/nav/footer.mdx'

export default ({ menuOpen, setMenuOpen, nav }) => {
	return (
		<footer>
			<Container
				sx={{
					my: 6,
					pt: 4,
					px: [3, 0],
					borderTopWidth: '1px',
					borderTopStyle: 'solid',
					borderTopColor: '#000',
				}}
			>
				<MDXProvider>
					<Content />
				</MDXProvider>
			</Container>
		</footer>
	)
}
