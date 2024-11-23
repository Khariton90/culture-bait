import { ProductInCart } from '@/entities/Product'
import { Address, User } from '@/entities/User'

enum PaymentMethod {
	Onsite = 'onsite',
	InPerson = 'inPerson',
}

enum OrderStatus {
	Pending = 'pending',
	Processing = 'processing',
	Shipped = 'shipped',
	Delivered = 'delivered',
	Canceled = 'canceled',
}

export type OrderId = number

export interface Order {
	id: OrderId
	paymentMethod: PaymentMethod
	email: string
	phone: string
	products: ProductInCart[]
	amount: number
	finalPrice: number
	user: User
	status: OrderStatus
	shippingAddress: Address
	notes: string
	createdAt: Date
	updatedAt: Date
}
