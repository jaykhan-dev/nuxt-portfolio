---
title: Scrapping Tables With Puppeteer
previewImage: generic/puppeteer-logo.png
published: true
categories:
  - Javascript
  - Puppeteer
---

# Scrapping Tables With Puppeteer

## HTML Table Structure

Here is a basic structure of a table in `haml` (same as HTML), I just used it because it is visually more clear.

```haml
table
  tbody
    tr
      td
      td
      td
    tr
      td
      td
      td
    tr
      td
      td
      td
```

So the desired information is most likely located in the `td` element.

## Scrapper Script

Assuming that you've gotten to the page that has the target information.

```javascript
const targetInfo = await page.evaluate(() => {
  return Array(
    document.querySelector('#targetTable').querySelectorAll('tr')).map(row => {
      let results = []
      rows.forEach(row => {
        const td = row.querySelectorAll('td')

        for (let x = 0; x < td.length; x++) {
          results.push(td[x].innerText)
        }
      })
      return results
    })
  )
})
```

That is how you would do a basic table using Puppeteer.

### Improvements

Since this is a **basic** example, you do need to consider `\n` or `\t` spaces that add a slight bit of complexity to this whole scrapping business. Thats where you might want to use some `split('\t')`.
