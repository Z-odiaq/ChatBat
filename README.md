# ChatBat
Fast, light, minimized, complete and performant Chat UI for React Native

# Inspiration:
Defiantly the horrible performance of the mainstream libraries. 
ChatBat is focused on delivering bloat-free, minimum yet complete chat UI experience with almost just native libraries.

# Features:
* Delivered/seen status: 
  - 0: Message is on the server
  - 1: Message was delivered to the client
  - 2: Message seen
* Friend Avatar: supplied to the ChatBat component only and not dragged in every message component.
* Dynamic chat message styling: Based on the previous and the next message, the current message's style will be determined.
* Message Time in each message
* Message date breaks: If the time difference between 2 messages is more than 1h, a day, a month or a year.
* Image Message preview: A preview of the image in the chat using React Native Image component. Clicking on the image will output the URI through `ImageViewer` prop.
* YouTube Message: YouTube in-chat embedded YouTube video player, will detect the YouTube video link automatically. Supports a wide variety of YouTube links.
* Link Message: When clicked, the default browser will be launched.
* Server Message: Displays a server message with unique style.
* Autoscroll on startup: Without using Flatlist `inverse` which ruins the performance.

# Message Format:

       msg = {
        _id: ,
        from: ,
        text: ,
        type: , //0: server, 1: text, 2: image, 3: YT video, 4: url link
        status: ,//0: pending server,1: delivered,2:seen
        createdAt: ,
        image: ,//in case "type: 2", link for the image is needed
      }
# Screenshots:
![image](https://user-images.githubusercontent.com/17526102/158057820-9ba40d8e-cdf9-4d4e-a3dc-b1eaea59c3d0.png)






