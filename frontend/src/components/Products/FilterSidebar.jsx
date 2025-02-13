import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: searchParams.get("category") || "",
        gender: searchParams.get("gender") || "",
        price: searchParams.get("price") || "",
        color: searchParams.get("color") || "",
        size: searchParams.get("size") || "",
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    const[priceRange, setPriceRange] = useState([0,100]);
    const categories= ["Top Wear", "Bottom Wear"]
    const genders = ["Men", "Women"]
    const colors= ["Red","Blue","Green","Yellow","Black","White","Gray","Pink","Beige","Navy"]
    const sizes= ["XS","S","M","L","XL","XXL"]
    const materials= ["Wool","Cotton","Denim","Polyester","Silk","Viscose","Linen","Fleece"]
    const brands= ["Brand A","Brand B","Brand C"]

    useEffect(() => {
        const params= Object.fromEntries([...searchParams]);
        
        setFilters({
          category: params.category || "",
          gender: params.gender || "",
          price: params.price || "",
          color: params.color || "",
          size: params.size ? params.size.split(",") : [],
          material: params.material ? params.material.split(",") : [],
          brand: params.brand ? params.brand.split(",") : [],
          minPrice: params.minPrice || 0,
          maxPrice: params.maxPrice || 100,
        });

        if (params.minPrice && params.maxPrice) {
            setPriceRange([params.minPrice, params.maxPrice]);
        }

        setSearchParams(params);
        
        setPriceRange
    });


  return (
    <div>FilterSidebar</div>
  )
}

export default FilterSidebar