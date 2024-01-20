const { connect } = require('mongoose');

const urlDB = "mongodb://localhost:27017/astragames";

const conectWithMongoDB = async () => {
    try {
        return await connect(`${urlDB}`);
    } catch (err) {
        console.info(err);
    }
}

module.exports = { conectWithMongoDB };