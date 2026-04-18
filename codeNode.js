const inputData = $input.first().json;

let rawText = "";

try {
    rawText = inputData.output[0].content[0].text; 
} catch (e) {

    rawText = inputData.output[0].content[0].text || "No text found";  // if there is no word then this write no words can found in subject before the line
}

const parts = rawText.split('\n\n');
const subject = parts[0].replace('Subject: ', '').trim();
const body = parts.slice(1).join('\n\n').trim();

return {
  subject: subject,
  body: body
};
