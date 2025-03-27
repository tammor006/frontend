

export default function OfferSection() {
  const offers = [
    {
      image: "/images/prestige-and-comfort.png",
      title: "LUXURY LIVING APARTMENTS",
      description: "Falaknaz proposes an elegant, cosmopolitan lifestyle creating an intense, ironic modernity.",
    },
    {
     image: "/images/house.png",
      title: "READY TO MOVE HOUSES",
      description: "At Falaknaz, life is all about lavishness, making a statement and weaving priceless memories with your loved ones.",
    },
    {
        image: "/images/sustainable.png",
      title: "ECO-FRIENDLY ENVIRONMENT",
      description: "Live in a peaceful and green environment designed for sustainable living and comfort.",
    },
    {
        image: "/images/building.png",
      title: "WORLD-CLASS AMENITIES",
      description: "Enjoy state-of-the-art amenities including pools, gyms, parks, and recreational spaces.",
    },
  ];

  return (
    <section className="offer-section">
      <div className="headline-item text-center my-5">
        <h3>
        WHAT CAN WE <span className="head-red"> OFFER?</span>
        </h3>
      </div>
      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-box">
            <img src={offer.image} alt={offer.title} className="offer-icon" />
            {/* <span className="offer-icon">{offer.icon}</span> */}
            <h3 className="offer-heading">{offer.title}</h3>
            <p className="offer-text">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}