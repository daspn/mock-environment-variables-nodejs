const { TOGGLE_ENABLED } = require('./env');

module.exports = () => {
    if (TOGGLE_ENABLED === 'true') {
        return "on";
    } else {
        return "off";
    }
};
