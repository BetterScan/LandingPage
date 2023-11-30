import React from "react";
import "./ProductOverview.css";
import overviewProductImage from "../../Assets/overview-product-image.svg";
function ProductOverview() {
  return (
    <div className="product-overview-container">
      <div className="product-overview-title-and-description-container">
        <div className="product-overview-title-container">
          Un petit aperçu du
          <span>produit</span>
        </div>
        <div className="product-overview-description-container">
          Parce qu’on a tous besoin de se sentir à l’aise ! BetterScan propose
          une expérience utilisateur enrichie et pensée pour permettre aux
          nouveaux entrants, de découvrir la blockchain plus simplement.
          BetterScan permet de découvrir de nouvelles blockchain et d’explorer
          leurs différentes utilités et spécificités. Un excellent moyen de
          découvrir de nouveaux ecosytèmes. Nous pensons qu’il est important de
          permettre aux utilisateurs d’explorer différentes blockchains depuis
          un même et unique explorateur. Réduisons les barrières à l’entrée !
        </div>
      </div>
      <div className="product-overview-image-container">
        <img src={overviewProductImage} alt="betterscan overview product" />
      </div>
    </div>
  );
}

export default ProductOverview;
