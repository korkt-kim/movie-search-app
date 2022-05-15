import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import GNB from 'components/gnb'
import TabSearch from './movies'
import TabFavorites from './favorites'

import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path='/' element={<TabSearch />} />
          <Route path='favorites' element={<TabFavorites />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
