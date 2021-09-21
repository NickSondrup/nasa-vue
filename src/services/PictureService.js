import axios from 'axios'
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'

const apiKey = 'xF05lcjI7scH3Krwbq2p3Hnd8zyzzU9NeUp42utc'

const picApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod'
})
class PicturesService {
  async getPicture(query) {
    const res = await picApi.get(`?api_key=${apiKey}&date=${query}`)
    logger.log(res, 'getPicture picturesservice')
    AppState.pictureUrl = res.data.url
    AppState.description = res.data.explanation
    logger.log(AppState.pictureUrl)
    logger.log(AppState.description)
  }
}

export const picturesService = new PicturesService()
