import http from '../../http-common'

class CollectionBackend {
  addCard(cardId: string, ownedFoil: boolean): Promise<void> {
    return http.post(`/collection/${cardId}/add`, `{"ownedFoil": ${ownedFoil}}`)
  }

  removeCard(cardId: string, ownedFoil: boolean): Promise<void> {
    return http.post(`/collection/${cardId}/remove`, `{"ownedFoil": ${ownedFoil}}`)
  }
}

export default new CollectionBackend()
