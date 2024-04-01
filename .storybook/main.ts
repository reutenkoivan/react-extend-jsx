import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	staticDirs: ['assets'],
	stories: ['../src/**/*.stories.tsx'],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
		docsMode: true,
		defaultName: 'Documentation',
	},
}

export default config
