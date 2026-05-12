module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['support/**/*.js', 'step-definitions/**/*.js'],
    format: ['progress-bar', 'html:reports/report.html'],
  },
};
