<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center font-sans select-none dir-rtl">
    
    <!-- کانتینر اصلی مینی‌اپ -->
    <div class="w-full max-w-md h-screen md:h-[840px] bg-slate-950 flex flex-col justify-between relative overflow-hidden md:rounded-[36px] border border-slate-800 shadow-[0_0_50px_rgba(79,70,229,0.15)]">
      
      <!-- هاله نئونی پس‌زمینه -->
      <div class="absolute -top-20 -right-20 w-60 h-60 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 -left-20 w-60 h-60 bg-violet-600/25 rounded-full blur-3xl pointer-events-none"></div>

      <!-- هدر مدرن بالا -->
      <header class="w-full bg-slate-900/60 backdrop-blur-xl border-b border-white/10 px-5 py-3.5 flex justify-between items-center z-30 sticky top-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/20">
            <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <span class="text-lg">⚡</span>
            </div>
          </div>
          <div>
            <div class="text-xs font-black tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              CYBER GAME
            </div>
            <div class="text-[10px] text-slate-400 font-medium">مینی‌اپ تلگرام</div>
          </div>
        </div>

        <!-- تب‌های ناوبری فوق‌العاده شیک -->
        <nav class="flex items-center bg-slate-950/80 p-1 rounded-2xl border border-white/10">
          <NuxtLink 
            to="/" 
            class="px-4 py-1.5 rounded-xl text-xs transition-all duration-300 flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
            active-class="!bg-gradient-to-r !from-indigo-500 !to-purple-600 !text-white font-bold shadow-lg shadow-indigo-500/30"
          >
            <span>🏠</span>
            <span>خانه</span>
          </NuxtLink>

          <NuxtLink 
            to="/game" 
            class="px-4 py-1.5 rounded-xl text-xs transition-all duration-300 flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
            active-class="!bg-gradient-to-r !from-indigo-500 !to-purple-600 !text-white font-bold shadow-lg shadow-indigo-500/30"
          >
            <span>🎮</span>
            <span>بازی</span>
          </NuxtLink>
        </nav>
      </header>

      <!-- محتوای صفحات -->
      <main class="flex-1 flex flex-col overflow-y-auto z-10 relative">
        <NuxtPage />
      </main>

    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  }
});
</script>