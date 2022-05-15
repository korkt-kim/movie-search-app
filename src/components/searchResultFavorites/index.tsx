import { useRecoilState } from 'recoil'

import { favoriteMovieState } from '../../states/atomStatus'
import SearchResult from '../searchResult'

import styles from './SearchResults.module.scss'

const SearchResultFavorites = () => {
  const [favoriteMovies] = useRecoilState(favoriteMovieState)

  return (
    <div className={styles.searchResultFavoritesWrapper}>
      <h1>내 즐겨찾기</h1>
      <ul>
        {favoriteMovies.map((movie) => (
          <SearchResult key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default SearchResultFavorites
