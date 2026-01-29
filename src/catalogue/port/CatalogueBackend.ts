import http from '../../http-common'
import { SetsResponse } from '../../common/model/SetsResponse'
import { AxiosRequestConfig } from 'axios';

class CatalogueBackend {

  async getSets(config?: AxiosRequestConfig): Promise<SetsResponse> {
    const { data } = await http.get("/sets", config)
    return data
  }

}

export default new CatalogueBackend()
