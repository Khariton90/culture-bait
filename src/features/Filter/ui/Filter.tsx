import { Box, Button, Slider } from '@mui/material'
import { useState } from 'react'
import { FilterEnum } from '../model'
import styles from './styles.module.scss'
import { FilterFieldset } from './FilterFieldset'

const MIN_PRICE = 0
const MAX_PRICE = 10000

function valuetext(value: number) {
	return `${value}`
}

export function Filter(): JSX.Element {
	const [value, setValue] = useState<number[]>([MIN_PRICE, MAX_PRICE])

	const handleChange = (_evt: Event, newValue: number | number[]) => {
		setValue(newValue as number[])
	}

	return (
		<aside className={styles.filter}>
			<form className={styles.form}>
				<h3 className={styles.title}>Фильтр</h3>

				<FilterFieldset
					filter={FilterEnum.Promotion}
					title='Лучшие предложения'
					type='checkbox'
				/>

				<FilterFieldset
					filter={FilterEnum.Categories}
					title='Категории'
					type='checkbox'
				/>

				<fieldset className={styles.fieldset}>
					<legend className={styles.legend}>Цена</legend>
					<Box width={220}>
						<Slider
							getAriaLabel={() => 'Price range'}
							value={value}
							onChange={handleChange}
							valueLabelDisplay='auto'
							getAriaValueText={valuetext}
							min={MIN_PRICE}
							max={MAX_PRICE}
						/>
					</Box>
				</fieldset>

				<FilterFieldset
					filter={FilterEnum.Rating}
					title='Рейтинг'
					type='radio'
				/>

				<FilterFieldset
					filter={FilterEnum.Available}
					title='Наличие'
					type='checkbox'
				/>

				<FilterFieldset
					filter={FilterEnum.Brand}
					title='Бренд'
					type='checkbox'
				/>
				<Button color='primary' type={'button'} variant='outlined' size='large'>
					Очистить фильтр
				</Button>
			</form>
		</aside>
	)
}
