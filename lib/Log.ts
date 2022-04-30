import {
    Logger,
    LoggerManagerInitParams,
    LogLevel,
} from '../types/Logger';

function formatLog(logLevel: LogLevel, prefix: string, ...data: any[]) {
    switch (logLevel) {
        case 'INFO':
            console.log(`%c${prefix}`, 'color: green', ...data);
            break;
        case 'WARN':
            console.warn(`%c${prefix}`, 'color: yellow', ...data);
            break;
        case 'ERROR':
            console.error(`%c${prefix}`, 'color: red', ...data);
            break;
        default:
            console.log(prefix, ...data);
    }
}


class LogOptionManager {
    private appName: string = '';
    private defaultLogFn: ((...data: any[]) => void) | undefined;
    public init(option: LoggerManagerInitParams): void {
        const { appName, log } = option;
        if (appName) {
            this.appName = appName
        }
        if (log) {
            this.defaultLogFn = log;
        }
    }
    public getAppName(): string {
        return this.appName
    }

    public log(logLevel: LogLevel, ...data: any[]): void {
        if (this.defaultLogFn) {
            this.defaultLogFn(logLevel, ...data)
        } else {
            const [prefix, ...rest ] = data;
            formatLog(logLevel, prefix,  ...rest)
        }
    }
}

const logOptionManager = new LogOptionManager();


class LocalLogger implements Logger {
    private readonly namespace: string = '';
    constructor(componentName: string) {
        const appName = logOptionManager.getAppName();
        this.namespace = `[${appName}].[${componentName}]`;
    }
    error(...data: any[]): void {
        logOptionManager.log('ERROR', this.getLogPrefix('ERROR'), ...data)
    }

    info(...data: any[]): void {
        logOptionManager.log('INFO', this.getLogPrefix('INFO'), ...data)
    }

    warn(...data: any[]): void {
        logOptionManager.log('WARN', this.getLogPrefix('WARN'), ...data)
    }

    getLogPrefix(logLevel: LogLevel): string {
        return `[${logLevel}].${this.namespace}`;
    }

    getLogNamespace(): string {
        return this.namespace
    }
}

const LoggerFactory = {
    init(option: LoggerManagerInitParams): void {
        logOptionManager.init(option)
    },
    initNS(componentName: string) {
        return new LocalLogger(componentName)
    },
};

export default LoggerFactory;