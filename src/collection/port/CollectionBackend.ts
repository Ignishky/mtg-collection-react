import http from '../../http-common'
import {CollectionResponse} from '../model/CollectionResponse';

class CollectionBackend {
  getCards(): Promise<CollectionResponse> {
    return http.get(`/collection`)
  }
}

export default new CollectionBackend()
