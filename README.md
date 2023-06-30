# 4cbmb
## 4chanel But Make it Better
---

**Currently on version: 0.1 ALPHA**

an unofficial frontend for 4channel.


## Possible Features & Improvements

- Add more boards. Currently limited to 3
- Add backlinks to posts
- Highlight posts when jumping to them
- Further post processing. some posts have youtube links, spoiler text and other rich text elements
  Should add a post processor to make posts media rich and add context
- Proper spoiler handling
- Eliminate backend dependency if possible
- Native application, This is currently on hold. I'm not sure how feasiable it is considering that the web app works fine




## Updates

### Update 5/31/2023
The API im using is being limited by CORS tomfoolery, meaning I can pull JSON but no static files
current workaround involves using an iframe but this is inefficent
~~I will begin working on a native application for IPhone. SwiftUI will be used~~


### Update 6/25/2023
Backend has been updated. The backend will act as a middle man of sorts and perform all 4chan requests
with this I can bypass CORS and use the API as intended. ~~I will begin working on the native app soon~~

### Update 6/29/2023
MVP mostly built. need to tie loose ends and add mobile responsiveness

### update 6/30/2023
MVP Done. it's time to publish this thing.