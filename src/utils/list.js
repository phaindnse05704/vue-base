/**
 * Function to fetch & update data of an array.
 * @example FETCH(state.list, list, ()
 * @param {Array<Object>} array original array
 * @param {Array<Object>} list append array
 * @param {Function<Object, Object>} comparer Comparator to find item
 * @param {Function<Object>} tranformer Expression to transform item data.
 */
export const FETCH = (array, list, comparer, tranformer) => {
  if (!list || !list.length) return;
  if (JSON.stringify(array) !== JSON.stringify(list)) {
    let union = [];
    const find = item => {
      if (comparer) {
        let found = array.findIndex(obj => {
          return comparer(obj, item);
        });
        return found;
      }
      return null;
    };

    list.forEach(item => {
      if (tranformer) item = tranformer(item);
      let index = find(item);
      if (index >= 0) {
        union.push({
          item: item,
          index: index
        });
      } else {
        array.push(item);
      }
    });
    if (union.length > 0)
      union.forEach(uno => {
        array.splice(uno.index, 1, uno.item);
      });
  }
};