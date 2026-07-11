function CompanyCard({ profile }) {
  return (
    <div className="glass rounded-3xl p-8 flex gap-6">

      <img
        src={profile.logo}
        alt={profile.name}
        className="w-24 h-24 rounded-full bg-white p-2"
      />

      <div>

        <h2 className="text-3xl font-bold">

          {profile.name}

        </h2>

        <p className="text-cyan-400 mt-2">

          {profile.ticker}

        </p>

        <p className="mt-4">

          {profile.exchange}

        </p>

        <p>

          {profile.country}

        </p>

      </div>

    </div>
  );
}

export default CompanyCard;