import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import packageJson from '../package.json' assert { type: 'json' }

const theme = create({
	base: 'light',
	brandTitle: packageJson.name,
	brandImage: '/banner.png',
})

addons.setConfig({ theme })
