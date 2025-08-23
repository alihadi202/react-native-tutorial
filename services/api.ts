export const TMDI_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    API_TOKEN: process.env.EXPO_PUBLIC_TOKEN,
    headers:{
       accept:'application/json',
       Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`
    }
}

export const fetchMovies = async ({query}:{query:string})=>{
    const endpoint=query?
    `${TMDI_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
    `${TMDI_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDI_CONFIG.headers
    })
 
    if(!response.ok){
        throw new Error('Failed to fetch movies');
    }
    
    const data = await response.json();
    return data.results;
}