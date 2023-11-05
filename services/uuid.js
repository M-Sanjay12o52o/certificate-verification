const crypto = require("crypto");

function generateUUID(userEmail) {
  // Generate a random number to add randomness
  const randomId = Math.floor(Math.random() * 10000);

  // Concatenate user's email and the random number
  const combinedData = userEmail + randomId;

  // Create a hash of the combined data
  const uuid = crypto.createHash("md5").update(combinedData).digest("hex");

  return uuid;
}

const userEmail = "user@example.com";
const uuid = generateUUID(userEmail);
console.log("Generated UUID:", uuid);
