import { CheckRadio } from '@/shared/ui'
import styles from './styles.module.scss'
import cn from 'classnames'
import {
	Available,
	Brand,
	Categories,
	FilterEnum,
	Promotion,
	Rating,
} from '../model'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ratings = Array.from(Array(5), (_, index) => index + 1)

const fields = {
	[FilterEnum.Available]: Available,
	[FilterEnum.Brand]: Brand,
	[FilterEnum.Categories]: Categories,
	[FilterEnum.Promotion]: Promotion,
	[FilterEnum.Rating]: Rating,
}

interface Props {
	title: string
	filter: FilterEnum
	type: 'checkbox' | 'radio'
}

export function FilterFieldset({ filter, title, type }: Props) {
	const [values] = useState(fields[filter])
	const [list, setList] = useState<string[]>([])
	const navigate = useNavigate()

	const onChange = (query: string, checked: boolean) => {
		if (checked) {
			setList(prev => [...prev, query])
			return
		}

		setList(prev => prev.filter(item => item !== query))
	}

	//TODO
	useEffect(() => {
		if (list.length) {
			navigate(`/?${filter}=${list.join('|')}`)
			return
		}

		navigate('/')
	}, [filter, list, navigate])

	if (type === 'checkbox') {
		return (
			<fieldset className={cn(styles.fieldset, styles.double)} name={filter}>
				<legend className={styles.legend}>{title}</legend>
				{Object.entries(values).map(([key, value]) => (
					<CheckRadio
						key={key}
						value={value}
						name={key}
						type={type}
						onChange={onChange}
					/>
				))}
			</fieldset>
		)
	}

	return (
		<fieldset className={cn(styles.fieldset, styles.rating)}>
			<legend className={styles.legend}>Рейтинг</legend>
			{ratings.map(rate => (
				<CheckRadio
					key={rate}
					value={rate.toString()}
					name={'rating'}
					type={'radio'}
					image
					onChange={onChange}
				/>
			))}
		</fieldset>
	)
}
