let merge = (a, b) => {
	return {
		...a,
		...b
	};
};

console.log(merge({a:1}, {b:2}));
