import { useState } from "react";
import api from "../../services/api";

function ChatAssistant({ company }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await api.post("/chat", {
        company,
        question,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response.data.answer,
        },
      ]);

      setQuestion("");
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="glass rounded-3xl p-8 mt-10">

      <h2 className="text-3xl font-bold mb-6">
        AI Investment Assistant
      </h2>

      <div className="h-80 overflow-y-auto bg-black/20 rounded-xl p-4 mb-4">

        {messages.length === 0 && (
          <p className="text-gray-400">
            Ask anything about {company}
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.sender === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <div
              className={`inline-block rounded-xl px-4 py-3 max-w-[80%]
                ${
                  msg.sender === "user"
                    ? "bg-cyan-600"
                    : "bg-gray-800"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

      </div>

      <div className="flex gap-4">

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask AI..."
          className="flex-1 rounded-xl p-4 bg-black/20 border border-white/10 outline-none"
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="px-8 rounded-xl bg-cyan-500 hover:bg-cyan-400"
        >
          {loading ? "..." : "Send"}
        </button>

      </div>

    </div>
  );
}

export default ChatAssistant;