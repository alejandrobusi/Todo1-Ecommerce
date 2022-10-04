import Swal from "sweetalert2";
export const setLocalStorage = (data) => {
  
  const item = data;
  const getLocal = JSON.parse(localStorage.getItem('cart'))
  
  const filter = getLocal.findIndex((x) => x._id === data._id)
  
  
  if (filter !== -1) {
    if (getLocal[filter].stock>0) {
      getLocal[filter].quantity ++
      getLocal[filter].stock --
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: `No puede llevar menos de un articulo`,
        confirmButtonColor : "#0B5ED7",
      })
    }
  } else {
    item.quantity ++
    item.stock --
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
