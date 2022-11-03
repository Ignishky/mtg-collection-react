import http from "../http-common"
import SetsResponse from "../type/SetsResponse"

class MtgDataService {
  getAllSets(): Promise<SetsResponse> {
    return http.get("/sets")
  }
}

export default new MtgDataService()
