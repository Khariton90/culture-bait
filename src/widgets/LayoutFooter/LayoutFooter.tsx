import styles from './styles.module.scss'
import whatsapp from '@/shared/images/icons/whatsapp.svg'
import vk from '@/shared/images/icons/vk.svg'
import instagram from '@/shared/images/icons/instagram.svg'
import telegram from '@/shared/images/icons/telegram.svg'

export function LayoutFooter(): JSX.Element {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.bottom}>
					<p className={styles.copyright}>© 2024 «Культурная наживка»</p>

					<ul className={styles.list}>
						<li className='item'>
							<a href='#' target='_blank'>
								<img src={whatsapp} alt='whatsapp' />
							</a>
						</li>
						<li className='item'>
							<a href='#' target='_blank'>
								<img src={vk} alt='vk' />
							</a>
						</li>
						<li className='item'>
							<a href='#' target='_blank'>
								<img src={instagram} alt='instagram' />
							</a>
						</li>
						<li className='item'>
							<a href='#' target='_blank'>
								<img src={telegram} alt='telegram' />
							</a>
						</li>
					</ul>

					<a href='#'>Политика конфиденциальности</a>
				</div>
			</div>
		</footer>
	)
}
