# ChatBat
Fast, light, minimized and performant chat UI Library in React Native.

# Inspiration:
Definitely the horrible performance of the mainstream libraries.
ChatBat is focused on delivering bloat-free, minimum yet complete chat UI experience with almost just native libraries.

# Features:
* Delivered/seen status: 
  - 0: Message is on the server
  - 1: Message was delivered to the client
  - 2: Message seen
* Render the chat message based on the type:
  - 0: Server message
  - 1: Text message
  - 2: Image message
  - 3: YT Video message
  - 4: URL link 
* Friend Avatar: Supplied to the ChatBat component to save memory and optimize the Flatlist by not dragging it in every chat message.
* Dynamic chat message styling: Based on the previous and the next message, the current message style will be determined.
* Message time in each message
* Message date breaks: The date will be displayed between messages if the time difference is more than 1h, a day, a month or a year.
* Image Message preview: A preview of the image in the chat using React Native Image component. Clicking on the image will output the URI through `ImageViewer` prop.
* YouTube Message: YouTube in-chat embedded video player, with auto detection of YouTube video links. Supports a wide variety of YouTube links.
* Link Message: Opens the link in the default browser when clicked.
* Server Message: Displays a server message with a unique style.
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






