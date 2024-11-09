import { Header } from '@/widgets'
import './Home.scss'

export function Home(): JSX.Element {
	return (
		<div className='page'>
			<div className='container'>
				<Header />

				<main className='content'>
					<div className='filter'></div>
					<div className='productList'></div>
				</main>
			</div>
		</div>
	)
}
