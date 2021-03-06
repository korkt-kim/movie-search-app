import { useRecoilState } from 'recoil'
import { searchResultState } from '../../states/atomStatus'
import SearchResult from '../searchResult'

const SearchResultMovie = () => {
  const [movies] = useRecoilState(searchResultState)

  return (
    <>
      {movies.map((movie) => (
        <SearchResult key={movie.imdbID} movie={movie} />
      ))}
    </>
  )
}

export default SearchResultMovie
