export const setLocalStorage = (data) => {
  
  const item = data;
  const getLocal = JSON.parse(localStorage.getItem('cart'))
  
  const filter = getLocal.findIndex((x) => x._id === data._id)
  
  item.quantity ++
  if (filter !== -1) {
    getLocal[filter] = item
  } else {
    getLocal.push(item)
  }
  localStorage.setItem('cart', JSON.stringify(getLocal))
}

export const setFavLocalStorage = (id) => {
  
  const itemId = {id: id };
  const getLocal = JSON.parse(localStorage.getItem('fav'))
  
  const filter = getLocal.findIndex((x) => x.id === itemId.id)
  
  if (filter !== -1) {
    getLocal[filter] = itemId
    getLocal.pop()
  } else {
    getLocal.push(itemId)
  }
  
  localStorage.setItem('fav', JSON.stringify(getLocal))

}
export const toBuy = (data) => {
  
  const item = data;
  const getLocal = JSON.parse(localStorage.getItem('cart'))
  
  const filter = getLocal.findIndex((x) => x._id === data._id)
  
  if (filter !== -1) {
    
  } else {
    item.quantity ++
    getLocal.push(item)
  }
  localStorage.setItem('cart', JSON.stringify(getLocal))
  document.location.href = '/confirmation';
}
