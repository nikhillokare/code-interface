import React, { useEffect, useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function ProblemStatement() {
  const [problems, setProblems] = useState([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch('https://coding-comprtition-interface.onrender.com/api/problems');
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProblems();
  }, []);

  const handleNextProblem = () => {
    setCurrentProblemIndex(prevIndex => prevIndex + 1);
  };

  const handlePreviousProblem = () => {
    setCurrentProblemIndex(prevIndex => prevIndex - 1);
  };

  const currentProblem = problems[currentProblemIndex];
  const totalProblems = problems.length;
  const isFirstProblem = currentProblemIndex === 0;
  const isLastProblem = currentProblemIndex === totalProblems - 1;

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Problem {currentProblemIndex + 1} of {totalProblems}
      </Text>
      {currentProblem ? (
        <>
          <Text>{currentProblem.statement}</Text>
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Example
            </Text>
            <Text>{currentProblem.example}</Text>
          </Box>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      {!isFirstProblem && (
        <Button
          mt={4}
          colorScheme="teal"
          mr={1}
          onClick={handlePreviousProblem}
        >
          Previous Problem
        </Button>
      )}
      {!isLastProblem && currentProblemIndex < totalProblems - 1 && (
        <Button mt={4} ml={1} colorScheme="teal" onClick={handleNextProblem}>
          Next Problem
        </Button>
      )}
    </Box>
  );
}

export default ProblemStatement;
