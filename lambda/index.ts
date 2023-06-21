import 'dotenv/config';

import Alexa from 'ask-sdk-core';
import * as Intents from './intents';

export const handler = Alexa.SkillBuilders.custom().addRequestHandlers(
  Intents.LaunchIntent,
);
