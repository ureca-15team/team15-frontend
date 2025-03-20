import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import imgTD from '../../assets/product/today-departure.png';
import { buyNow, addToCart } from '../../api/product';

import {
  StyledProduct,
  ImageWrapper,
  OverviewContainer,
  TitleContainer,
  StarContainer,
  PriceContainer,
  InfoContainer,
  OrderContainer,
  QuantityContainer,
  TotalPriceContainer,
  ProductInfoBox,
} from './Product.style';

const Product = ({ item, prodcode }) => {
  const { name, company, price, imageUrl, description } = item;
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(parseInt(e.target.value, 10), 10));
    setQuantity(value);
  };

  const numericPrice = parseInt(price.replace(/,/g, ''), 10);
  const totalPrice = (numericPrice * quantity).toLocaleString();

  const handleBuyNow = async () => {
    try {
      const response = await buyNow(prodcode, quantity);
      alert(response);
    } catch (error) {
      alert('구매에 실패했습니다.');
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await addToCart(prodcode, quantity);
      alert(response);
    } catch (error) {
      alert('장바구니 추가에 실패했습니다.');
    }
  };

  return (
    <StyledProduct>
      <ImageWrapper>
        <img src={require(`../../assets/product/${imageUrl}`)} />
      </ImageWrapper>

      <OverviewContainer>
        <div className="product-container">
          <TitleContainer>
            <p>{company}</p>
            <p>{name}</p>
            <p>{description}</p>
          </TitleContainer>

          <StarContainer>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>43,500개 리뷰</p>
          </StarContainer>

          <PriceContainer>
            <p>50%</p>
            <p>{numericPrice.toLocaleString()}원</p>
            <div>
              <img src={imgTD} alt="" />
            </div>
          </PriceContainer>

          <InfoContainer>
            <p>해택</p>
            <p>
              <span>10P 적립 (WELCOME 0.1%적립)</span>
              <span>최대 10% 결제할인(토스페이)</span>
            </p>
          </InfoContainer>

          <InfoContainer>
            <p>배송</p>
            <p>
              <span>3000원 (12,000원 이상 구매시 무료배송)</span>
              <span>12:00까지 결제 시 오늘 출발</span>
              <span>일반택배</span>
            </p>
          </InfoContainer>

          <ProductInfoBox>
            <div className="name-quantity">
              <div className="name">{name}</div>
              <QuantityContainer>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  max="10"
                />
                <button onClick={() => setQuantity(Math.min(quantity + 1, 10))}>
                  +
                </button>
              </QuantityContainer>
            </div>
            <p>{numericPrice.toLocaleString()} 원</p>
          </ProductInfoBox>

          <TotalPriceContainer>
            <p>주문금액</p>
            <p>{totalPrice} 원</p>
          </TotalPriceContainer>

          <OrderContainer>
            <button onClick={handleAddToCart}>장바구니</button>
            <button onClick={handleBuyNow}>바로구매</button>
          </OrderContainer>
        </div>
      </OverviewContainer>
    </StyledProduct>
  );
};

export default Product;
