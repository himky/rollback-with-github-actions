module.exports = {
  id: 'backstop_default',
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480
    },
    {
      label: 'tablet',
      width: 1024,
      height: 768
    }
  ],
  scenarios: [
    {
      label: 'BackstopJS Homepage',
      url: 'http://0.0.0.0:8080',
      // url: 'https://stg-webagent.bedore.jp/preview.html?config_origin=https://stg-webagent.bedore.jp&line_bot_uuid=f8a9de82-1320-4a4c-bc6a-5493461ab9e1&index=0&show_private_templates=false&skip_logging=true&slots=[]',
      delay: 500,
      // selectors: ['#bedore-webagent-inner']
    }
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report'
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox']
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}
