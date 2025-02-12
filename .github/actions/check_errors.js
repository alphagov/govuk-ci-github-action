const core = require('@actions/core');
const github = require('@actions/github');



try {
  const testName = core.getInput('test-name');
  console.log(`Target test ${testName}!`);
  
  // Record the time of greeting as an output
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);



} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
}
