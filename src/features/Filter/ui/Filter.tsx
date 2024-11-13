import { Box, Button, Slider } from '@mui/material'
import { useState } from 'react'
import { Categories, Available, Brand, Promotion } from '../model'
import { CheckRadio } from '@/shared/ui'
import styles from './styles.module.scss'
import cn from 'classnames'

const MIN_PRICE = 0
const MAX_PRICE = 10000

const ratings = Array.from(Array(5), (_, index) => index + 1)

function valuetext(value: number) {
	return `${value}`
}

export function Filter(): JSX.Element {
	const [value, setValue] = useState<number[]>([MIN_PRICE, MAX_PRICE])

	const handleChange = (_evt: Event, newValue: number | number[]) => {
		setValue(newValue as number[])
	}

	return (
		<div className={styles.filter}>
			<form className={styles.form}>
				<h3 className={styles.title}>Фильтр</h3>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Лучшие предложения</legend>
					{Object.entries(Promotion).map(([key, value]) => (
						<CheckRadio key={key} value={value} name={key} type={'checkbox'} />
					))}
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Категории</legend>
					{Object.entries(Categories).map(([key, value]) => (
						<CheckRadio key={key} value={value} name={key} type={'checkbox'} />
					))}
				</fieldset>

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

				<fieldset className={cn(styles.fieldset, styles.rating)}>
					<legend className={styles.legend}>Рейтинг</legend>
					{ratings.map(rate => (
						<CheckRadio
							key={rate}
							value={rate.toString()}
							name={'rating'}
							type={'radio'}
							image
						/>
					))}
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Наличие</legend>
					{Object.entries(Available).map(([key, value]) => (
						<CheckRadio key={key} value={value} name={key} type={'checkbox'} />
					))}
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Бренд</legend>
					{Object.values(Brand).map(value => (
						<CheckRadio
							key={value}
							value={value}
							name={value}
							type={'checkbox'}
						/>
					))}
				</fieldset>

				<Button color='primary' type={'button'} variant='outlined' size='large'>
					Очистить фильтр
				</Button>
			</form>
		</div>
	)
}
