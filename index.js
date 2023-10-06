const concatenate = (word1, word2) => {
  return `Contenating... ${word1} ${word2}`;
};

const logger = (message) => {
  console.log(`🚀 ${message}`);
};

logger(concatenate("Hello", "world"));
