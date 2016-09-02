PDF maker based on Kirby and Prince XML. 
Used once in production, but surely requires a bit more love to be used as a real starting point. 

#Kirby

Kirby is a file-based CMS.
Easy to setup. Easy to use. Flexible as hell.
Using Kirby in web production requires a valid licence. 

#Footnotes 

There's a shortcode for creating footnotes. Just write:
```
(fn: The text of the footnote)
```
straight in your markdown. 
Footnotes will appear in the web version as inlined with the text. 
They will be sent to the bottom of the page when generating the PDF. 
Also, footnotes count restartes at each new part. 

#Table of content 

A table of content will be automatically built on page 2. 
It will take all the different parts titles and add the page numbers. 

#Cover

Just select a background image and a logo on the 'home' page in the panel. 

#Generating the PDF 

First, install Prince XML. 
Then fire up the Terminal and navigate to where you want the PDF to be.
The web version of your document needs to be open in your browser. 
If you're using Kirby locally: 
```
$ prince http://localhost:8000 -o name_of_pdf.pdf 
```
And if you're using Javascript: 
```
prince http://localhost:8000 --javascript -o name_of_pdf.pdf
```
If you're using the free version of Prince, you'll have a watermark at the top right. 
You can take it off by opening the generated PDF in Chrome and then Print / Download as PDF. 


