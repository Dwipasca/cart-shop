import React from 'react'
import CartListItem from '../cartListItem'

function CartListBody({ listMyCart, setListMyCart }) {
  return (
    <div className="offcanvas-body flex-grow p-4 overflow-y-auto bg-blue-50">
      <div className="flex flex-col justify-start gap-4 min-h-fit">
        {listMyCart.length > 0 ? (
          listMyCart.map((cartItem) => {
            return (
              <CartListItem
                key={cartItem.id}
                cartItem={cartItem}
                listMyCart={listMyCart}
                setListMyCart={setListMyCart}
              />
            )
          })
        ) : (
          <p className="text-black font-bold self-center">Empty</p>
        )}
      </div>
    </div>
  )
}

export default CartListBody
