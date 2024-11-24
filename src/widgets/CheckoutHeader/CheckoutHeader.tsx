import { LayoutSmartLogo } from '@/shared/ui'
import { Stepper, Step, StepLabel } from '@mui/material'
import styles from './styles.module.scss'

export function CheckoutHeader(): JSX.Element {
	const steps = ['Корзина', 'Оформление заказа', 'Заказ принят']

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerTop}>
					<div className={styles.logo}>
						<LayoutSmartLogo />
					</div>

					<Stepper className={styles.stepper} activeStep={1} alternativeLabel>
						{steps.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</div>
			</div>
		</header>
	)
}
