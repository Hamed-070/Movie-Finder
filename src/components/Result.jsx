import { useLocation } from "react-router-dom"


export default function Result() {
    const location = useLocation();
    const data = location.state;

    // Fallback data in case API data is incomplete
    const movieData = {
        Title: data?.Title || "Unknown Title",
        Poster: data?.Poster || "https://via.placeholder.com/450x650/2d2d2d/ffffff?text=No+Image",
        Year: data?.Year || "N/A",
        Runtime: data?.Runtime || "N/A",
        Genre: data?.Genre || "N/A",
        Director: data?.Director || "N/A",
        Actors: data?.Actors || "N/A",
        Plot: data?.Plot || "No description available.",
        imdbRating: data?.imdbRating || "N/A",
        Country: data?.Country || "N/A",
        Type: data?.Type || "N/A",
        Released: data?.Released || "N/A",
        Writer: data?.Writer || "N/A",
        Language: data?.Language || "N/A",
        Awards: data?.Awards || "N/A",
        BoxOffice: data?.BoxOffice || "N/A",
        Production: data?.Production || "N/A",
    };

    // Generate star rating based on IMDB score
    const renderRatingStars = () => {
        if (movieData.imdbRating === "N/A") return "No rating";
        
        const rating = parseFloat(movieData.imdbRating);
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => (
            <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            ))}
            {halfStar && (
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            )}
            {[...Array(emptyStars)].map((_, i) => (
            <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            ))}
            <span className="ml-2 text-gray-600">({movieData.imdbRating}/10)</span>
        </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
            {/* Back button */}
            <button 
            onClick={() => window.history.back()} 
            className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
            >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
             Back
            </button>

            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="md:flex">
                {/* Poster section */}
                <div className="md:w-2/5 p-6 flex justify-center items-start">
                <img 
                    src={movieData.Poster} 
                    alt={movieData.Title} 
                    className="w-full max-w-md rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" 
                />
                </div>
                
                {/* Details section */}
                <div className="md:w-3/5 p-6 md:p-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{movieData.Title}</h1>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="bg-blue-500 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {movieData.Type}
                    </span>
                    <span className="text-gray-300">{movieData.Year}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-300">{movieData.Runtime}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-300">{movieData.Country}</span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                    {renderRatingStars()}
                </div>
                
                
                {/* Plot */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3 border-b border-gray-700 pb-2">Storyline</h2>
                    <p className="text-gray-300 leading-relaxed">{movieData.Plot}</p>
                </div>
                
                {/* Details grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div>
                    <h3 className="text-sm text-gray-400">Director</h3>
                    <p className="font-medium">{movieData.Director}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Writer</h3>
                    <p className="font-medium">{movieData.Writer}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Cast</h3>
                    <p className="font-medium">{movieData.Actors}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Genre</h3>
                    <p className="font-medium">{movieData.Genre}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Released</h3>
                    <p className="font-medium">{movieData.Released}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Language</h3>
                    <p className="font-medium">{movieData.Language}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Awards</h3>
                    <p className="font-medium">{movieData.Awards}</p>
                    </div>
                    <div>
                    <h3 className="text-sm text-gray-400">Production</h3>
                    <p className="font-medium">{movieData.Production}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
