import { useEffect, useState } from "react";

const useTempData = <T>(
    initData: T,
    tempDuration: number,
    resortTo?: T,
    resetCallback: ((resetValue: T | null) => void) | null = null,
): [T | null, (newState: T) => void] => {
    const [data, _setData] = useState<{ data: T | null }>({ data: initData });

    const assumedResortTo = resortTo === undefined ? initData : resortTo;

    useEffect(() => {
        if (data.data === resortTo) return;
        let ignore = false;

        setTimeout(() => {
            if (ignore) return;
            _setData({ data: assumedResortTo });
            if (resetCallback) resetCallback(assumedResortTo);
        }, tempDuration);

        return () => {
            ignore = true;
        };
    }, [assumedResortTo, data, resetCallback, resortTo, tempDuration]);

    const setData = (newData: T) => {
        _setData({ data: newData }); // Triggers update regardless if the data is the same or not
    };

    return [data.data, setData];
};

export default useTempData;
