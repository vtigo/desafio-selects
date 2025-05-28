export type SalesEntry = { month: string; sales: number }
export type BrandData = Record<string, SalesEntry[]>
export type ProductData = Record<string, BrandData>
export type CategoryData = Record<string, ProductData>
export type SalesData = CategoryData
