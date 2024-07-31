import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

function Notebook({ height }) {
  return (
    <div className='space-y-3 bg-secondary shadow-custom px-4 py-4 rounded-lg'>
      <h1 className='text-primary font-sora text-2xl text-center font-bold uppercase'>Caderno</h1>
      <Editor
        apiKey="u7vtm9xnqnf8k3yk3mkbrbh6lykgliyccprhl67wmzeixr8w"
        init={{
          selector: '#basic-conf',
          height: height,
          plugins: [
            'advlist',
            'autolink',
            'link',
            'image',
            'lists',
            'charmap',
            'preview',
            'anchor',
            'pagebreak',
            'searchreplace',
            'wordcount',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'emoticons',
            'help',
          ],
          toolbar:
            'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | ' +
            'help',
          menu: {
            favs: {
              title: 'My Favorites',
              items: 'code visualaid | searchreplace | emoticons',
            },
          },
          menubar: 'favs file edit view insert format tools table help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
        }}
        initialValue=""
      />
    </div>
  )
}

export default Notebook
