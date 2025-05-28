import { useState, useEffect, useMemo } from 'react'
import salesData from './data/sales.json'
import SelectWithLabel from './components/select-with-label'
import type { SalesData, SalesEntry } from './types/sales'
import { SalesChart } from './components/sales-chart'

export default function App() {
  const data: SalesData = salesData
  
  const categories = useMemo(() => Object.keys(data), [data])
  const [category, setCategory] = useState<string>(() => categories[0] || '')

  const products = useMemo(() => Object.keys(data[category] || {}), [category, data])
  const [product, setProduct] = useState<string>(() => products[0] || '')

  const brands = useMemo(
    () => Object.keys(data[category]?.[product] || {}),
    [category, product, data]
  )
  const [brand, setBrand] = useState<string>(() => brands[0] || '')

  // Reset product when category changes
  useEffect(() => {
    const prods = Object.keys(data[category] || {})
    setProduct(prods[0] || '')
  }, [category, data])

  // Reset brand when category or product changes
  useEffect(() => {
    const brs = Object.keys(data[category]?.[product] || {})
    setBrand(brs[0] || '')
  }, [category, product, data])

  const chartData: SalesEntry[] = data[category]?.[product]?.[brand] || []
  const chartTitle = `${category} - ${product} - ${brand} Sales`

  return (
    <section id="sales-section" className="max-w-5xl w-full mx-auto px-6">
      <h2 className="sr-only">Sales Overview</h2>
      
      <div className="flex flex-col md:flex-row gap-4 my-6">
        <SelectWithLabel
          id="category-select"
          label="Categoria"
          value={category}
          options={categories}
          onChange={setCategory}
        />

        <SelectWithLabel
          id="product-select"
          label="Produto"
          value={product}
          options={products}
          onChange={setProduct}
        />

        <SelectWithLabel
          id="brand-select"
          label="Marca"
          value={brand}
          options={brands}
          onChange={setBrand}
        />
      </div>

      <div>
        <SalesChart data={chartData} title={chartTitle} />
      </div>

    </section>
  )
}
