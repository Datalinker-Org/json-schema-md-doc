const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('@actions/glob');

try {
  runMDGeneration();
} catch (error) {
  core.setFailed(error.message);
}

async function runMDGeneration(){
  // Creates to globber to search through the repository for the JSON files
  const patterns = ['**/*.json', '!**/node_modules/**/*.json'];
  const globber = await glob.create(patterns.join('\n'));

  var fileList = [];

  // hopefully if this works right should iterate of the list of all the JSON files in the repository
  for await (const file of globber.globGenerator()){
    fileList.push(file);
  }

  core.setOutput("files", fileList.join('\n'))

  // TODO: Save the MD files from the generator
}