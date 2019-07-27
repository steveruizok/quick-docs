module.exports = {
	siteMetadata: {
		title: 'Docs',
		description: 'Docs starter',
	},
	plugins: [
		'gatsby-plugin-meta-redirect',
		'gatsby-plugin-theme-ui',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-redirects',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				gatsbyRemarkPlugins: [
					'gatsby-remark-prismjs',
					'remark-slug',
					'remark-emoji',
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: 'content',
				name: 'content',
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Roboto`,
					},
					{
						family: `Roboto Mono`,
					},
				],
			},
		},
	],
}
