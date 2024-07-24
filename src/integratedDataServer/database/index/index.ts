export const getKey = <T>(key: string): T | null => {
    const dataString = localStorage.getItem(key);
    if (dataString === null) return null;
    return JSON.parse(dataString);
};

export const setKey = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const removeKey = (key: string): void => {
    localStorage.removeItem(key);
};
