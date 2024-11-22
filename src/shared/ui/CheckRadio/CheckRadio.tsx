import { ChangeEvent } from 'react'
import styles from './styles.module.scss'
import star from '@/shared/images/icons/rating.svg'

interface CheckRadioProps {
	value: string
	name: string
	type: 'checkbox' | 'radio'
	image?: boolean
	onChange?: (query: string, checked: boolean, type?: string) => void
}

export function CheckRadio({
	value,
	name,
	type,
	image,
	onChange,
}: CheckRadioProps): JSX.Element {
	const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
		if (!onChange) {
			return
		}
		let query = `${evt.target.name.toLowerCase()}`

		if (type === 'radio') {
			const dataset = evt.target.getAttribute('data-id')!
			query = dataset
		}

		onChange(query, evt.target.checked, type)
	}

	return (
		<label className={styles.label}>
			<span>{value}</span>
			{image && <img src={star} alt='Рейтинг' />}
			<input
				type={type}
				className='visually-hidden'
				name={name}
				value={value}
				data-id={value}
				onChange={handleChange}
			/>
		</label>
	)
}
