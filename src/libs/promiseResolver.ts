/**
 * Resolves a promise by offering a read method, which can
 * either throw the promise, or return the response
 * @author https://www.codeyourpath.com/2024/03/31/react-suspense/
 * @author DragonOfShuu; edit for typescript
 * @param promise The promise to be evaluated
 * @returns The response from the promise
 * @throws A promise if still in process, or an error if unsuccessful
 */
function promiseResolver<T>(promise: Promise<T>) {
    let status = "pending";
    let response: T;

    promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        },
    );

    const read = () => {
        if (status === "pending") throw promise;
        if (status === "error") throw response as Error;
        return response;
    };

    return { read };
}

export default promiseResolver;
