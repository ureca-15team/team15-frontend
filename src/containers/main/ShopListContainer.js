import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Button } from '../../components/common/';
import ShopListItem from '../../components/main/ShopListItem';
import { useNavigate } from 'react-router-dom';
import ShopListContainerBlock from './ShopListContainer.style';
import { fetchProducts } from '../../api/item';

const ITEMS_PER_PAGE = 8;

const ShopListContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchProducts();
        setItems(data);
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };

    fetchItems();
  }, []);

  const maxPage = Math.ceil(items.length / ITEMS_PER_PAGE);

  const onClickHandler = (id) => {
    navigate(`/item/${id}`);
  };

  const onIncreasePage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, maxPage - 1));
  };

  const onDecreasePage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const selectedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <ShopListContainerBlock>
      <h1>오늘의딜</h1>
      <ul className="postsContainer">
        {selectedItems.map((item) => (
          <li key={item.prodcode} onClick={() => onClickHandler(item.prodcode)}>
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
