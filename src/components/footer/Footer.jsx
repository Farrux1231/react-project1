import React from 'react'
import logo from '../../assets/logo.svg'
import playMarket from '../../assets/playMarket.png'
import AppStore from '../../assets/appStore.jpg'
import { LiaPollHSolid } from "react-icons/lia";

const Footer = () => {
  return (
    
    <footer class="bg-[#111111] text-white rounded-[10px] w-full max-w-[1180px] mx-auto mt-20 mb-[30px] px-6 py-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-between">
    
    {/* <!-- Logo and App Links --> */}
    <div class="flex flex-col items-start space-y-4">
      <div >
        <img src={logo} alt="Logo" class="w-[80px]" />
      </div>
      <div>
        <img src={playMarket} alt="Google Play" class="mb-2 w-32" />
        <img src={AppStore} alt="App Store" class="w-32 rounded-[10px]" />
      </div>
    </div>

    {/* <!-- About Section --> */}
    <div class="text-sm space-y-2">
      <h3 class="font-semibold">O нас</h3>
      <div class="flex items-center space-x-2">
        <LiaPollHSolid/>
        <span>Публичная оферта</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="icon5" alt="icon" class="w-4 h-4" />
        <span>Реклама</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="icon6" alt="icon" class="w-4 h-4" />
        <span>F.A.Q</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="icon7" alt="icon" class="w-4 h-4" />
        <span>Контакты</span>
      </div>
    </div>

    {/* <!-- Categories Section --> */}
    <div class="text-sm space-y-2">
      <h3 class="font-semibold">Категории</h3>
      <div class="flex items-center space-x-2">
        <img src="icon8" alt="icon" class="w-4 h-4" />
        <span>Кино</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="icon9" alt="icon" class="w-4 h-4" />
        <span>Театр</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="icon10" alt="icon" class="w-4 h-4" />
        <span>Концерт</span>
      </div>
      <div class="flex items-center space-x-2">
        <img src="icon11" alt="icon" class="w-4 h-4" />
        <span>Спорт</span>
      </div>
    </div>

    {/* <!-- Contact and Social --> */}
    <div class="text-sm space-y-4">
      <div>
        <h3 class="font-semibold">Связаться с нами</h3>
        <p class="text-red-500 font-semibold">+998 (95) 897-33-38</p>
      </div>
      <div>
        <h3 class="font-semibold">Социальные сети</h3>
        <div class="flex space-x-4 mt-2">
          <img src="icon12" alt="Instagram" class="w-5 h-5" />
          <img src="icon13" alt="Facebook" class="w-5 h-5" />
          <img src="icon14" alt="YouTube" class="w-5 h-5" />
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer