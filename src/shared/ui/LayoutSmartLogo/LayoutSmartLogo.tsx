import styles from './styles.module.scss'
import logoIcon from '@/shared/assets/logo.svg'

export function LayoutSmartLogo(): JSX.Element {
	return (
		<a href='/' className={styles.logo}>
			<img src={logoIcon} alt='Логотип' />
		</a>
	)
}
