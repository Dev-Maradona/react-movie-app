const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '076d52b344b617c69375a8433cdc75d9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig