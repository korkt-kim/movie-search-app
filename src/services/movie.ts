import { axios } from 'hooks/worker'
import { IMovieAPIRes } from 'types/movie'

const BASE_URL = 'http://www.omdbapi.com'

interface IParams {
  s: string
  page: number
}

export const getMovieSearchApi = (params: IParams) =>
  axios.get<IMovieAPIRes>(`${BASE_URL}/`, {
    params: {
      apikey: '92e32667',
      ...params,
    },
  })
