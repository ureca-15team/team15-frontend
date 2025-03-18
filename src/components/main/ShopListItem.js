import sale from "../../assets/sale.png";
import ShopListItemBlock from "./ShopListItem.style";

const ShopListItem = ({ item }) => {
  const { company, price, name, imageUrl } = item;
  return (
    <ShopListItemBlock>
      <div className="itemImg">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="contents">
        <p className="itemName">{company}</p>
        <p className="title">{name}</p>
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
