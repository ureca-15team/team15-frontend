import { StyledProductContainer } from './ProductContainer.style';
import Product from '../../components/product/Product';
import diffuserImage from '../../assets/product/diffuser.avif';
import { useParams } from 'react-router-dom';

const ProductContainer = () => {
  const { itemId } = useParams();
  const parsedItemId = parseInt(itemId, 10);

  const data = {
    content: [
      {
        itemId: 1,
        name: '상품 A',
        price: '10,000원',
        imageUrl: diffuserImage,
        company: 'AAA',
        description: "상품 A에 대한 설명이고, 이 상품은 AAA에서 만들었습니다.",
      },
      {
        itemId: 2,
        name: '상품 B',
        price: '20,000원',
        imageUrl: diffuserImage,
        company: 'BBB',
        description: "상품 B에 대한 설명이고, 이 상품은 BBB에서 만들었습니다. adsfasdfasdfasdfdsasdfgdsfgsdfgfasdf",
      },
      {
        itemId: 3,
        name: '상품 C',
        price: '30,000원',
        imageUrl: diffuserImage,
        company: 'CCC',
        description: "상품 C에 대한 설명이고, 이 상품은 CCC에서 만들었습니다.",
      },
      {
        itemId: 4,
        name: '상품 D',
        price: '40,000원',
        imageUrl: diffuserImage,
        company: 'DDD',
        description: "상품 D에 대한 설명이고, 이 상품은 DDD에서 만들었습니다.",
      },
      {
        itemId: 5,
        name: '상품 E',
        price: '50,000원',
        imageUrl: diffuserImage,
        company: 'EEE',
        description: "상품 E에 대한 설명이고, 이 상품은 EEE에서 만들었습니다.",
      },
      {
        itemId: 6,
        name: '상품 F',
        price: '60,000원',
        imageUrl: diffuserImage,
        company: 'FFF',
        description: "상품 F에 대한 설명이고, 이 상품은 FFF에서 만들었습니다.",
      },
      {
        itemId: 7,
        name: '상품 G',
        price: '70,000원',
        imageUrl: diffuserImage,
        company: 'GGG',
        description: "상품 G에 대한 설명이고, 이 상품은 GGG에서 만들었습니다.",
      },
      {
        itemId: 8,
        name: '상품 H',
        price: '80,000원',
        imageUrl: diffuserImage,
        company: 'HHH',
        description: "상품 H에 대한 설명이고, 이 상품은 HHH에서 만들었습니다.",
      },
    ],
  };

  const selectedItem = data.content.find((item) => item.itemId === parsedItemId);
  return (
    <StyledProductContainer>
      {selectedItem ? <Product item={selectedItem} /> : <p>해당 상품을 찾을 수 없습니다.</p>}
    </StyledProductContainer>
  );
};

export default ProductContainer;
