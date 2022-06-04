# unit-testing-notes

A simple repository for unit testing, integration testing full of examples and notes

### Benefits of Testing

- being able to create tests is extremely beneficial due to the ability to automatically test the features present on a website. Instead of manually testing the functionality of our website everytime we change a line of code we can instead create tests that will do it for us automatically. They also help catch bugs! Saving a large amount of time.

### Unit vs Integration Test

- Unit tests focus on testing individual units(usually functons), while integration tests make sure everything works together. End to end testing is replicating a user actually using the application.

### Tools needed for testing

- A test runner(jest/karma): runs your tests(i.e the testing code you write, that is not apart of your main project code)
- Assertion Library(jest/chai): Used to define expected outcomes in tests and will check if said expectations are met

### Vitest and why you should use it

- Vitest is a new testing technology that is becoming quite popular amongst the community, especially because of how easily it works with module js (import/export), something jest can have issues with. Vitest can also be written the same way jest is.
- npm i --save-dev vitest to install

- When creating files for testing units proper naming consists of filename.test.js. This will tell our test runner to look for these files when running our tests

### Arrange, Act, Assert (The Triple A pattern)

- Very helpful for keeping tests organized and structured

- Arrange: Define the testing environment and values
- Act: Run the actual code/function that should be tested
- Assert: Evaluate the produced value/result and compare it to the expected value/result

### Keep your tests simple and concice

- Think about yourself coming back to a test after a long period of time, or a fellow developer working with the test. Everyone should be able to quickly understand and change the test if needed.
