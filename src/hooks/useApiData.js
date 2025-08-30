import { useState, useEffect } from 'react';
import { getPageContent, getNewsArticles, getPartners, getLocations } from '@/lib/api';
import { shouldUseDummyData } from '@/config/environment';

export function useApiData() {
    const [data, setData] = useState({
        page: null,
        news: [],
        partners: [],
        locations: []
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            // Fetch all data in parallel
            const [pageData, newsData, partnersData, locationsData] = await Promise.allSettled([
                getPageContent('home'),
                getNewsArticles(),
                getPartners(),
                getLocations()
            ]);

            // Extract successful results
            const newData = {
                page: pageData.status === 'fulfilled' ? pageData.value : null,
                news: newsData.status === 'fulfilled' ? newsData.value : [],
                partners: partnersData.status === 'fulfilled' ? partnersData.value : [],
                locations: locationsData.status === 'fulfilled' ? locationsData.value : []
            };

            setData(newData);
            setLastUpdated(new Date());

            console.log('API Data loaded successfully:', {
                page: !!newData.page,
                news: newData.news.length,
                partners: newData.partners.length,
                locations: newData.locations.length,
                useDummyData: shouldUseDummyData()
            });

        } catch (err) {
            console.error('Error fetching API data:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const refreshData = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        lastUpdated,
        refreshData,
        isUsingDummyData: shouldUseDummyData()
    };
}

// Hook for individual data types
export function usePageData(slug = 'home') {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPage = async () => {
            setLoading(true);
            setError(null);

            try {
                const pageData = await getPageContent(slug);
                setData(pageData);
            } catch (err) {
                console.error(`Error fetching page ${slug}:`, err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [slug]);

    return { data, loading, error };
}

export function useNewsData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);

            try {
                const newsData = await getNewsArticles();
                setData(newsData);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return { data, loading, error };
}

export function usePartnersData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPartners = async () => {
            setLoading(true);
            setError(null);

            try {
                const partnersData = await getPartners();
                setData(partnersData);
            } catch (err) {
                console.error('Error fetching partners:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    return { data, loading, error };
}

export function useLocationsData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocations = async () => {
            setLoading(true);
            setError(null);

            try {
                const locationsData = await getLocations();
                setData(locationsData);
            } catch (err) {
                console.error('Error fetching locations:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, []);

    return { data, loading, error };
}
