const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = false;

    if (Array.isArray(members)) {
        let teamNameArr = members.reduce((teamName, name) => {
            if (typeof(name) === 'string') {
                teamName.push(name.trim()[0].toUpperCase());
            }

            return teamName
        }, []);

        if (teamNameArr !== []) {
            result = teamNameArr.sort().join('');
        }
    }

    return result;
};
