import { User } from "@prisma/client"
import { request } from "./helpers"
import { PrismaClient } from '@prisma/client';
import { ApiUser, ApiUserBuilder }from '../../src/Models/user'
import { randomUUID } from "crypto";
import { json } from "stream/consumers";

const prisma = new PrismaClient();


beforeEach(async () => {
	await prisma.user.createMany({
		data: [
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5646", name: 'User A', password: 'password', email: 'user@example.com' },
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5647", name: 'User B', password: 'password', email: 'user@example.com' },
			{id:"5d11814f-50c3-4850-9034-c0c0b95f5648", name: 'User C', password: 'password', email: 'user@example.com' },
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
		const expected: ApiUser[] = [
			new ApiUserBuilder().withName('User A').withId('5d11814f-50c3-4850-9034-c0c0b95f5646').withPassword().withEmail().save(),
			new ApiUserBuilder().withName('User B').withId('5d11814f-50c3-4850-9034-c0c0b95f5647').withPassword().withEmail().save(),
			new ApiUserBuilder().withName('User C').withId('5d11814f-50c3-4850-9034-c0c0b95f5648').withPassword().withEmail().save()
		]

		// When
		const actual: User[] = sut.body

		//Then
		expect(actual).toStrictEqual(expected);
	})
})

describe("Get /users/:id", () => {
	it("Should get id", async () => {
		// Given
		const sut = await request.get('/users/5d11814f-50c3-4850-9034-c0c0b95f5646')

		// When
		const actual = sut.body

		//Then
		expect(actual.userId).toStrictEqual("5d11814f-50c3-4850-9034-c0c0b95f5646");
	})
})
