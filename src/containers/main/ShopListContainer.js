import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from '../../components/common/';
import ShopListItem from '../../components/main/ShopListItem';
import { useNavigate } from 'react-router-dom';
import ShopListContainerBlock from './ShopListContainer.style';
import diffuserImage from '../../assets/product/diffuser.avif'; 

const ShopListContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(3); 
  const navigate = useNavigate();

  // ✅ Mock 데이터에 diffuser 이미지 적용
  const data = {
    content: [
      { itemId: 1, name: '상품 A', price: '10,000원', imageUrl: diffuserImage, company: "AAA" },
      { itemId: 2, name: '상품 B', price: '20,000원', imageUrl: diffuserImage, company: "BBB" },
      { itemId: 3, name: '상품 C', price: '30,000원', imageUrl: diffuserImage, company: "CCC" },
      { itemId: 4, name: '상품 D', price: '40,000원', imageUrl: diffuserImage, company: "DDD" },
      { itemId: 5, name: '상품 E', price: '50,000원', imageUrl: diffuserImage, company: "EEE" },
      { itemId: 6, name: '상품 F', price: '60,000원', imageUrl: diffuserImage, company: "FFF" },
      { itemId: 7, name: '상품 G', price: '70,000원', imageUrl: diffuserImage, company: "GGG" },
      { itemId: 8, name: '상품 H', price: '80,000원', imageUrl: diffuserImage, company: "HHH" },
    ],
  };

  const onClickHandler = (id) => {
    navigate(`/item/${id}`);
  };

  const onIncreasePage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onDecreasePage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <ShopListContainerBlock>
      <h1>오늘의딜</h1>
      <ul className="postsContainer">
        {data.content.map((item) => (
          <li key={item.itemId} onClick={() => onClickHandler(item.itemId)}>
            <ShopListItem item={item} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Button
          size={'xsmall'}
          disabled={currentPage <= 0}
          onClick={onDecreasePage}
        >
          <FaChevronLeft />
        </Button>
        <div className="pages">{`${currentPage + 1}/${maxPage}`}</div>
        <Button
          size={'xsmall'}
          disabled={currentPage >= maxPage - 1}
          onClick={onIncreasePage}
        >
          <FaChevronRight />
        </Button>
      </div>
    </ShopListContainerBlock>
  );
};

export default ShopListContainer;
