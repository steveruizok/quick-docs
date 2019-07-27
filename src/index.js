import React from 'react'
import { ThemeProvider, Styled } from 'theme-ui'
import components from './components'
import theme from './theme'

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme} components={components}>
		<Styled.root>{element}</Styled.root>
	</ThemeProvider>
)
