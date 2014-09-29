describe("errors object", function() {
    var errors;
    beforeEach(function() {
        errors = Errors.create();
    });
    it("should exist", function() {
        expect(errors).toBeTruthy();
    });
    describe("throw method", function () {
        it("should add an error to the _errors array", function () {
            errors.throw("This is an error");
            expect(errors._errors[0].error).toBe("This is an error");
        });
    });
    describe("list method", function () {
        it("should return the _errors array", function () {
            errors.throw("This is an error");
            expect(errors.list()[0].error).toBe("This is an error");
        });
    });
    describe("clear method", function () {
        it("should clear the _errors array", function () {
            errors.throw("This is an error");
            errors.clear();
            expect(errors.list()[0]).toBeFalsy();
        });
    });
});
