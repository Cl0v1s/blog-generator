// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import configURL from '/config.json?url';

export async function fetchConfig() {
    const configRequest = await fetch(configURL);
    return configRequest.json();
}