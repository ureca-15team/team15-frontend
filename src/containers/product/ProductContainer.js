import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails, buyNow, addToCart } from '../../api/product';
import Product from '../../components/product/Product';
import { StyledProductContainer } from './ProductContainer.style';

const ProductContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const data = await fetchProductDetails(itemId);
      if (data) {
        setProduct({
          prodcode: data.prodcode,
          name: data.prodname,
          company: data.company,
          price: data.price.toLocaleString(),
          imageUrl: data.pimg, 
          description: data.description,
        });
      }
      setLoading(false);
    };

    loadProduct();
  }, [itemId]);

  if (loading) {
    return <p>상품 정보를 불러오는 중...</p>;
  }

  if (!product) {
    return <p>해당 상품을 찾을 수 없습니다.</p>;
  }

  return (
    <StyledProductContainer>
      <Product item={product} prodcode={product.prodcode} />
    </StyledProductContainer>
  );
};

export default ProductContainer;
