const BrandItem = ({ imageUrl, altText }) => {
  return (
    <div className="col" >
      <div className="brands__item item-stagger " style={{marginLeft:'15px'}} >
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  ); 
};

export default BrandItem;
 