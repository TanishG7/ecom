
const SortOptions = () => {
  return (
    <div>
      <select>
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  )
}

export default SortOptions