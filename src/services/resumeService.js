import axios from 'axios';

const API_BASE_URL = '/api';

export const resumeService = {
  async analyzeResume(text) {
    try {
      const response = await axios.post(`${API_BASE_URL}/analyze-text`, { text });
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      // Fallback to client-side analysis if backend fails
      return this.analyzeTextLocally(text);
    }
  },

  analyzeTextLocally(text) {
    // Extract email
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/);
    const email = emailMatch ? emailMatch[0] : 'Not found';

    // Extract phone
    const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\(?\d{2,3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    const phone = phoneMatch ? phoneMatch[0] : 'Not found';

    // Keywords to look for
    const keywords = [
      'React', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 
      'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Git', 'CI/CD',
      'Kubernetes', 'Express', 'HTML', 'CSS', 'Tailwind', 'Vue'
    ];
    
    const foundKeywords = keywords.filter(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );

    // Extract skills (simplified - in real app would be more sophisticated)
    const skillsSection = text.match(/(Skills|Навички|Technical)([\s\S]*?)(Experience|Work History|Досвід|Education|Освіта)/i);
    let skills = foundKeywords; // Default to keywords if no skills section found
    
    if (skillsSection) {
      const skillsText = skillsSection[2];
      skills = skillsText
        .split(/[,;\n]/)
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0 && skill.length < 30)
        .slice(0, 10); // Limit to 10 skills
    }

    return {
      fileName: 'resume.txt',
      wordCount: text.split(/\s+/).length,
      email,
      phone,
      keywords: foundKeywords.slice(0, 8), // Limit to 8 keywords
      skills: skills.slice(0, 8) // Limit to 8 skills
    };
  }
};
