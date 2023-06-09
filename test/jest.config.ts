import type { Config } from '@jest/types';


const config: Config.InitialOptions = {
  preset: './jest-preset.js',
  setupFilesAfterEnv: ['./helper/jest.setup.ts'],
  sandboxInjectedGlobals: [
    'Math',
  ],
};

// eslint-disable-next-line import/no-default-export
export default config;
