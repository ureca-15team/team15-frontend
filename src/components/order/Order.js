import React from 'react';
import {
  OrderWrapper,
  OrderItem,
  OrderHeader,
  OrderStatus,
  OrderDetails,
  ProductImage,
  ProductInfo,
  OrderActions,
  OrderDate,
  PriceInfo,
} from './Order.style';
import sampleImage from '../../assets/product/diffuser.avif';

const Order = ({ orders, onCancelOrder }) => {
  if (!orders || orders.length === 0) {
    return (
      <OrderWrapper>
        <p className="emptyMessage">주문 내역이 없습니다.</p>
      </OrderWrapper>
    );
  }

  return (
    <OrderWrapper>
      {orders.map((order) => (
        <OrderItem key={order.orderId}>
          <OrderHeader>
            <OrderDate>
              {new Date(order.orderDate)
                .toISOString()
                .split('T')[0]
                .replace(/-/g, '.')}{' '}
              주문 {order.orderItems.length}건
            </OrderDate>
            <OrderStatus>구매완료 · 3/28(금) 이내 도착 예정</OrderStatus>
          </OrderHeader>

          {order.orderItems.map((item) => (
            <OrderDetails key={item.itemId}>
              <ProductImage
                // src={item.product?.pimg ? item.product.pimg : sampleImage}
                src={item.product?.pimg ? sampleImage : sampleImage}
                alt={item.product?.prodname || '상품 이미지'}
              />
              <ProductInfo>
                <p className="productName">
                  {item.product?.prodname || '상품명 없음'}
                </p>
                <p className="company">
                  {item.product?.company || '제조사 없음'}
                </p>
                <PriceInfo>
                  <p className="price">
                    {item.product?.price?.toLocaleString() || '가격 정보 없음'}
                    원
                  </p>
                  <p className="quantity">{item.quantity}개</p>
                </PriceInfo>
              </ProductInfo>
            </OrderDetails>
          ))}

          <OrderActions>
            <button
              className="cancel"
              onClick={() => onCancelOrder(order.orderId)}
            >
              구매취소
            </button>
          </OrderActions>
        </OrderItem>
      ))}
    </OrderWrapper>
  );
};

export default Order;
