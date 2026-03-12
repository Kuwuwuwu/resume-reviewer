const express = require('express');

const router = express.Router();

// Helper functions (copied from analyzeController)
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

router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'No text provided' });
    }

    // Extract contact information
    const contacts = extractContacts(text);
    
    // Extract experience and skills
    const experience = extractExperience(text);
    const skills = extractSkills(text);
    
    // Check for keywords
    const keywords = ['React', 'Node.js', 'Docker', 'API', 'Tailwind', 'TypeScript', 'JavaScript', 'Python', 'AWS', 'MongoDB'];
    const foundKeywords = keywords.filter((word) => text.includes(word));
    
    // Return analysis results
    res.json({
      fileName: 'resume.txt',
      wordCount: text.split(/\s+/).length,
      email: contacts.email || 'Not found',
      phone: contacts.phone || 'Not found',
      keywords: foundKeywords,
      skills: skills.slice(0, 8), // Limit to 8 skills
      experience: experience.slice(0, 5) // Limit to 5 experience entries
    });
    
  } catch (error) {
    console.error('Text analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze text' });
  }
});

module.exports = router;
