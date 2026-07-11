import { jsPDF } from "jspdf";

function ReportButton({ profile, price, aiAnalysis }) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("InvestAI Investment Report", 20, 20);

    doc.setFontSize(12);

    doc.text(`Company: ${profile.name}`, 20, 40);
    doc.text(`Ticker: ${profile.ticker}`, 20, 50);
    doc.text(`Current Price: $${price.price}`, 20, 60);

    doc.text(
      `Recommendation: ${aiAnalysis.recommendation}`,
      20,
      75
    );

    doc.text(
      `Confidence: ${aiAnalysis.confidence}%`,
      20,
      85
    );

    doc.text(`Risk: ${aiAnalysis.risk}`, 20, 95);

    doc.text("AI Summary:", 20, 110);

    const summary = doc.splitTextToSize(
      aiAnalysis.summary,
      170
    );

    doc.text(summary, 20, 120);

    let y = 120 + summary.length * 7 + 10;

    doc.text("Pros:", 20, y);

    aiAnalysis.pros.forEach((pro, index) => {
      doc.text(`• ${pro}`, 25, y + (index + 1) * 8);
    });

    y += aiAnalysis.pros.length * 8 + 20;

    doc.text("Cons:", 20, y);

    aiAnalysis.cons.forEach((con, index) => {
      doc.text(`• ${con}`, 25, y + (index + 1) * 8);
    });

    y += aiAnalysis.cons.length * 8 + 20;

    doc.text(
      `Generated on: ${new Date().toLocaleString()}`,
      20,
      y
    );

    doc.save(`${profile.ticker}-Investment-Report.pdf`);
  };

  return (
    <button
      onClick={downloadPDF}
      className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold transition"
    >
      📄 Download Report
    </button>
  );
}

export default ReportButton;