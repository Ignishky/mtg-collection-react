import http from '../../http-common'

class CollectionBackend {
  addCard(cardId: string, ownedFoil: boolean): Promise<void> {
    return http.put(`/collection/${cardId}`, `{"ownedFoil": ${ownedFoil}}`)
  }

  removeCard(cardId: string): Promise<void> {
    return http.delete(`/collection/${cardId}`)
  }
}

export default new CollectionBackend()
