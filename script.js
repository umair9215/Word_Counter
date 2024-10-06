const textInput = document.getElementById('text');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');

textInput.addEventListener('input', updateWordCount);

function updateWordCount() {
    var text = textInput.value;
    var words = text.split(" ");
    var wordsCount = words.length - 1;
    wordCount.innerHTML = "Word Count: " + wordsCount;

    var chars = text.length;
    charCount.innerHTML = "Character Count: " + chars;

    var sentences = text.split(".");
    var sentencesCount = sentences.length - 1;
    sentenceCount.innerHTML = "Sentence Count: " + sentencesCount;

    var paragraphs = text.split("\n");
    var paragraphsCount = paragraphs.length - 1;
    paragraphCount.innerHTML = "Paragraph Count: " + paragraphsCount;
}



