const awesomeDevelopers = [ 'Trevor' ];

const isDevAwesome = (devName) => awesomeDevelopers.includes(devName);

const developerStatus = (name) => `${name} ${isDevAwesome(name) ? 'is' : 'is NOT'} an awesome developer!`;

export { developerStatus };
