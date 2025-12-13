import http from '../../http-common'
import {CollectionResponse} from '../model/CollectionResponse';

class CollectionBackend {

  async getCards(): Promise<CollectionResponse> {
    const { data } = await http.get(`/collection`)
    return data
  }

}

export default new CollectionBackend()
