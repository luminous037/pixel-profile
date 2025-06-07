import { describe, it, expect } from 'vitest'
import { renderStats } from '../src'
import { KITTEN_AVATAR } from './avatar/kitten'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import puppeteer from 'puppeteer'

expect.extend({ toMatchImageSnapshot })

async function svgToPngBuffer(svg: string): Promise<Buffer> {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(`<body style="margin:0">${svg}</body>`)
  const element = await page.$('svg')
  const buffer = await element.screenshot({ type: 'png' })
  await browser.close()
  return buffer
}

describe('GitHub stats card with topLanguages', () => {
  it('should match image snapshot', async () => {
    const svg = await renderStats({
      name: 'Kumiko',
      username: 'Reina',
      totalStars: 21999,
      totalCommits: 38,
      totalPRs: 14001,
      totalIssues: 233,
      contributedTo: 11,
      avatarUrl: KITTEN_AVATAR,
      rank: { level: 'A', percentile: 0, score: 0 },
      topLanguages: 'TypeScript 65.4%, HTML 20.1%, CSS 14.5%'
    })

    const png = await svgToPngBuffer(svg)
    expect(png).toMatchImageSnapshot({
      customSnapshotIdentifier: 'github-stats-with-toplang'
    })
  })
})
