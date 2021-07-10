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
      url: 'https://stg-webagent.bedore.jp/preview.html?config_origin=https://webagent.bedore.jp&line_bot_uuid=829c19e5-bbe6-4679-9a10-83fae4c13c06&index=7&show_private_templates=false&skip_logging=true&slots=[]&scene=2',
      delay: 8000,
      selectors: ['#bedore-webagent-inner']
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
