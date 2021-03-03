const { expect } = require('chai');
const mock = require('mock-require');

function resetSystemUnderTestCache() {
    delete require.cache[require.resolve('../getToggleStatus')];
}

describe('toggle on', () => {
    beforeEach(() => {
        resetSystemUnderTestCache();
        mock('../env', {
            TOGGLE_ENABLED: 'true'
        });
    })
    afterEach(() => {
        mock.stopAll();
    });
    it('should return on', () => {
        const getToggleStatus = require('../getToggleStatus');
        const status = getToggleStatus();
        expect(status).to.eq('on');
    });
});

describe('toggle off (explicitly)', () => {
    beforeEach(() => {
        resetSystemUnderTestCache();
        mock('../env', {
            TOGGLE_ENABLED: 'false'
        });

    });
    afterEach(() => {
        mock.stopAll();
    });
    it('should return off', () => {
        const getToggleStatus = require('../getToggleStatus');
        const status = getToggleStatus();
        expect(status).to.eq('off');
    });
});

describe('toggle off (implicitly)', () => {
    beforeEach(() => {
        resetSystemUnderTestCache();
    });
    it('should return off', () => {
        const getToggleStatus = require('../getToggleStatus');
        const status = getToggleStatus();
        expect(status).to.eq('off');
    });
});
