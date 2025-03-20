import React, { useEffect, useState } from 'react';
import { fetchOrders, cancelOrder } from '../../api/order';
import { fetchProductDetails } from '../../api/product';
import Order from '../../components/order/Order';
import OrderBanner from '../../components/order/OrderBanner';
import { OrderContainerBlock, OrderBox } from './OrderContainer.style';

const OrderContainer = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);
      const orderData = await fetchOrders();

      if (!Array.isArray(orderData)) {
        setOrders([]);
        setLoading(false);
        return;
      }

      const ordersWithProducts = await Promise.all(
        orderData.map(async (order) => {
          const updatedItems = await Promise.all(
            order.orderItems.map(async (item) => {
              try {
                const productDetails = await fetchProductDetails(item.prodcode);
                return { ...item, product: productDetails };
              } catch (error) {
                console.error(
                  `상품 정보 불러오기 실패: ${item.prodcode}`,
                  error,
                );
                return { ...item, product: null };
              }
            }),
          );
          return { ...order, orderItems: updatedItems };
        }),
      );

      setOrders(ordersWithProducts);
      setLoading(false);
    };

    loadOrders();
  }, []);

  const handleCancelOrder = async (orderId) => {
    if (window.confirm('정말 주문을 취소하시겠습니까?')) {
      try {
        await cancelOrder(orderId);
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.orderId !== orderId),
        );
        alert('주문이 취소되었습니다.');
      } catch (error) {
        alert('주문 취소에 실패했습니다.');
      }
    }
  };

  return (
    <OrderContainerBlock>
      <OrderBanner />
      <OrderBox>
        <h2>구매 목록</h2>
        {loading ? (
          <p>주문 내역을 불러오는 중...</p>
        ) : (
          <Order orders={orders} onCancelOrder={handleCancelOrder} />
        )}
      </OrderBox>
    </OrderContainerBlock>
  );
};

export default OrderContainer;
