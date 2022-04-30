
export interface Logger {
    warn: (...data: any[]) => void;
    info: (...data: any[]) => void;
    error: (...data: any[]) => void;
}

export interface LoggerManagerInitParams {
    appName?: string;
    log?: (...data: any[]) => void;
}


export type LogLevel = 'INFO' | 'WARN' | 'ERROR';