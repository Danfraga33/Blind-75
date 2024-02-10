var groupAnagrams = function (strs) {
	///Anagram Function
	isAnagram = function (w, t) {
		// Split into an arr
		const firstWord = w.split('').sort();
		const secondWord = t.split('').sort();
		// Sort Arrays
		if (firstWord.length !== secondWord.length) {
			return false;
		}

		for (let i = 0; i < firstWord.length; i++) {
			if (firstWord[i] !== secondWord[i]) {
				return false;
			}
		}
		return true;
	};

	// Each time an anagram is found, increase the index.
	let answer = [];
	let processed = new Set();

	for (let i = 0; i < strs.length; i++) {
		if (processed.has(i)) {
			continue;
		}
		// Processed
		let anagrams = [strs[i]];
		console.log(anagrams);
		for (let j = i + 1; j < strs.length; j++) {
			if (!processed.has(j) && isAnagram(strs[i], strs[j])) {
				anagrams.push(strs[j]);
				processed.add(j);
			}
		}
		answer.push(anagrams);
	}
	let noAnagrams = strs.filter((value, index) => !processed.has(index));
	return answer;
};
