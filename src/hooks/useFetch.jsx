/*import { useCallback, useState } from 'react';

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const doFetch = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            setData(result);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, [url, options]);

    return [{ data, isLoading, isError }, doFetch];
}*/



/*import { useCallback, useState } from 'react';

export default function useFetch(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const doFetch = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            setData(result);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, [endpoint, options]);

    return [{ data, isLoading, isError }, doFetch];
}*/

import { useCallback, useState } from 'react';

export default function useFetch(endpoint, options = {}) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const doFetch = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`, {
                ...options,
                headers: {
                    ...options.headers,
                    // No incluir el encabezado de autorización durante el inicio de sesión
                    // "Authorization": `Token ${localStorage.getItem('token')}`
                }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const result = await response.json();
            setData(result);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }, [endpoint, options]);

    return [{ data, isLoading, isError }, doFetch];
}



