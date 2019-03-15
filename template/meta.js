module.exports = {
  prompts: {
    author: {
      type: "input",
      message: 'What\'s author name?',
      validate: function (value) {
        var pass = value.match(/^\S[^?'"“”\\/<>|]+$/i);
        if (pass) {
          return true;
        }
        return 'Please enter a valid author name';
      }
    }
  }
}
