const express = require("express");
const problems = require("./data/problems");
const router = express.Router();
const { spawnSync } = require("child_process");
const { performance } = require("perf_hooks");

function evaluate(code, language, problem) {
  let evaluationResult = {
    input: problem.example.input,
    expectedOutput: problem.example.expectedOutput,
    passed: false,
    executionTime: 0,
    score: 0,
    totalScore: 0,
  };

  switch (language) {
    case "cpp":
      try {
        const compiledCodeCpp = spawnSync(
          "g++",
          ["-x", "c++", "-o", "executable", "-"],
          {
            input: code,
            encoding: "utf-8",
          }
        );

        if (compiledCodeCpp.status === 0) {
          const startTime = performance.now();
          const executionResult = spawnSync("./executable", {
            encoding: "utf-8",
          });
          const endTime = performance.now();
          const executionTime = endTime - startTime;

          evaluationResult.output = executionResult.stdout.trim();
          evaluationResult.executionTime = executionTime;
          evaluationResult.totalScore = evaluationResult.passed ? 30 : 0;
        } else {
          evaluationResult.output = compiledCodeCpp.stderr.trim();
        }
      } catch (error) {
        evaluationResult.output = error.toString();
      }
      break;

    case "js":
      try {
        const startTime = performance.now();
        const executionResult = spawnSync("node", ["-e", code], {
          encoding: "utf-8",
        });

        const endTime = performance.now();
        const executionTime = endTime - startTime;

        evaluationResult.output = executionResult.stdout.trim();
        evaluationResult.executionTime = executionTime;
        evaluationResult.totalScore = evaluationResult.passed ? 30 : 0;
      } catch (error) {
        evaluationResult.output = error.toString();
      }
      break;

    case "python":
      try {
        const startTime = performance.now();
        const executionResult = spawnSync("python", ["-c", code], {
          encoding: "utf-8",
        });
        const endTime = performance.now();
        const executionTime = endTime - startTime;

        evaluationResult.output = executionResult.stdout.trim();
        evaluationResult.executionTime = executionTime;
        evaluationResult.totalScore = evaluationResult.passed ? 30 : 0;
      } catch (error) {
        evaluationResult.output = error.toString();
      }
      break;
      
      default:
      break;
  }

  return evaluationResult;
}

router.get("/problems", (req, res) => {
  res.json(problems);
});

router.post("/evaluate", (req, res) => {
  const { code, language, problemId } = req.body;
  const problem = problems.find((prob) => prob.id === problemId);
  const evaluationResult = evaluate(code, language, problem);
  res.json(evaluationResult);
});

module.exports = router;
