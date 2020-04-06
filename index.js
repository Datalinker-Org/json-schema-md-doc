const core = require('@actions/core');
const github = require('@actions/github');
const glob = require('@actions/glob');

try {
  // Creates to globber to search through the repository for the JSON files
  const patterns = ['**/json']
  const globber = await glob.create(patterns.join('\n'))

  // hopefully if this works right should iterate of the list of all the JSON files in the repository
  for await (const file of globber.globGenerator()){
    console.log(file)
  }

  // TODO: Save the MD files from the generator
} catch (error) {
  core.setFailed(error.message);
}