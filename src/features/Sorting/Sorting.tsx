import { CheckRadio } from '@/shared/ui'
import styles from './styles.module.scss'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

export function Sorting(): JSX.Element {
	return (
		<div className={styles.sorting}>
			<span>
				<b>Сортировать:</b>
			</span>

			<CheckRadio
				key={'price'}
				value={'по цене'}
				name={'sorting'}
				type={'radio'}
			/>

			<CheckRadio
				key={'price'}
				value={'по популярности'}
				name={'sorting'}
				type={'radio'}
			/>

			<CheckRadio
				key={'price'}
				value={'по отзывам'}
				name={'sorting'}
				type={'radio'}
			/>

			<CheckRadio
				key={'price'}
				value={'по рейтингу'}
				name={'sorting'}
				type={'radio'}
			/>

			<div>
				<a href='' datatype='down'>
					<ArrowCircleDownIcon />
				</a>
				<a href=''>
					<ArrowCircleUpIcon />
				</a>
			</div>
		</div>
	)
}
