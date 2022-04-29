import Monitor from '../lib/Monitor';
import '@testing-library/jest-dom'

describe('Monitor', () => {
    it('Monitor is Singleton', () => {
        const instance1 = Monitor.getInstance();
        const instance2 = Monitor.getInstance();
        expect(instance1).toEqual(instance2);
    })
})