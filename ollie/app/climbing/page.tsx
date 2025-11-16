import React from 'react'


export default function page() {
      const vimeoEmbedCode = `
      <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1137446910?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:80vh;" title="ollie is climbing"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
      `
  return (
    <div className='w-full h-screen overflow-hidden py-8 text-black'>
        <div className='max-h-screen' dangerouslySetInnerHTML={{ __html:vimeoEmbedCode}}></div>
        <h2 className='fixed bottom-0 left-1/2 transform -translate-x-1/2 pb-20'>bolda - V7</h2>
    </div>
  )
}