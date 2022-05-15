import { ChangeEvent, FormEvent } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { inputValueState, searchKeywordState, pageState, searchResultState } from '../../states/atomStatus'

import { SearchIcon } from 'assets/svgs'
import styles from './SearchForm.module.scss'

const SearchForm = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueState)
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState)
  const resetPage = useResetRecoilState(pageState)
  const resetMovies = useResetRecoilState(searchResultState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim() || inputValue === searchKeyword) return
    resetMovies()
    resetPage()
    setSearchKeyword(inputValue)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.inputWrapper}>
        <input type='text' value={inputValue} onChange={handleInputChange} placeholder='검색어를 입력하세요' />
      </div>
      <SearchIcon className={styles.searchSVG} type='button' values='검색' />
    </form>
  )
}

export default SearchForm
