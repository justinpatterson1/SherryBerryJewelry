

const addToCart = (id,price,img,name,category,size,quantity,user,setUser) =>{
    const update = user
    const item = {
        id,
        name,
        img,
        category,
        quantity,
        price,
        size
    }

    update.cart.push(item)
    setUser(update)

    // axios.put(`http://localhost:4000/user/${isLoggedIn.user._id}`,user)
    // .catch(err=>console.log(err))

      fetch(`http://localhost:4000/user/${user._id}`,{
        method:'PUT',
        headers:{'Content-Type': 'application/json; charset=UTF-8'},
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .catch(err=>console.log(err))
      
   console.log(user)
  }

export default addToCart