import styles from './styles.module.scss'
import {
	Button,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { VerticalProductList } from '@/widgets'
import { useAppSelector } from '@/shared/hooks'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '@/shared/types'

export function CheckoutPage(): JSX.Element {
	const itemsMap = useAppSelector(({ CART_TAG }) => CART_TAG.itemsMap)
	const navigate = useNavigate()
	const productValues = Object.values(itemsMap)

	return (
		<div className={styles.main}>
			<div className='container'>
				<div className={styles.checkout}>
					<h1 className={styles.title}>Оформление заказа</h1>
					<div className={`${styles.content} ${styles.box}`}>
						<form className={styles.form}>
							<fieldset className={styles.fieldset}>
								<div className={styles.formRow}>
									<label className={styles.label} htmlFor=''>
										Имя
									</label>
									<input className={styles.input} type='text' />
								</div>

								<div className={styles.formRow}>
									<label className={styles.label} htmlFor=''>
										Номер телефона
									</label>
									<input className={styles.input} type='text' />
								</div>

								<div className={styles.formRow}>
									<label className={styles.label} htmlFor=''>
										Электронная почта
									</label>
									<input className={styles.input} type='email' />
								</div>

								<div className={styles.formRow}>
									<label className={styles.label} htmlFor=''>
										Комментарий к заказу
									</label>
									<textarea className={styles.textarea}></textarea>
								</div>
							</fieldset>
							<fieldset className={styles.fieldset}>
								<h2 className={styles.subTitle}>Способ оплаты</h2>
								<FormControl>
									<RadioGroup
										aria-labelledby='demo-radio-buttons-group-label'
										defaultValue='female'
										name='radio-buttons-group'
									>
										<FormControlLabel
											value='female'
											control={<Radio />}
											label='На сайте'
										/>
										<FormControlLabel
											value='male'
											control={<Radio />}
											label='В магазине'
										/>
									</RadioGroup>
								</FormControl>
							</fieldset>
							<div className={styles.formFooter}>
								<Button
									variant='outlined'
									startIcon={<KeyboardBackspaceIcon />}
									onClick={() => navigate(AppRoute.Home)}
								>
									Назад
								</Button>

								<Button
									type='button'
									variant='contained'
									size='large'
									sx={{ color: '#FFF' }}
								>
									Оформить заказ
								</Button>
							</div>
						</form>
					</div>
					<div className={styles.order}>
						<h3>Состав заказа</h3>
						<VerticalProductList products={productValues} />
					</div>
				</div>
			</div>
		</div>
	)
}
