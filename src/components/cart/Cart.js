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

const Cart = ({ items }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems(
      items.map((product) => ({
        prodcode: product.prodcode,
        selected: false,
        quantity: product.quantity,
      }))
    );
  }, [items]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const selectedProducts = selectedItems.filter((item) => item.selected);
    const total = selectedProducts.reduce((sum, product) => {
      const selectedItem = items.find((i) => i.prodcode === product.prodcode);
      return sum + selectedItem.price * product.quantity;
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
      }))
    );
  };

  const handleProductSelectChange = (prodcode) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) =>
        product.prodcode === prodcode
          ? { ...product, selected: !product.selected }
          : product
      )
    );
  };

  const handleQuantityChange = (prodcode, newQuantity) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map((product) =>
        product.prodcode === prodcode
          ? { ...product, quantity: newQuantity }
          : product
      )
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
        {items.map((product) => {
          const selectedItem = selectedItems.find(
            (selectedItem) => selectedItem.prodcode === product.prodcode
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
                <span>✕</span>
              </ProductSelectContainer>
              <ProductInfoContainer>
                <img src={require(`../../assets/product/${product.pimg}`).default} alt="" />
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
                      handleQuantityChange(product.prodcode, Math.max(1, quantity - 1))
                    }
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.prodcode, Math.max(1, parseInt(e.target.value, 10)))
                    }
                    min="1"
                    max="10"
                  />
                  <button
                    onClick={() => handleQuantityChange(product.prodcode, quantity + 1)}
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