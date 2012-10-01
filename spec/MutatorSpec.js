describe("Mutator", function() {
  var mutator;

  beforeEach(function() {
  });

  it("knows initial and final word", function() {
      mutator = new Mutator("initialWord","finalWord");
      expect(mutator.initialWord()).toEqual("initialWord");
      expect(mutator.finalWord()).toEqual("finalWord");
  });

  it("checks that initial and final word are same length", function() {  
      dict=["abcde","abcdef","bcda","abcd"];
      var mutator= new Mutator("abcde","abcdef");
      expect(mutator.isValid()).toBeFalsy();
      mutator= new Mutator("abcd","bcda");
      expect(mutator.isValid()).toBeTruthy();
  });

  it("checks that initial and final word aren't the same word", function() {  
      dict=["aBord","aWord"];
      var mutator= new Mutator("aWord","aWord");
      expect(mutator.isValid()).toBeFalsy();
      mutator= new Mutator("aWord","aBord");
      expect(mutator.isValid()).toBeTruthy();
  });

  it("checks that initial and final word are in the dictionary", function() {  
      dict=["love","hate"];
      var mutator= new Mutator("love","hate");
      expect(mutator.isValid()).toBeTruthy();
      mutator= new Mutator("lovz","hatz");
      expect(mutator.isValid()).toBeFalsy();
  });

  it("valid candidates are of same length", function(){
      dict=["love","hate","move","moves","cove"];
      var mutator= new Mutator("love","hate");
      expect(mutator.candidates().length).toEqual(2);
      expect(mutator.candidates()).toContain("move");
      expect(mutator.candidates()).toContain("cove");
  });

  it("valid candidates are not in the initial dupla", function(){
      dict=["love","hate","move","moves","cove"];
      var mutator= new Mutator("love","hate");
      expect(mutator.candidates()).not.toContain("love");
      expect(mutator.candidates()).not.toContain("hate");
  });

 it("finds valid candidates different by one letter", function(){
      dict=["love","hate","move","moves","cove", "cave"];
      var mutator= new Mutator("love","hate");
      expect(mutator.candidates()).not.toContain("cave");
  });

 it("uses the candidate supplied to find new candidates", function(){
      dict=["love","hate","move","moves","cove", "cave"];
      var mutator= new Mutator("love","hate");
      mutator.setStep("cove");
      expect(mutator.candidates()).not.toContain("cove");
      expect(mutator.candidates()).toContain("cave");
  });

 it("uses the candidate supplied to find new candidates", function(){
      dict=["love","hate","move","moves","cove", "cave"];
      var mutator= new Mutator("love","hate");
      mutator.setStep("cove");
      expect(mutator.candidates()).not.toContain("cove");
      expect(mutator.candidates()).toContain("cave");
  });

});