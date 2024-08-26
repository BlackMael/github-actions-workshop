const core = require('@actions/core');
const github = require('@actions/github');

try {
    const jsNum1 = core.getInput('number1');
    const jsNum2 = core.getInput('number2');

    const jsSum = Number(jsNum1) + Number(jsNum2);

    core.setOutput('result', jsSum);

} catch (error) {
    core.setFailed(error.message);
}
