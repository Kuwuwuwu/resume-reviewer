const pdfParse = require('pdf-parse');

exports.analyzePDF = async (req, res) => {
  try {
    const dataBuffer = req.file.buffer;
    const data = await pdfParse(dataBuffer);
    const text = data.text;

    const keywords = ['React', 'Node.js', 'Docker', 'API', 'Tailwind'];
    const found = keywords.filter((word) => text.includes(word));

    res.json({
      totalWords: text.split(/\s+/).length,
      keywordsFound: found,
    });
  } catch (err) {
    res.status(500).json({ error: 'Помилка при аналізі PDF' });
  }
};