import React from 'react'

import Button from '../button'
import Input from '../input'

function CartListItem({ cartItem, listMyCart, setListMyCart }) {
  const { id, title, img, price, quantity } = cartItem

  const handleRemoveCartItem = () => {
    const newListMyCart = listMyCart.filter((cartItem) => cartItem.id !== id)

    setListMyCart(newListMyCart)
  }

  const handleTextQuantity = (e) => {
    e.preventDefault()

    const newQuantity = Number(e.target.value)

    const updateQuantity = listMyCart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: newQuantity }
      }
      return cartItem
    })

    setListMyCart(updateQuantity)
  }

  const increaseQuantity = () => {
    const updateQuantity = listMyCart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })

    setListMyCart(updateQuantity)
  }

  const decreaseQuantity = () => {
    if (quantity <= 0) {
      handleRemoveCartItem()
    } else {
      const updateQuantity = listMyCart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      })

      setListMyCart(updateQuantity)
    }
  }

  return (
    <div className="flex flex-col h-fit md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
      <img
        className=" w-full h-auto self-center md:ml-2 md:h-44 object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={img}
        alt={title}
      />
      <div className="p-6 flex flex-col justify-start">
        <button
          className="self-end w-6 font-bold text-white bg-red-600 rounded text-md mb-2 hover:bg-black hover:bg-opacity-5 hover:text-red-600"
          type="button"
          onClick={handleRemoveCartItem}
        >
          x
        </button>
        <h5 className="text-gray-900 text-lg font-bold mb-2">{title}</h5>
        <p className="text-red-600 font-bold mb-4">$ {price}</p>

        <div className="flex items-center justify-start">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg h-8"
            role="group"
          >
            <Button
              name="btn-minus"
              type="button"
              className="py-0 rounded-r-none"
              onClick={decreaseQuantity}
            >
              -
            </Button>

            <Input
              type="number"
              name="input-quantity"
              width="w-16"
              value={quantity}
              onChange={handleTextQuantity}
            />

            <Button
              name="btn-plus"
              type="button"
              className="py-0 rounded-l-none"
              onClick={increaseQuantity}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartListItem
