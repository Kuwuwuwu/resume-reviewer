const pdfParse = require('pdf-parse');

exports.analyzePDF = async (req, res) => {
  try {
    const dataBuffer = req.file.buffer;
    const data = await pdfParse(dataBuffer);
    const text = data.text;

    // 🔹 3.1 Розбиття на блоки
    const blocks = {
      contacts: extractContacts(text),
      experience: extractExperience(text),
      skills: extractSkills(text),
    };

    // 🔹 3.2 Перевірка ключових слів
    const keywords = ['React', 'Node.js', 'Docker', 'API', 'Tailwind'];
    const found = keywords.filter((word) => text.includes(word));

    res.json({
      totalWords: text.split(/\s+/).length,
      keywordsFound: found,
      blocks,
    });
  } catch (err) {
    res.status(500).json({ error: 'Помилка при аналізі PDF' });
  }
};

// 🧩 Допоміжні функції
function extractContacts(text) {
  const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/);
  const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{2,3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
  return {
    email: emailMatch ? emailMatch[0] : null,
    phone: phoneMatch ? phoneMatch[0] : null,
  };
}

function extractExperience(text) {
  const expSection = text.match(/(Experience|Work History|Досвід)([\s\S]*?)(Education|Освіта|Skills|Навички)/i);
  return expSection ? expSection[2].trim().split('\n').filter(Boolean) : [];
}

function extractSkills(text) {
  const skillsSection = text.match(/(Skills|Навички)([\s\S]*?)(Experience|Work History|Досвід|Education|Освіта)/i);
  return skillsSection ? skillsSection[2].trim().split(/[,;\n]/).map(s => s.trim()) : [];
}