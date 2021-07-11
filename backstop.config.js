
const token = process.env.TOKEN || '829c19e5-bbe6-4679-9a10-83fae4c13c06'
const index = process.env.INDEX || 0
const url = process.env.REFERENCE === 'true'
  ? `https://admin.bedore.jp/webagent/example?line_bot_uuid=${token}&index=${index}&show_private_templates=false&skip_logging=true&slots=[]`
  : `http://localhost:9000/preview.html?config_origin=https://webagent.bedore.jp&line_bot_uuid=${token}&index=${index}&show_private_templates=false&skip_logging=true&slots=[]`
  // : `https://stg-webagent.bedore.jp/preview.html?config_origin=https://webagent.bedore.jp&line_bot_uuid=${token}&index=${index}&show_private_templates=false&skip_logging=true&slots=[]`

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
  onReadyScript: 'puppet/onReady.js',
  scenarios: [
    {
      label: 'BackstopJS Homepage',
      url,
      delay: 3000,
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
