import Link from "next/link";

// components/PortfolioItem.jsx
const PortfolioItem = ({ image, title, year, tags, revealAnimation, link }) => {
  return (
    <div className="portfolio__item">
      <figure className={`item__thumb reveal ${revealAnimation}`}>
      <Link href={link}><img src={image} alt={title} /></Link> 
        <div className="item__footer hadding">
          <h4 className="item__title">
            <Link href={link}>{title}</Link> 
          </h4>
        </div>
        
      </figure>
        
    </div>
  ); 
};

export default PortfolioItem;
