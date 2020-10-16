
export const fetchCards = async (firebase: firebase.app.App) => {
    const cards = firebase
      ?.firestore()
      .collection('cards')
      .get()
      .then((data: any) => {
        let docArray: FirebaseDocArray = []
        data.forEach((doc: any) => {
          docArray.push({
            id: doc.id,
            Category: doc.data().Category,
            code: doc.data().code ?? '',
            q: doc.data().q,
            a: doc.data().a
          })
        })
        return docArray
      })
      .then((array: FirebaseDocArray = []) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      })
      return cards
}