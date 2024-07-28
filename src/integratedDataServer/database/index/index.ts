const wrapPromise = <T>(provider: () => T) => {
    return new Promise<T>((resolve, reject) => {
        try {
            const data: T = provider();
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
};

export const getKey = <T>(key: string): T | null => {
    const dataString = localStorage.getItem(key);
    if (dataString === null) return null;
    return JSON.parse(dataString);
};

export const getKeyAsync = <T>(key: string): Promise<T | null> => {
    return wrapPromise(() => getKey<T>(key));
};

export const setKey = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const setKeyAsync = async <T>(key: string, data: T): Promise<void> => {
    return wrapPromise(() => setKey(key, data));
};

export const removeKey = (key: string): void => {
    localStorage.removeItem(key);
};

export const removeKeyAsync = (key: string): Promise<void> => {
    return wrapPromise(() => removeKey(key));
};
