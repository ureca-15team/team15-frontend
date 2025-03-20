import { useState, useEffect } from 'react';
import {
  StyledCart,
  CartContainer,
  TotalPriceContainer,
  SelectContainer,
  ProductContainer,
  ProductSelectContainer,
  ProductInfoContainer,
  ProductQuantityContainer,
  QuantityContainer,
  TotalPriceWrapper,
  ShippingWrapper,
  PriceInfoContainer,
  TotalInfoContainer,
} from './Cart.style';
import {
  fetchCartItems,
  deleteCartItem,
  checkoutCartItems,
} from '../../api/cart';

const Cart = ({ items, setItems }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItems(
        items.map((product) => ({
          cartId: product.cartId,
          prodcode: product.prodcode,
          selected: true,
          quantity: product.quantity,
        })),
      );
    }
  }, [items]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const selectedProducts = selectedItems.filter((item) => item.selected);
    const total = selectedProducts.reduce((sum, product) => {
      const selectedItem = items.find((i) => i.prodcode === product.prodcode);
      return sum + (selectedItem ? selectedItem.price * product.quantity : 0);
    }, 0);
    setTotalPrice(total);
    setSelectedCount(selectedProducts.length);

    // 모두 선택 상태 업데이트
    if (selectedItems.every((item) => item.selected)) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems, items]);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) => ({
        ...product,
        selected: !selectAll,
      })),
    );
  };

  const handleProductSelectChange = (prodcode) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) =>
        product.prodcode === prodcode
          ? { ...product, selected: !product.selected }
          : product,
      ),
    );
  };

  const handleQuantityChange = (prodcode, newQuantity) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) =>
        product.prodcode === prodcode
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
  };

  const handleDeleteProduct = async (cartId, prodname) => {
    const confirmDelete = window.confirm(
      `${prodname}을 장바구니에서 삭제하시겠습니까?`,
    );
    if (!confirmDelete) {
      return;
    }

    try {
      await deleteCartItem(cartId);
      console.log(`Deleted product with cartId: ${cartId}`);
      setItems((prevItems) =>
        prevItems.filter((product) => product.cartId !== cartId),
      );
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((product) => product.cartId !== cartId),
      );
    } catch (error) {
      console.error('Failed to delete cart item:', error);
    }
  };

  const handleDeleteSelectedProducts = async () => {
    const confirmDelete = window.confirm(
      '선택된 모든 제품을 장바구니에서 삭제하시겠습니까?',
    );
    if (!confirmDelete) {
      return;
    }

    try {
      const selectedProducts = selectedItems.filter((item) => item.selected);
      for (const product of selectedProducts) {
        await deleteCartItem(product.cartId);
      }
      setItems((prevItems) =>
        prevItems.filter(
          (product) =>
            !selectedProducts.some(
              (selected) => selected.cartId === product.cartId,
            ),
        ),
      );
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter(
          (product) =>
            !selectedProducts.some(
              (selected) => selected.cartId === product.cartId,
            ),
        ),
      );
    } catch (error) {
      console.error('Failed to delete selected cart items:', error);
    }
  };

  const handleCheckout = async () => {
    const selectedProducts = selectedItems.filter((item) => item.selected);
    const itemsToCheckout = selectedProducts.map((product) => ({
      prodcode: product.prodcode,
      quantity: product.quantity,
    }));
    const confirmCheckout = window.confirm(
      `${selectedCount}개 상품을 구매하시겠습니까?`,
    );
    if (!confirmCheckout) {
      return;
    }
    console.log('구매할 상품:', itemsToCheckout);
    try {
      await checkoutCartItems(itemsToCheckout);
      alert('선택한 상품이 구매 목록에 추가되었습니다.');
      setItems((prevItems) =>
        prevItems.filter(
          (product) =>
            !selectedProducts.some(
              (selected) => selected.prodcode === product.prodcode,
            ),
        ),
      );
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter(
          (product) =>
            !selectedProducts.some(
              (selected) => selected.prodcode === product.prodcode,
            ),
        ),
      );
    } catch (error) {
      alert('구매에 실패했습니다.');
    }
  };

  return (
    <StyledCart>
      <CartContainer>
        <SelectContainer>
          <div className="select-all">
            <input
              type="checkbox"
              id="all-check"
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
            <label htmlFor="all-check">
              <span>모두 선택</span>
            </label>
          </div>
          <span onClick={handleDeleteSelectedProducts}>선택삭제</span>
        </SelectContainer>
        {items.length === 0 && (
          <p className='emptyCart'>
            장바구니가 비어있습니다.
          </p>
        )}
        {items.map((product) => {
          const selectedItem = selectedItems.find(
            (selectedItem) => selectedItem.prodcode === product.prodcode,
          );
          const isSelected = selectedItem ? selectedItem.selected : false;
          const quantity = selectedItem ? selectedItem.quantity : 1;
          const totalPrice = (product.price * quantity).toLocaleString();

          return (
            <ProductContainer key={product.prodcode}>
              <ProductSelectContainer>
                <div className="select-product">
                  <input
                    type="checkbox"
                    id={`product-check-${product.prodcode}`}
                    checked={isSelected}
                    onChange={() => handleProductSelectChange(product.prodcode)}
                  />
                  <label htmlFor={`product-check-${product.prodcode}`}></label>
                </div>
                <span
                  onClick={() =>
                    handleDeleteProduct(product.cartId, product.prodname)
                  }
                >
                  ✕
                </span>
              </ProductSelectContainer>
              <ProductInfoContainer>
                <img
                  src={require(`../../assets/product/${product.pimg}`)}
                  alt=""
                />
                <div>
                  <p>
                    [{product.company}]{product.prodname}
                  </p>
                  <p>무료배송 | 일반택배</p>
                </div>
              </ProductInfoContainer>
              <ProductQuantityContainer>
                <QuantityContainer>
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        product.prodcode,
                        Math.max(1, quantity - 1),
                      )
                    }
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.prodcode,
                        Math.max(1, parseInt(e.target.value, 10)),
                      )
                    }
                    min="1"
                    max="10"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(product.prodcode, quantity + 1)
                    }
                  >
                    +
                  </button>
                </QuantityContainer>
                <p>{product.price.toLocaleString()}원</p>
              </ProductQuantityContainer>
              <TotalPriceWrapper>
                <p>{totalPrice} 원</p>
              </TotalPriceWrapper>
              <ShippingWrapper>
                <p>배송비 무료</p>
              </ShippingWrapper>
            </ProductContainer>
          );
        })}
      </CartContainer>

      <TotalPriceContainer>
        <div className="total-price">
          <PriceInfoContainer>
            <p>총 상품금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </PriceInfoContainer>
          <PriceInfoContainer>
            <p>총 배송비</p>
            <p>+ 0원</p>
          </PriceInfoContainer>
          <TotalInfoContainer>
            <p>결제금액</p>
            <p>{totalPrice.toLocaleString()}원</p>
          </TotalInfoContainer>
        </div>
        <button onClick={handleCheckout}>
          {selectedCount}개 상품 구매하기
        </button>
      </TotalPriceContainer>
    </StyledCart>
  );
};

export default Cart;