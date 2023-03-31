import { User } from "@prisma/client"
import { request } from "./helpers"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


beforeEach(async () => {
	await prisma.user.createMany({
		data: [
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5646", name: 'User A', password: 'password', email: 'usera@example.com' },
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5647", name: 'User B', password: 'password', email: 'userb@example.com' },
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5648", name: 'User C', password: 'password', email: 'userc@example.com' },
		  ],
		  skipDuplicates: true,
	})
})

afterEach(async () => {
	await prisma.user.deleteMany()
});

describe("Get /users", () => {
	it("Should get all users", async () => {
		// Given
		const sut = await request.get('/users')
		const expected: User[] = [
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5646", name: 'User A', password: 'password', email: 'usera@example.com' },
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5647", name: 'User B', password: 'password', email: 'userb@example.com' },
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5648", name: 'User C', password: 'password', email: 'userc@example.com' }
		]

		// When
		const actual: User[] = sut.body

		//Then
		expect(actual).toStrictEqual(expected);
	})
})
