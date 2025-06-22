import { defineConfig } from "cypress";
import moment from "moment-timezone";

export default defineConfig({
  e2e: {
    baseUrl: "https://qa-challenge-rx.vercel.app/",
    setupNodeEvents(on, config) {
      // I had to use a Cypress task here because 'moment-timezone' is a Node.js library
      // and won't run directly in the browser where the tests are executed. Attempting
      // to import it in a test file resulted in a 'module is not defined' error.
      // By creating this task, I can run the timezone conversion logic in the Cypress
      // backend (Node.js) and pass the correctly formatted date string back to my test.
      on("task", {
        getFormattedDate(dateString) {
          return moment.tz(dateString, "MM/DD/YYYY", "America/Los_Angeles").format("MM/DD/YYYY");
        },
      });
    },
  },
}); 