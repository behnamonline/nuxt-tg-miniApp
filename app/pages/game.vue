<template>
  <div class="flex-1 flex flex-col justify-between p-6 relative overflow-hidden">
    
    <!-- هدر امتیازات بازی -->
    <div class="grid grid-cols-2 gap-3 z-10">
      <div class="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 text-center shadow-lg">
        <div class="text-[10px] text-slate-400 mb-0.5">کل سکه‌ها</div>
        <div class="text-lg font-black text-amber-400 flex items-center justify-center gap-1">
          <span>🪙</span>
          <span>{{ score }}</span>
        </div>
      </div>

      <div class="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 text-center shadow-lg">
        <div class="text-[10px] text-slate-400 mb-0.5">قدرت کلیک</div>
        <div class="text-lg font-black text-cyan-400 flex items-center justify-center gap-1">
          <span>⚡</span>
          <span>+{{ clickPower }}</span>
        </div>
      </div>
    </div>

    <!-- محیط اصلی بازی (کلیکر) -->
    <div class="flex flex-col items-center justify-center my-auto space-y-6 relative">
      <!-- کانتینر مرکزی برای پاشش تصادفی به چپ و راست -->
      <div class="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-20">
        <div v-for="item in floatingItems" :key="item.id" class="absolute flex items-center justify-center">
          <div 
            class="coin-scatter bg-slate-950/90 border border-amber-500/50 px-3 py-1 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-1.5 select-none"
            :style="{
              '--tw-translate-x': item.x + 'px',
              '--tw-translate-y': item.y + 'px',
              '--tw-rotate': item.rot + 'deg'
            }"
          >
            <span class="text-xl">🪙</span>
            <span class="text-white font-black text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">+{{ clickPower }}</span>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 bg-amber-500/20 rounded-full blur-2xl animate-pulse"></div>
        
        <button 
          @click="clickCoin"
          :class="{ 'scale-90': isClicked }"
          class="relative w-40 h-40 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-yellow-300 p-1.5 shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-transform duration-100 active:scale-90 cursor-pointer"
        >
          <div class="w-full h-full rounded-full bg-gradient-to-br from-amber-300 via-orange-400 to-amber-500 border-4 border-amber-200/50 flex items-center justify-center shadow-inner">
            <span class="text-6xl drop-shadow-lg select-none">👑</span>
          </div>
        </button>
      </div>

      <span class="text-xs text-slate-400 bg-slate-900/80 border border-white/10 px-4 py-1.5 rounded-full z-10">
        ضربه‌ بزنید!
      </span>
    </div>

    <!-- بخش ارتقای قدرت -->
    <div class="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex justify-between items-center z-10">
      <div class="flex items-center gap-2">
        <span class="text-xl">🚀</span>
        <div>
          <div class="text-xs font-bold text-white">ارتقای کلیک</div>
          <div class="text-[10px] text-slate-400">هزینه: {{ upgradeCost }} سکه</div>
        </div>
      </div>
      
      <button 
        @click="buyUpgrade"
        :disabled="score < upgradeCost"
        :class="score >= upgradeCost ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500 cursor-not-allowed'"
        class="px-3 py-1.5 rounded-xl text-xs font-bold transition-all"
      >
        ارتقا
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const score = useState('score', () => 0)
const clickPower = useState('clickPower', () => 1)
const upgradeCost = useState('upgradeCost', () => 10)
const isClicked = ref(false)

const floatingItems = ref([])

const clickCoin = () => {
  score.value += clickPower.value
  isClicked.value = true
  setTimeout(() => { isClicked.value = false }, 100)

  // پاشش رندوم به سمت چپ و راست (زاویه‌های افقی‌تر)
  const angle = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.6 + 0.2) * Math.PI // متمایل به چپ یا راست
  const distance = 60 + Math.random() * 50 // فاصله پرتاب
  
  const targetX = Math.cos(angle) * distance * 1.5 // کشیدگی بیشتر در محور افقی (چپ و راست)
  const targetY = -30 - Math.random() * 50        // کمی هم رو به بالا حرکت کنند
  const rotation = (Math.random() - 0.5) * 40     // چرخش ملایم

  const newItem = {
    id: Date.now() + Math.random(),
    x: targetX,
    y: targetY,
    rot: rotation
  }

  floatingItems.value.push(newItem)

  // حذف المان بعد از اتمام انیمیشن
  setTimeout(() => {
    floatingItems.value = floatingItems.value.filter(item => item.id !== newItem.id)
  }, 600)
}

const buyUpgrade = () => {
  if (score.value >= upgradeCost.value) {
    score.value -= upgradeCost.value
    clickPower.value += 1
    upgradeCost.value = Math.floor(upgradeCost.value * 1.8)
  }
}
</script>

<style scoped>
@keyframes scatterRandom {
  0% {
    opacity: 1;
    transform: translate(0px, 0px) scale(0.6) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1.1) rotate(var(--tw-rotate));
  }
}

.coin-scatter {
  animation: scatterRandom 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}
</style>