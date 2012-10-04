describe("Mutator", function() {
	var mutator;
	
	beforeEach(function() {
	});
	
	it("knows initial word", function() {
		mutator = new Mutator("initialWord");
		expect(mutator.initialWord()).toEqual("initialword");
	});
	
	it("stores word length", function() {	 
		dict=["abcde","abcdef","bcda","abcd"];
		var mutator= new Mutator("abcde");
		expect(mutator.workLength()).toEqual(5);
	});
	
	it("checks that initial word is in the dictionary", function() {  
		dict = ["aBord","aWord"];
		var mutator= new Mutator("aWord");
		expect(mutator.isValid()).toBeTruthy();
		var mutator= new Mutator("bWord");
		expect(mutator.isValid()).toBeFalsy();
	});
	
	describe("having init conditions OK", function() {

		it("finds candidates of same length", function(){
			dict=["love","hate","move","moves","cove"];
			var mutator= new Mutator("love");
			expect(mutator.candidates().length).toEqual(2);
			expect(mutator.candidates()).toContain("move");
			expect(mutator.candidates()).toContain("cove");
		});
		
		it("finds candidates not matching initial parameters", function(){
			dict=["love","hate","move","moves","cove"];
			var mutator= new Mutator("love");
			expect(mutator.candidates()).not.toContain("love");
			expect(mutator.candidates()).not.toContain("hate");
		});
		
		it("finds candidates different by one letter", function(){
			dict=["love","hate","move","moves","cove", "cave"];
			var mutator= new Mutator("love");
			expect(mutator.candidates()).not.toContain("cave");
		});
		
	});	// init conditions OK
});