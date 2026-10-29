<template>
  <div class="flex-1 flex flex-col justify-between p-6 text-center">
    
    <!-- نشانگر وضعیت بالا -->
    <div class="flex justify-center">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
        خوش آمدید
      </span>
    </div>

    <!-- بخش معرفی و آیکون مرکزی -->
    <div class="flex flex-col items-center my-auto space-y-5">
      <div class="w-24 h-24 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-[2px] shadow-2xl shadow-indigo-500/30">
        <div class="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center text-5xl">
          🎮
        </div>
      </div>

      <div class="space-y-2">
        <h1 class="text-2xl font-black text-white">
          مینی‌اپ تلگرامی
        </h1>
        <p class="text-xs text-slate-400 max-w-xs leading-relaxed mx-auto">
          به بازی کلیکر خوش آمدید! با ضربه زدن روی تاج سکه جمع کنید و قدرت خودتان را ارتقا دهید.
        </p>
      </div>
    </div>

    <!-- دکمه ورود به بازی -->
    <NuxtLink 
      to="/game"
      class="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-black text-sm shadow-xl shadow-indigo-500/25 active:scale-95 transition-all block text-center"
    >
      شروع بازی 🚀
    </NuxtLink>

  </div>
</template>