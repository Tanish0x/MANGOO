"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const MangoLogo = () => (
  <svg width="120" height="40" viewBox="0 0 2000 400" className="fill-current">
    <path d="m223.2 166.7 29.8 46.2 60.1-93.3v206.6h51.7V25.7H312zM78.1 25.7H25.8v300.5h51.9V119.6L195.4 303l30-46.8zM675.7 233l47.9 93.2h62.3L629.5 25.7h-56.2l-.1.1 78.4 159.3H547.5l27.1-51.9-28.3-56.5-131.8 249.5h58.3l49.3-93.1zm455.5-207.3h-51.9v145.9l51.9 50.8zm-250.3 0h-52.7v300.5h51.9V101.6l212.5 224.6h38.6v-36.5zm612.6 83.4c-24.7-25-62.8-41-105.5-41-68.2 0-124.5 40.8-133.5 93.7h-57.1c7.5-82.2 93.7-142.7 191.3-142.7 58 0 110.2 21.1 145.3 55zm-110.3 175.1c-56.9 0-105.4-30.1-123.4-72.1h-58.2c19.3 72.5 95 120.8 184.9 120.8 20.9 0 44.9-2 64.8-6.8 45-10.9 94.2-39.4 94.2-84.4v-79.9h-162.8l-.1 50.3h110.9v22.8c0 25.2-38.7 39.8-62.3 44.9-12.7 2.8-29.1 4.4-42.2 4.4zm591-108c0-89.6-83.5-159.1-186-159.1-99.3 0-186.5 66.3-186.5 154.3 0 83 68.5 149.5 160.7 160v-50.2c-60.4-9.7-106-53.6-106-106.5 0-60 58.7-108.6 131-108.6 72.4 0 131 48.7 131 108.6 0 52.5-44.9 96.1-104.6 106.3v50.3c88.7-10.5 160.4-74.5 160.4-155.1"></path>
  </svg>
)

const productImages = [
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37.jpg?imwidth=480&imdensity=1&ts=1738161302123",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/outfit/S/87025936_37-99999999_01.jpg?imwidth=2048&imdensity=1&ts=1738161302123",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_R.jpg?imwidth=2048&imdensity=1&ts=1738161302123",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_D1.jpg?imwidth=2048&imdensity=1&ts=1738161302123",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_D2.jpg?imwidth=2048&imdensity=1&ts=1735635898098",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_D3.jpg?imwidth=2048&imdensity=1&ts=1743082517023",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_D8.jpg?imwidth=2048&imdensity=1&ts=1735635898098",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_B.jpg?imwidth=2048&imdensity=1&ts=1735635898098",
  "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87025936_37_D0.jpg?imwidth=2048&imdensity=1&ts=1735635898098",
]

const relatedProducts = [
  {
    id: 1,
    name: "100% LINEN SLIM-FIT SHIRT",
    price: "đ1,999,000",
    color: "Khaki",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87075929_37_B.jpg?ts=1738226058688&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 2,
    name: "100% LINEN SLIM-FIT SHIRT",
    price: "đ1,999,000",
    color: "Dark Green",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87000606_37_B.jpg?ts=1727890470817&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 3,
    name: "100% LINEN SLIM-FIT SHIRT",
    price: "đ1,999,000",
    color: "Turquoise",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87037891_46_B.jpg?ts=1739269522340&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 4,
    name: "100% LINEN SLIM-FIT SHIRT",
    price: "đ1,999,000",
    color: "Brown",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87035934_37_B.jpg?ts=1742837717341&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 5,
    name: "100% LINEN SLIM-FIT SHIRT",
    price: "đ1,999,000",
    color: "Light Green",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87000602_43_B.jpg?ts=1729186457571&im=SmartCrop,width=280,height=392&imdensity=1",
  },
]

const combineProducts = [
  {
    id: 1,
    name: "Linen-blend regular-fit pleated jeans",
    price: "đ1,999,000",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87065919_05_B.jpg?ts=1736876088350&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 2,
    name: "Amalfi 100% linen slim-fit suit trousers",
    price: "đ2,499,000",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87015932_99_B.jpg?ts=1738334133681&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 3,
    name: "Nappa leather belt",
    price: "đ1,199,000",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87070602_99_B.jpg?ts=1731517486559&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 4,
    name: "Leather strap sandals",
    price: "đ2,899,000",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87067889_99_B.jpg?ts=1742895325482&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 5,
    name: "Round-framed sunglasses",
    price: "đ1,199,000",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87050606_99_B.jpg?ts=1728473689009&im=SmartCrop,width=280,height=392&imdensity=1",
  },
  {
    id: 6,
    name: "Casual sneakers",
    price: "đ1,599,000",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87069204_07_B.jpg?ts=1741773920098&im=SmartCrop,width=280,height=392&imdensity=1",
  },
]

export default function MangoProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState("khaki")
  const [currentSection, setCurrentSection] = useState(0)

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
  const colors = [
    { name: "khaki", color: "#8B7355" },
    { name: "black", color: "#000000" },
    { name: "white", color: "#FFFFFF" },
    { name: "navy", color: "#1B2951" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / (windowHeight * 0.8))
      setCurrentSection(Math.min(section, 3))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const scrollbarHideStyle = `
  * {
    font-family: PrimaryFont, Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: rgb(19, 19, 19);
    font-size: 13px;
    line-height: 18px;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

  useEffect(() => {
    const handleImageScroll = () => {
      const container = document.querySelector(".overflow-y-auto")
      if (container) {
        const scrollTop = container.scrollTop
        const imageHeight = window.innerHeight
        const newIndex = Math.round(scrollTop / imageHeight)
        setCurrentImageIndex(Math.min(newIndex, productImages.length - 1))
      }
    }

    const container = document.querySelector(".overflow-y-auto")
    if (container) {
      container.addEventListener("scroll", handleImageScroll)
      return () => container.removeEventListener("scroll", handleImageScroll)
    }
  }, [productImages.length])

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{scrollbarHideStyle}</style>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <nav className="flex space-x-8">
              <a href="#" className="text-xs font-normal text-[rgb(19,19,19)] hover:text-gray-600 tracking-wider">
                WOMEN
              </a>
              <a
                href="#"
                className="text-xs font-normal text-[rgb(19,19,19)] hover:text-gray-600 border-b-2 border-black tracking-wider"
              >
                MEN
              </a>
              <a href="#" className="text-xs font-normal text-[rgb(19,19,19)] hover:text-gray-600 tracking-wider">
                KIDS
              </a>
            </nav>

            <MangoLogo />

            <div className="flex items-center space-x-6">
              <button className="text-xs font-normal text-[rgb(19,19,19)] hover:text-gray-600 tracking-wider">
                SEARCH
              </button>
              <button className="text-xs font-normal text-[rgb(19,19,19)] hover:text-gray-600 tracking-wider">
                LOG IN
              </button>
              <button className="text-xs font-normal text-[rgb(19,19,19)] hover:text-gray-600 tracking-wider">
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="relative">
            {/* Main scrollable image container */}
            <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
              {productImages.map((image, index) => (
                <div key={index} className="h-screen snap-start flex items-center justify-center bg-gray-50">
                  <div className="w-full h-full relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`100% Linen Slim-Fit Shirt - View ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Image counter overlay */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {productImages.length}
            </div>

            {/* Navigation dots */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index)
                    const container = document.querySelector(".overflow-y-auto")
                    if (container) {
                      container.scrollTo({
                        top: index * window.innerHeight,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:pl-8">
            <div className="sticky top-24">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">100% LINEN SLIM-FIT SHIRT</h1>
              <p className="text-2xl font-bold text-gray-900 mb-4">đ1,999,000</p>

              {/* Color Selection */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color.name ? "border-black" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 capitalize">{selectedColor}</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-900">Size</span>
                  <button className="text-sm text-gray-600 underline">Size guide</button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 text-sm font-medium border rounded ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 text-gray-900 hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Button className="w-full bg-black text-white hover:bg-gray-800 py-3">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="w-full border-black text-black hover:bg-gray-50 py-3">
                  Get the look
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-gray-600 space-y-2">
                <p>Free delivery to store</p>
                <button className="underline">See availability in store</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">DESCRIPTION</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <p>
                The white colour is an online exclusive. Slim fit. 100% linen fabric. Shirt Collar. Long sleeve with
                buttoned cuffs. Front closure with buttons. Straight hem. Model is 190 cm tall and wears a size M.
              </p>
              <p>
                Slim fit: Fitted. Its cut conforms to the body contour through two rear pleats, achieving a streamlined
                fit without being uncomfortable.
              </p>
              <p className="font-medium">REF. 87025936</p>
            </div>
          </div>
          <div>
            <button className="text-sm font-medium underline">Composition, origin and care guidelines</button>
          </div>
        </div>
      </div>

      {/* In The Same Style Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <h2 className="text-xl font-bold mb-8">IN THE SAME STYLE</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={240}
                  height={320}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{product.price}</p>
              <p className="text-xs text-gray-500">{product.color}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Combines Perfectly Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">COMBINES PERFECTLY</h2>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-full hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {combineProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={240}
                  height={320}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Social Media Links */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-4">VIETNAM</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                INSTAGRAM
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FACEBOOK
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                YOUTUBE
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                TIKTOK
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                SPOTIFY
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                PINTEREST
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                X
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                LINKEDIN
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">HELP</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    MY PURCHASES
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    RETURNS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    WORK FOR MANGO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    PRESS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">MANGO OUTLET</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    SITE MAP
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4">RESPONSIBILITY</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    STORES
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-sm text-gray-600">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-900">
                PRIVACY POLICY AND COOKIES
              </a>
              <a href="#" className="hover:text-gray-900">
                ETHICS CHANNEL
              </a>
            </div>
            <p>© 2025 MANGO All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
