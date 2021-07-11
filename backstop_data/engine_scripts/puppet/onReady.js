module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  // add more ready handlers here...
  page.evaluate(() => {
    [...document.querySelectorAll('*')].forEach(e => {
      if (e.id.startsWith('bedore-webagent')) return
      e.style.padding = 0
      e.style.margin = 0
      e.style.wordBreak = 'break-all'
    })
  })
};
