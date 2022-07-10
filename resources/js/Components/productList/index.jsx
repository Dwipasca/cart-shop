import React from 'react'
import Product from '../product'

function ProductList({
  products,
  listMyCart,
  setListMyCart,
  handleOpenSidebar,
}) {
  return (
    <div className=" flex flex-wrap justify-center gap-8 max-w-5xl">
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              listMyCart={listMyCart}
              setListMyCart={setListMyCart}
              handleOpenSidebar={handleOpenSidebar}
            />
          )
        })}
    </div>
  )
}

export default ProductList
