describe("Chainer", function() {
	var chainer;
	
	beforeEach(function() {
	});
	
	it("knows initial and final word", function() {
		chainer = new Chainer("initialWord","finalWord");
		expect(chainer.initialWord()).toEqual("initialWord");
		expect(chainer.finalWord()).toEqual("finalWord");
	});
	
	it("checks that initial and final word are same length", function() {	 
		dict = ["abcde","abcdef","bcda","abcd"];
		var chainer= new Chainer("abcde","abcdef");
		expect(chainer.isValid()).toBeFalsy();
		chainer= new Chainer("abcd","bcda");
		expect(chainer.isValid()).toBeTruthy();
	});

	it("checks that initial and final word are in the dictionary", function() {	 
		dict = ["abcde","abcdef","bcda","abcd"];
		
		var chainer = new Chainer("abcde","abcdef");
		expect(chainer.isOKDictionary()).toBeTruthy();
		var chainer = new Chainer("ijekf","Adfefd");
		expect(chainer.isOKDictionary()).toBeFalsy();
		var chainer = new Chainer("abcde","Adfefd");
		expect(chainer.isOKDictionary()).toBeFalsy();
		var chainer = new Chainer("ijekf","abcde");
		expect(chainer.isOKDictionary()).toBeFalsy();
	});

	describe("having valid starting words", function() {
		var chainer;
		
		beforeEach(function() {
			dict = ["love","cove","dove","live", "dive"];
		});
		
		it("marks end of chain", function() {
			chainer = new Chainer("initialWord","initialWord");
			expect(chainer.isDone()).toBeTruthy();
		});
		
		it("finds next step candidates", function() {
			var chainer = new Chainer ("love", "hate");
			expect(chainer.candidates().length).toEqual(3);
			expect(chainer.candidates()).toContain("live");
			expect(chainer.candidates()).toContain("dove");
			expect(chainer.candidates()).toContain("cove");
		});
		
		describe("with a group of candidate words", function() {
			beforeEach(function() {
				dict = ["love","cove","dove","live", "dive"];
				cand = ["live", "dove", "cove"];
			});

		
		});
		
	});
});