import { createLogger, transports, format } from "winston";

const { combine, timestamp, label, printf, colorize } = format;
const PROJECT_NAME = process.env.PROJECT_NAME;
const TIME_ZONE = process.env.TIME_ZONE;
const LOCALES = process.env.LOCALES;

export const level = {
  error: "error",
  warn: "warn",
  info: "info",
};

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const timeZoned = () =>
  new Date().toLocaleString(LOCALES, {
    timeZone: TIME_ZONE,
  });

const Format = combine(
  label({ label: PROJECT_NAME }),
  timestamp({ format: timeZoned }),
  colorize(true),
  myFormat
);

const winstonLogger = createLogger({
  format: Format,
  transports: [new transports.Console()],
});

export const logger = {
  log: (log_level, message) => {
    switch (log_level) {
      case log_level:
        winstonLogger.log({ level: log_level, message: message });
        break;
      default:
        winstonLogger.log({ level: "info", message: message });
    }
  },
};
