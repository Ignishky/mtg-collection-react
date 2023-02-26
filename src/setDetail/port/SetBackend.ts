import http from '../../http-common'
import SetResponse from '../model/SetResponse'

class SetBackend {
  getSet(setCode: string): Promise<SetResponse> {
    return http.get(`/sets/${setCode}`)
  }
}

export default new SetBackend()
