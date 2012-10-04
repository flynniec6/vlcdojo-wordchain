function Mutator(initial,final) {
 this._initialWord=initial;
 this._finalWord=final;
 this._currentStep=initial;
}

Mutator.prototype.initialWord = function() {
	return this._initialWord;
};

Mutator.prototype.finalWord = function(){
	return this._finalWord;
};

Mutator.prototype.isValid = function(){

	var sameLength=(this._finalWord.length == this._initialWord.length);
	var notEqual=!(this._finalWord === this._initialWord);

	return sameLength && notEqual;
};


Mutator.prototype.candidates = function(){
	var candidates = [];
	for (var i = 0 ; i < dict.length ; i++) {
		if (this.isCandidate(dict[i]))candidates.push(dict[i]);
	};
	return candidates;
};


Mutator.prototype.isCandidate = function(word){
	var sameLength=(word.length == this._initialWord.length);
	
	return sameLength && this._notInInitialDupla(word) && this._oneLetterDiff(word);
};


Mutator.prototype._notInInitialDupla = function(word){
	
	var notInitial=!(this._initialWord === word);
	var notFinal=!(word === this._finalWord);
	
	return notInitial && notFinal;
};

Mutator.prototype._oneLetterDiff = function(word){
	var diffs = 0;
	for (var i = 0 ; i < word.length ; i++) {
		if (this._currentStep[i] != word[i]) diffs++;
	};
	return diffs == 1;
};

Mutator.prototype.setStep = function(word){
	this._currentStep=word;
};
