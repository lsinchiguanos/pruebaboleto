import { createLogger, format, info, transports } from "winston"
const { File, Console} = transports;
const logger = createLogger({
    level: 'info'
});

const errorStackFormat = format((info: any) => {
    if (info.stack) {
        console.log(info.stack);
        return false;
    }
    return info;
});

const consoleTransport = new Console({});

logger.add(consoleTransport);

export default logger;