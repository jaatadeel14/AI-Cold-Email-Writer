const inputData = $input.first().json;

let rawText = "";

try {
    rawText = inputData.output[0].content[0].text;    // if there is no word then this write no words can found in subject before the line
} catch (e) {

    rawText = inputData.output[0].content[0].text || "No text found";  
}

const parts = rawText.split('\n\n');
const subject = parts[0].replace('Subject: ', '').trim(); // future code is here
const body = parts.slice(1).join('\n\n').trim();

return {
  subject: subject,
  body: body
};
