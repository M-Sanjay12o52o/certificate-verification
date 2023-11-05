const crypto = require("crypto");

const uuidToEmailMapping = {};

// Function to generate a UUID and associate it with an email
function generateUUID(userEmail) {
  const randomId = Math.floor(Math.random() * 1000000000);
  const combinedData = userEmail + randomId;
  const uuid = crypto.createHash("md5").update(combinedData).digest("hex");

  // Store the mapping in the data structure
  uuidToEmailMapping[uuid] = userEmail;

  return uuid;
}

// Function to get the email from a UUID
function getEmailFromUUID(uuid) {
  return uuidToEmailMapping[uuid];
}

const userEmail = "user@example.com";
const generatedUUID = generateUUID(userEmail);
console.log("Generated UUID:", generatedUUID);

// Later, when you want to get the email from the UUID
const retrievedEmail = getEmailFromUUID(generatedUUID);
console.log("Retrieved Email:", retrievedEmail);
