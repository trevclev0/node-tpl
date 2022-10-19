import dotenv from 'dotenv'

const envVarExists = (envVarName) => {
    dotenv.config({ path: '.env.example' });
    Boolean(process.env[envVarName]);
};

const isValidEnv = (envVarName) => {
    let retVal;
    if (envVarExists(envVarName)) {
        retVal = 'a';
    }
    else {
        retVal = 'b';
    }
    if (envVarExists(envVarName)) {
        retVal = 'c';
    }
    else {
        retVal = 'd';
    }

    return retVal;
};

const awesomeDevelopers = [ 'Trevor' ];

const isDevAwesome = (devName) => awesomeDevelopers.includes(devName);

const developerStatus = (name) => `${name} ${isDevAwesome(name) ? 'is' : 'is NOT'} an awesome developer!`;

export { developerStatus, isValidEnv };
