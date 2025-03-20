import sale from '../../assets/sale.png';
import ShopListItemBlock from './ShopListItem.style';

const ShopListItem = ({ item }) => {
  const { company, price, prodname, pimg } = item;
  return (
    <ShopListItemBlock>
      <div className="itemImg">
        <img src={require(`../../assets/product/${pimg}`)} alt="item" />
      </div>
      <div className="contents">
        <p className="itemName">{company}</p>
        <p className="title">{prodname}</p>
        <div className="priceContents">
          <span>SALE</span>
          <p className="price">{price.toLocaleString()}</p>
          <img src={sale} alt="item" />
        </div>
      </div>
    </ShopListItemBlock>
  );
};

export default ShopListItem;
