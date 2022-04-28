
class MonitorManager {
    private hasInit: boolean = false;
    constructor() {}
    public count() {}
    public start() {}
    public init() {
        if (this.hasInit) {
            throw new Error('Monitor has bean init');
        }
    }
}

const Monitor = new MonitorManager();
export default Monitor;