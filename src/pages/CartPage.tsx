const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">장바구니</h1>
      <div className="text-center py-16">
        <p className="text-gray-600 text-lg">
          장바구니가 비어있습니다.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          상품을 추가해보세요!
        </p>
      </div>
    </div>
  )
}

export default CartPage