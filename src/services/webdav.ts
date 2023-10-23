import { IConfig } from './../types';
import { createClient as webDavCreateClient } from "webdav";

export function createClient(config: IConfig) {
    // TODO: add auth
    return webDavCreateClient(config.server);
}