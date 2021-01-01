import logAppRunning from './logAppRunning';

jest.mock('chalk', () => ({
  blue: (text) => text,
  bold: {
    green: (text) => text,
  }
}));

describe('server', () => {
  const consoleLog = console.log;

  beforeAll(() => {
    console.log = jest.fn();
  });

  afterAll(() => {
    console.log = consoleLog;
  });

  it('should log the correct message', () => {
    const PORT = 1234;
    logAppRunning({ PORT });

    expect(console.log).toHaveBeenCalledWith(`
    App is listening on port 1234
    http://localhost:1234/
`);
  });
});
