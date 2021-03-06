import { useEffect, useCallback, useMemo, useRef } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { usePrevious } from 'react-use'

import { searchKeywordState, pageState, searchResultState, totalCountState } from '../../states/atomStatus'
import { getMovieSearchApi } from 'services/movie'

import SearchResultMovie from '../searchResultMovie'
import styles from './SearchResults.module.scss'

const SearchResults = () => {
  const searchKeyword = useRecoilValue(searchKeywordState)
  const [page, setPage] = useRecoilState(pageState)
  const [totalCount, setTotalCount] = useRecoilState(totalCountState)
  const [, setMovies] = useRecoilState(searchResultState)
  const resetMovies = useResetRecoilState(searchResultState)

  const firstRender = useFirstRender()
  const lastPage = useMemo(() => Math.ceil(totalCount / 10), [totalCount])
  const prevsearchKeyword = usePrevious(searchKeyword)
  const prevPage = usePrevious(page)
  const msgRef = useRef<HTMLParagraphElement>(null)

  function useFirstRender(): boolean {
    const firstRender = useRef(true)

    useEffect(() => {
      firstRender.current = false
    }, [])

    return firstRender.current
  }

  useEffect(() => {
    if (firstRender) return
    if (searchKeyword === prevsearchKeyword && page === prevPage) return

    const getSearchResult = async () => {
      const response = await getMovieSearchApi({
        s: searchKeyword,
        page,
      })

      const { Search, totalResults } = response.data

      if (!Search || !totalResults) {
        resetMovies()
        return
      }

      setMovies((prev) => [...prev, ...Search])
      setTotalCount(Number(totalResults))
    }

    getSearchResult()
  }, [searchKeyword, page, setMovies, resetMovies, setTotalCount, firstRender, prevsearchKeyword, prevPage])

  const handleScrollEvent = useCallback(
    (e: React.UIEvent<HTMLUListElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
      const checkPage = lastPage <= page
      const isEnd = scrollHeight <= Math.ceil(scrollTop + clientHeight)

      if (isEnd) {
        if (checkPage && msgRef.current) {
          msgRef.current.style.display = 'block'
          return
        }
        setPage((prev) => prev + 1)
      }
    },
    [lastPage, page, setPage]
  )

  return (
    <div className={styles.searchResultsWrapper}>
      {totalCount < 1 ? <h1>?????? ????????? ???????????? ????</h1> : <h1>?????? ?????? {totalCount} ?????? ??????????????????</h1>}

      <ul onScroll={handleScrollEvent}>
        <SearchResultMovie />

        <h1 className={styles.endMsg} ref={msgRef}>
          ????????? ?????? ???????????????
        </h1>
      </ul>
    </div>
  )
}

export default SearchResults
