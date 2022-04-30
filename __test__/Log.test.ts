import '@testing-library/jest-dom'
import LoggerFactory from '../lib/Log';
import {LogLevel} from '../types/Logger';

describe('Logger', () => {
    it('Logger init namespace', () => {
        LoggerFactory.init({
            appName: 'test-app',
        });
        const Log = LoggerFactory.initNS('test-page');
        expect(Log.getLogPrefix('ERROR')).toBe('[ERROR].[test-app].[test-page]');
        expect(Log.getLogPrefix('INFO')).toBe('[INFO].[test-app].[test-page]');
        expect(Log.getLogPrefix('WARN')).toBe('[WARN].[test-app].[test-page]');
    })
})