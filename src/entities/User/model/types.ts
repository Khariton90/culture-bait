export type UserId = number

export interface Address {
	city: string
	street: string
	entrance: string
	apartment: string
	floor: string
}

export interface BaseUser {
	address?: Address
}

export interface RegisteredUser extends BaseUser {
	userId: string
	name: string
}

export interface GuestUser extends BaseUser {
	guestToken: string
	isGuest: true
}

export type User = RegisteredUser | GuestUser
