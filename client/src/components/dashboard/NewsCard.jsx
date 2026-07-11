function NewsCard({ news }) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        Latest News
      </h2>

      <div className="space-y-5">

        {news.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="block border-b border-white/10 pb-4 hover:text-cyan-400 transition"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {item.content}
            </p>
          </a>
        ))}

      </div>

    </div>
  );
}

export default NewsCard;