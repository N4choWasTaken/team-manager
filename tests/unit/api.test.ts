import {request} from "./helpers"

interface iResult {
    message: String
} 

describe("Get /", () => {
    it("Should get Hello World",async () => {
        // Given
        const sut = await (await request.get('/'))
        const expected: iResult = {message: "Hello World"}
        
        // When
        const actual: iResult = sut.body

        //Then
        expect(actual).toStrictEqual(expected);
    })
})