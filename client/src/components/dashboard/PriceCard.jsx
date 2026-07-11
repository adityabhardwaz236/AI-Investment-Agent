function PriceCard({ price }) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-gray-400">

        Current Price

      </h2>

      <h1 className="text-5xl font-bold text-green-400 mt-4">

        ${price.price}

      </h1>

    </div>
  );
}

export default PriceCard;