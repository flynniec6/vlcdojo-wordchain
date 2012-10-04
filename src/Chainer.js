function Chainer(initial,final) {
 this._initialWord=initial;
 this._finalWord=final;
}

Chainer.prototype.initialWord = function() {
	return this._initialWord;
};

Chainer.prototype.finalWord = function(){
	return this._finalWord;
};

Chainer.prototype._inDictionary = function(word){
	var result=false;
	for (var i = 0 ; i < dict.length ; i++) {
		if (dict[i]===word) result=true;
	};
	return result;
};

Chainer.prototype.isValid = function(){
	var sameLength = (this._finalWord.length == this._initialWord.length);
	return sameLength;
};

Chainer.prototype.isOKDictionary = function() {
	var areInDictionary = (this._inDictionary(this._initialWord)) && (this._inDictionary(this._finalWord));
	return areInDictionary;
};

Chainer.prototype.isDone = function() {
	var endChain = (this._initialWord === this._finalWord);
	return endChain;
};

Chainer.prototype.candidates = function() {
	var mutator = new Mutator(this._initialWord);
	var cand = mutator.candidates();
	return cand;
};