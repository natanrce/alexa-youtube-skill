function withPlop() {
  return (plop) => {
    plop.setGenerator('intent', {
      description: 'ASK SDK Intent using Typescript',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your intent name? ',
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../lambda/intents/{{name}}/{{name}}.intent.ts',
          templateFile: 'intent/Template.intent.ts.hbs',
        },
        {
          type: 'add',
          path: '../lambda/intents/{{name}}/index.ts',
          templateFile: 'templates/intent/index.ts.hbs',
        },
        {
          type: 'append',
          path: '../lambda/intents/index.ts',
          pattern: /(\n)*export \* from '.\/(\w+)';?/,
          templateFile: 'templates/intent/index.ts.hbs'
        }
      ],
    });
  };
}

module.exports = withPlop();
