import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { CustomTabPanel } from './CustomTabPanel'

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

interface Props {
	description: string
}

export function BasicTabs({ description }: Props): JSX.Element {
	const [value, setValue] = useState(0)

	const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='basic tabs'
					centered
					variant='fullWidth'
					indicatorColor='primary'
				>
					<Tab label='Описание' {...a11yProps(0)} />
					<Tab label='Детали' {...a11yProps(1)} />
					<Tab label='Отзывы' {...a11yProps(2)} />
				</Tabs>
			</Box>
			{[0, 1, 2].map(element => (
				<CustomTabPanel value={value} index={element} key={element}>
					{description}
				</CustomTabPanel>
			))}
		</Box>
	)
}
