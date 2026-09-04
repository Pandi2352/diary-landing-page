export interface Product {
  id: string
  name: string
  category: 'Executive' | 'Corporate' | 'Spiral' | 'Hard Bound' | 'Laminated'
  binding: string
  cover: string
  description: string
  popular?: boolean
  image: string
  tags: string[]
}

export type ColorTheme = 'royalNavy' | 'emeraldGold' | 'obsidianDark' | 'crimsonRuby' | 'auroraRainbow'

