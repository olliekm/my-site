import React from 'react'


export default function page() {
      const vimeoEmbedCode = `
      <div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1217670755?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="IMG_7348"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      `
  return (
    <div className='w-full h-screen overflow-hidden py-8 text-black flex flex-col items-center justify-center'>
        <div className='w-full max-w-3xl' dangerouslySetInnerHTML={{ __html:vimeoEmbedCode}}></div>
        <h2 className='pt-4 text-center'>School&apos;s Out &#8211; V9 on the 2016 Moonboard</h2>
    </div>
  )
}