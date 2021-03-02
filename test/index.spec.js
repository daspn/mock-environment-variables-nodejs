const { expect } = require('chai');
const mock = require('mock-require');

let getToggleStatus;

describe('toggle on', () => {
    beforeEach(() => {
        mock('../env', {
            TOGGLE_ENABLED: 'true'
        });
        getToggleStatus = mock.reRequire('../getToggleStatus');
    })
    afterEach(() => {
        mock.stopAll();
    });
    it('should return on', () => {
        const status = getToggleStatus();
        expect(status).to.eq('on');
    });
})

describe('toggle off (explicitly)', () => {
    beforeEach(() => {
        mock('../env', {
            TOGGLE_ENABLED: 'false'
        });
        getToggleStatus = mock.reRequire('../getToggleStatus');
    });
    afterEach(() => {
        mock.stopAll();
    });
    it('should return off', () => {
        const status = getToggleStatus();
        expect(status).to.eq('off');
    });
});

describe('toggle off (implicitly)', () => {
    beforeEach(() => {
        getToggleStatus = mock.reRequire('../getToggleStatus');
    });
    it('should return off', () => {
        const status = getToggleStatus();
        expect(status).to.eq('off');
    });
});
