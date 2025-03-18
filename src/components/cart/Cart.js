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

const Cart = ({ item }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState(
    item.content.map((product) => ({
      itemId: product.itemId,
      selected: false,
      quantity: product.quan,
    })),
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) => ({
        ...product,
        selected: selectAll,
      })),
    );
  }, [selectAll]);

  useEffect(() => {
    const selectedProducts = selectedItems.filter((item) => item.selected);
    const total = selectedProducts.reduce((sum, product) => {
      const selectedItem = item.content.find((i) => i.itemId === product.itemId);
      const numericPrice = parseInt(selectedItem.price.replace(/,/g, ''), 10);
      return sum + numericPrice * product.quantity;
    }, 0);
    setTotalPrice(total);
    setSelectedCount(selectedProducts.length);

    // 모두 선택 상태 업데이트
    if (selectedItems.every((item) => item.selected)) {
      setSelectAll(true);
    } else if (selectedItems.every((item) => !item.selected)) {
      setSelectAll(false);
    }
  }, [selectedItems, item.content]);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const handleProductSelectChange = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) =>
        product.itemId === itemId
          ? { ...product, selected: !product.selected }
          : product,
      ),
    );
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) =>
        product.itemId === itemId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    );
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
          <span>선택삭제</span>
        </SelectContainer>
        {item.content.map((product) => {
          const isSelected = selectedItems.find(
            (selectedItem) => selectedItem.itemId === product.itemId,
          ).selected;

          const quantity = selectedItems.find(
            (selectedItem) => selectedItem.itemId === product.itemId,
          ).quantity;

          const numericPrice = parseInt(product.price.replace(/,/g, ''), 10); // 문자열을 숫자로 변환
          const totalPrice = (numericPrice * quantity).toLocaleString();

          return (
            <ProductContainer key={product.itemId}>
              <ProductSelectContainer>
                <div className="select-product">
                  <input
                    type="checkbox"
                    id={`product-check-${product.itemId}`}
                    checked={isSelected}
                    onChange={() => handleProductSelectChange(product.itemId)}
                  />
                  <label htmlFor={`product-check-${product.itemId}`}></label>
                </div>
                <span>✕</span>
              </ProductSelectContainer>
              <ProductInfoContainer>
                <img src={product.imageUrl} alt="" />
                <div>
                  <p>
                    [{product.company}]{product.name}
                  </p>
                  <p>무료배송 | 일반택배</p>
                </div>
              </ProductInfoContainer>
              <ProductQuantityContainer>
                <QuantityContainer>
                  <button
                    onClick={() =>
                      handleQuantityChange(product.itemId, Math.max(1, quantity - 1))
                    }
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.itemId, Math.max(1, parseInt(e.target.value, 10)))
                    }
                    min="1"
                    max="10"
                  />
                  <button
                    onClick={() => handleQuantityChange(product.itemId, quantity + 1)}
                  >
                    +
                  </button>
                </QuantityContainer>
                <p>{product.price}</p>
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
        <div className='total-price'>
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
        <button>{selectedCount}개 상품 구매하기</button>
      </TotalPriceContainer>
    </StyledCart>
  );
};

export default Cart;