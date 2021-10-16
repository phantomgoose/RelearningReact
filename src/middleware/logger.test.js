const logger = require("./logger")
// @ponicode
describe("logger.default", () => {
    test("0", () => {
        let callFunction = () => {
            logger.default(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            logger.default(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            logger.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
