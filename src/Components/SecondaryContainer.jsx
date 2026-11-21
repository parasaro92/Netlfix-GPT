import { memo } from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
	const movies = useSelector(store => store.movies)
	return (
		movies.nowPlayingMovies && (
			<div className='bg-black'>
				<div className=' -mt-50 relative z-10 pl-12'>
					<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
					<MovieList title={"Popular"} movies={movies.popularMovies} />
					<MovieList title={"Top Rated"} movies={movies.trendingMovies} />
					<MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
					{/* <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
				</div>
			</div>
		)
	);
};

export default memo(SecondaryContainer);