import http from '../../http-common'
import SetsResponse from '../model/SetsResponse'

class CatalogueBackend {
  getSets(): Promise<SetsResponse> {
    return http.get("/sets")
  }
}

export default new CatalogueBackend()
