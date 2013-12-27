describe('lifemite', function() {

    it('should have app object', function() {
        expect(app).toBeDefined();
    });

    describe('app', function() {
        it('should have router', function() {
            expect(app.router).toBeDefined();
        });

        it("should contain settings", function () {
            expect(app.settings).toBeDefined();
        });


    });
});
