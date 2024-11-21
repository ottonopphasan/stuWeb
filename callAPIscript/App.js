import { useState } from 'react';
import axios from 'axios';

function App() {
  const [updatedAnswer, setUpdatedAnswer] = useState(""); // Input the updated answer
  const [responseMessage, setResponseMessage] = useState(""); // To display the response
  console.log("Component rendered. Current updatedAnswer:", updatedAnswer);
  // updatedAnswer make string to store the updated answer

  const handleUpdateAnswer = async () => {
    const hardcodedItemId = "673d8c0eb481cbf6605e833b"; // Replace with your known item_id
  
    if (!updatedAnswer) {
      alert("Please provide an updated answer.");
      return;
    }
  
    try {
      console.log(`Sending POST request to update-answer/${hardcodedItemId} with:`, { updated_answer: updatedAnswer });
  
      const response = await axios.post(
        `http://127.0.0.1:8000/update-answer/673d8c0eb481cbf6605e833b`,
        updatedAnswer, // Correct string structure


        {
          headers: {
            "Content-Type": "application/json"}
        }
      );
  
      console.log("Response from server:", response.data);
      setResponseMessage(response.data.message); // Display success message
    } catch (error) {
      console.error("Error in POST request:", error);
      setResponseMessage("Failed to update the answer");
    }
  };
  

  return (
    <div>
      <textarea
        value={updatedAnswer}
        onChange={(e) => setUpdatedAnswer(e.target.value)}
        placeholder="Enter the new answer here"
      ></textarea>
      <button onClick={handleUpdateAnswer}>Update Answer</button>
      <p>{responseMessage}</p>
    </div>
  );
}

export default App;
