import { Box, Button, Slider } from '@mui/material'
import { useState } from 'react'
import { Categories, Available, Brand, Promotion } from '../model'
import cn from 'classnames'
import star from '@/shared/images/icons/rating.svg'
import styles from './styles.module.scss'

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
					<legend className={styles.legend}>Категории</legend>
					{Object.entries(Categories).map(([key, value]) => (
						<label key={key} className={styles.label}>
							<span>{value}</span>
							<input
								type='checkbox'
								className='visually-hidden'
								name={key}
								value={value}
							/>
						</label>
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
						<label key={rate} className={styles.label}>
							<span>{rate}</span>
							<img src={star} alt='Рейтинг' />
							<input
								type='radio'
								className='visually-hidden'
								name={'rating'}
								value={rate}
							/>
						</label>
					))}
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Наличие</legend>
					{Object.entries(Available).map(([key, value]) => (
						<label key={key} className={styles.label}>
							<span>{value}</span>
							<input
								type='checkbox'
								className='visually-hidden'
								name={key}
								value={value}
							/>
						</label>
					))}
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Бренд</legend>
					{Object.values(Brand).map(value => (
						<label key={value} className={styles.label}>
							<span>{value}</span>
							<input
								type='checkbox'
								className='visually-hidden'
								name={value as string}
								value={value}
							/>
						</label>
					))}
				</fieldset>

				<fieldset className={cn(styles.fieldset, styles.double)}>
					<legend className={styles.legend}>Лучшие предложения</legend>
					{Object.entries(Promotion).map(([key, value]) => (
						<label key={key} className={styles.label}>
							<span>{value}</span>
							<input
								type='checkbox'
								className='visually-hidden'
								name={key}
								value={value}
							/>
						</label>
					))}
				</fieldset>

				<Button color='primary' type={'button'} variant='outlined' size='large'>
					Очистить фильтр
				</Button>
			</form>
		</div>
	)
}
