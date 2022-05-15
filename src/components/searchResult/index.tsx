import { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import cx from 'classnames'

import { favoriteMovieState, selectedMovieState } from '../../states/atomStatus'
import { IMovie } from 'types/movie'

import { HeartIcon, CancelIcon } from 'assets/svgs'
import styles from './SearchResult.module.scss'

interface MovieItemProps {
  movie: IMovie
}

const SearchResult = ({ movie }: MovieItemProps) => {
  const { Poster, Title, Year, Type } = movie
  const setSelectedMovie = useSetRecoilState(selectedMovieState)

  const [favoriteMovies, setFavoriteMovies] = useRecoilState(favoriteMovieState)
  const selectedMovie = useRecoilValue(selectedMovieState)
  
  const [isClicked, setIsClicked] = useState(false)

  const isFavorite = favoriteMovies.includes(selectedMovie)

  const handleOpen = () => {
    setIsClicked(true)
    setSelectedMovie(movie)
  }
  const handleClose = () => {
    setIsClicked(false)
  }

  const handleFavorite = () => {
    if (isFavorite) {
      setFavoriteMovies((prev) => prev.filter((item) => item.imdbID !== selectedMovie.imdbID))
    } else {
      setFavoriteMovies((prev) => [...prev, selectedMovie])
    }
    setIsClicked(false)
  }

  return (
    <li className={styles.searchResultWrapper}>
      <div className={styles.searchResult}>
        <img src={Poster} alt='Sorry Poster' aria-label='There is no Poster' />
        <dl>
          <dt>{Title}</dt>
          <dd>
            {Year}, {Type}
          </dd>
          <HeartIcon
            type='button'
            className={cx(styles.favoriteState, { [styles.checkFavorite]: favoriteMovies.includes(movie) })}
            onClick={handleOpen}
          />
        </dl>
        <div className={cx(styles.favoriteMenu, { [styles.openMenu]: isClicked })}>
          {!favoriteMovies.includes(movie) ? (
            <button type='button' className={styles.addFavoriteToggle} onClick={handleFavorite}>
              <HeartIcon type='button' className={cx(styles.favoriteSVG, { [styles.checkFavorite]: isFavorite })} />
              즐겨찾기 추가
            </button>
          ) : (
            <button
              type='button'
              className={cx(styles.addFavoriteToggle, { [styles.checkFavorite]: isFavorite })}
              onClick={handleFavorite}
            >
              <HeartIcon type='button' className={cx(styles.favoriteSVG, { [styles.checkFavorite]: isFavorite })} />
              즐겨찾기 제거
            </button>
          )}
          <button type='button' onClick={handleClose}>
            <CancelIcon className={styles.closeSVG} /> 취소
          </button>
        </div>
      </div>
    </li>
  )
}

export default SearchResult
