function pingProblemController(req, res) {
  return res.json({ message: "Ping controller is active" });
}

function addProblem(req, res) {}
function getProblem(req, res) {}
function getProblems(req, res) {}
function updateProblem(req, res) {}
function deleteProblem(req, res) {}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
