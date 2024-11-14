import { ChangeEvent, useEffect, useState } from 'react'
import previewImage from '@/shared/images/preview.png'
import styles from './styles.module.scss'

export function ProductPreview(): JSX.Element {
	const [selectedFile, setSelectedFile] = useState<Blob | undefined>()
	const [preview, setPreview] = useState<string | undefined>()

	const [imageList, setImageList] = useState<string[]>(['', '', '', '', ''])

	const handleChangePreviewImage = (evt: ChangeEvent<HTMLInputElement>) => {
		if (!evt.target.files) {
			setSelectedFile(undefined)
			return
		}

		if (evt.target.files[0]) {
			setSelectedFile(evt.target.files[0])
		}
	}

	const changeMainImage = (image: string, index: number) => {
		setPreview(() => image)
	}

	useEffect(() => {
		if (!selectedFile) {
			setPreview(undefined)
			return
		}

		if (selectedFile) {
			const objectUrl = URL.createObjectURL(selectedFile)
			setPreview(() => objectUrl)

			return () => URL.revokeObjectURL(objectUrl)
		}
	}, [selectedFile])

	return (
		<div className={styles.preview}>
			<div className={styles.previewWrapper}>
				<div className={styles.card}>
					<div className={styles.mainImage}>
						<img src={preview || previewImage} alt='preview' />
					</div>
				</div>
				<div className={styles.previewList}>
					{imageList.map((image, index) => (
						<div
							className={styles.previewItem}
							onClick={() => changeMainImage(image, index)}
						>
							<img src={image || previewImage} alt='Preview' />
						</div>
					))}
				</div>
			</div>
			<div className={styles.previewControls}>
				<button>
					Добавить
					<input
						type='file'
						required
						accept='.jpg, .jpeg, .png'
						className={styles.file}
						onChange={handleChangePreviewImage}
					/>
				</button>

				<button>Удалить</button>
			</div>
		</div>
	)
}
