import { HandlerInput } from 'ask-sdk-core';

export function isIntentRequestHandler(
  handlerInput: HandlerInput,
  intentName: string,
) {
  return (
    handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
    handlerInput.requestEnvelope.request.intent.name === intentName
  );
}
