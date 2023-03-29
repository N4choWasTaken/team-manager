import { request } from "./helpers"

interface iResult {
	message: String,
	status: Number
}

describe("Get /", () => {
	it("Should get Hello World with status code 200", async () => {
		// Given
		const sut = await (await request.get('/'))
		const expected: iResult = { message: "Hello World", status: 200 }

		// When
		const actual: iResult = { message: sut.body.message, status: sut.statusCode }

		//Then
		expect(actual).toStrictEqual(expected);
	})
})
