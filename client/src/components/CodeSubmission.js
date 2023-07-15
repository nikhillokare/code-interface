import React, { useState } from 'react';
import { Box, Textarea, Button, Text, Select } from '@chakra-ui/react';

const languageBoilerplate = {
  cpp: `#include <iostream>
using namespace std;

int main() {
  // Your C++ code here
  return 0;
}`,
  js: `// Write Your JavaScript Code Here`,
  python: `// Write Your Python Code Here`
};

function CodeSubmission() {
  const [code, setCode] = useState(languageBoilerplate.cpp);
  const [language, setLanguage] = useState('cpp');
  const [evaluationResult, setEvaluationResult] = useState(null);

  const handleSubmit = async () => {
    if (code === languageBoilerplate.cpp) {
      setEvaluationResult({
        output: 'Please write your code in the code editor.',
        executionTime: 0,
        score: 0,
      });
      return;
    }

    try {
      const response = await fetch('https://coding-comprtition-interface.onrender.com/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language, problemId: 1 }),
      });
      const evaluationResult = await response.json();
      setEvaluationResult(evaluationResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCodeChange = e => {
    setCode(e.target.value);
  };

  const handleLanguageChange = e => {
    setLanguage(e.target.value);
    setCode(languageBoilerplate[e.target.value]);
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Code Submission
      </Text>
      <label>
        Select Your Language:
        <Select value={language} onChange={handleLanguageChange}>
          <option value="cpp">C++</option>
          <option value="js">JavaScript</option>
          <option value="python">Python</option>
        </Select>
      </label>
      <br />
      <Textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Enter your code solution here"
        mb={4}
        rows={11}
      />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit
      </Button>
      {evaluationResult && (
        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Evaluation Results
          </Text>
          <Text>Output: {evaluationResult.output}</Text>
          <Text>
            Execution Time: {evaluationResult.executionTime.toFixed(2)} ms
          </Text>
          {evaluationResult.executionTime === 0 ? (
            <>
              <Text>Total Score: 0</Text>
              <Text>Your code was not executed.</Text>
            </>
          ) : (
            <>
              <Text>Total Score: 10</Text>
              <Text>Your code executed successfully!</Text>
            </>
          )}
        </Box>
      )}
    </Box>
  );
}

export default CodeSubmission;
