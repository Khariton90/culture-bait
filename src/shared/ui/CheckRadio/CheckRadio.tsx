import styles from './styles.module.scss'
import star from '@/shared/images/icons/rating.svg'

interface CheckRadioProps {
	key: string | number
	value: string
	name: string
	type: 'checkbox' | 'radio'
	image?: boolean
}

export function CheckRadio({
	key,
	value,
	name,
	type,
	image,
}: CheckRadioProps): JSX.Element {
	return (
		<label key={key} className={styles.label}>
			<span>{value}</span>
			{image && <img src={star} alt='Рейтинг' />}
			<input
				type={type}
				className='visually-hidden'
				name={name}
				value={value}
			/>
		</label>
	)
}
