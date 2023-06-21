import { RequestHandler } from 'ask-sdk-core';
import { isIntentRequestHandler } from './helpers/intent.helper';
import { MESSAGES } from './helpers';

export const LaunchIntent: RequestHandler = {
  canHandle(handlerInput) {
    return isIntentRequestHandler(handlerInput, 'LaunchIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(MESSAGES.APPLICATION_LAUNCH)
      .reprompt(MESSAGES.APPLICATION_REPROMPT)
      .getResponse();
  },
};
