import http from '../../http-common'
import {SetResponse} from '../model/SetResponse'
import {AxiosRequestConfig} from 'axios';

class SetBackend {

  async getSet(setCode: string, config?: AxiosRequestConfig): Promise<SetResponse> {
    const { data } = await http.get(`/sets/${setCode}/cards`, config)
    return data
  }

}

export default new SetBackend()
