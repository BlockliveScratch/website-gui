// var apiUrl='http://assortedgummies.uk.to:4001'
var apiUrl='http://spore.us.to:4001'

const socket = io.connect(apiUrl,{jsonp:false,transports:['websocket', 'xhr-polling', 'polling', 'htmlfile', 'flashsocket']})

/////// RECIEVING
// REPLACE PORT.POSTMESSAGE WITH blockliveListener(message)

function playChange(msg,optPort) {
    // record change
    //projects[blId]?.recordChange(msg)
  
    // send to local clients
    blockliveListener(msg) //todo: consolidate playChange to blockliveListener
}
  

////// SOCKET LOGIC 
console.log('connecting')
socket.on('connect',async ()=>{
  console.log('connected with id: ',socket.id)
  
  // TODO: RESYNC
//   ports.forEach(port=>port.postMessage('resync'))
blockliveListener({meta:'resync'})

})
socket.on('disconnect',()=>{
    setTimeout(()=>socket.connect(),500);
})
socket.on("connect_error", () => {
  setTimeout(() => {
    // todo: notify of connect error
    socket.connect();
  }, 1000);
}); // copied from https://socket.io/docs/v3/client-socket-instance/
socket.on('message',(data)=>{
  console.log('message',data)
  if(data.type=='projectChange') {
    data.msg.version = data.version
    playChange(data.msg)
 } else if(data.type=='yourVersion') {
    console.log('WHAT DO I DO?????')
 }
})






/////// SENDING

function refreshUsername() {
    return uname;
}

function liveMessage(message,res) {

  portRecieve(message)

}








function reconnectIfNeeded(){
  // liveMessage({meta:"joinSession"}) // TODO: maybe do away with sending join message?
  // if(readyToRecieveChanges){getAndPlayNewChanges()}
}

function portRecieve(msg) {


console.log('isConnected',socket.connected)
if(!socket.connected) {
  // messageOnConnect.push(msg)
  socket.connect();
}

console.log(msg)
if(msg.meta=="blockly.event" || msg.meta=="sprite.proxy"||msg.meta=="vm.blockListen"||msg.meta=="vm.shareBlocks" ||msg.meta=="vm.replaceBlocks" ||msg.meta=="vm.updateBitmap" ||msg.meta=="vm.updateSvg" ||msg.meta=='version++') {
  
  msg.user = uname


  // send to websocket
  socket.send({type:'projectChange',msg,blId},(res)=>{
    if(!!res) {
        blockliveListener({meta:'yourVersion',version:res})
    }
  })
} else if (msg.meta=='myId') {
  blId = msg.id                     //todo: blocklive id logic somewhere else
  // record websocket id
    
  // create project object

} else if (msg.meta == 'joinSession') {
  socket.send({type:"joinSession",id:blId,username:uname}) //todo: remove pk from everything
} else if (msg.meta == 'setTitle') {
  // send to websocket
  socket.send({type:'setTitle',blId,msg})
} else if (msg.meta == 'chat') {
  // send to websocket
  socket.send({type:'chat',blId,msg})
} else if(msg.meta=='chatnotif') {
//   let tab = port.sender.tab;
//   let notifs = (await chrome.storage.local.get(['notifs'])).notifs ?? false;
//   console.log('notifs',notifs)
//   if(notifs) {

//     chrome.notifications.create(null,
//       {
//         type:'basic',
//         title:`Blocklive Chat`,
//         contextMessage:`${msg.sender} says in '${msg.project}':`,
//         message:msg.text,
//         // iconUrl:chrome.runtime.getURL('img/blocklivefullres.png'),
//         // iconUrl:msg.avatar,
//         // iconUrl:'https://assets.scratch.mit.edu/981e22b1b61cad530d91ea2cfd5ccec7.svg',
//         // iconUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Red_Circle%28small%29.svg/2048px-Red_Circle%28small%29.svg.png'
//         iconUrl:'img/blocklivefullres.png'
//         // isClickable:true,
//       },
//       (notif)=>{console.log('😱😱😱😱😱😱😱😱😱 DING DING NOTIFICATION',notif);
//       notificationsDb[notif] = {tab:tab.id,window:tab.windowId}
//     console.error(chrome.runtime.lastError)}
//     )

//     if(!notifListenerAdded) {
//       chrome.notifications.onClicked.addListener(notif=>{
//         chrome.tabs.update(notificationsDb[notif]?.tab, {selected: true});
//         chrome.windows.update(notificationsDb[notif]?.window, {focused: true});
//       })
//       notifListenerAdded=true
//     }
//   }
//   // if(getCurrentTab()?.id!=tab?.id) {
//   // }
  
} else {
  msg.blId = blId ?? msg.blId
  socket.send(msg)
}
}






////// on external message

async function onExternalMessage (exId, request, sendResponse) {
    console.log("external message:", request);
    if(request.meta == 'getBlId') {
      if(!request.scratchId || request.scratchId == '.') {return ''}
      sendResponse((await (await fetch(`${apiUrl}/blId/${request.scratchId}/${uname}`)).text()).replaceAll('"',''))
    // } else if(request.meta =='getInpoint') {
    //   sendResponse(await (await fetch(`${apiUrl}/projectInpoint/${request.blId}`)).json())
    } else if(request.meta =='getJson') {
      try{
      sendResponse(await (await fetch(`${apiUrl}/projectJSON/${request.blId}`)).json())
    } catch(e) {sendResponse({err:'blocklive id does not exist'})}
    } else if(request.meta =='getChanges') {
      sendResponse(await (await fetch(`${apiUrl}/changesSince/${request.blId}/${request.version}`)).json())
    } else if(request.meta == 'getUsername') {
      sendResponse(uname)
    } else if(request.meta == 'projectSaved') {
      // {meta:'projectSaved',blId,scratchId,version:blVersion}
      fetch(`${apiUrl}/projectSaved/${request.scratchId}/${request.version}`,{method:'POST'})
    } else if(request.meta == 'projectSavedJSON') {
      // {meta:'projectSaved',blId,scratchId,version:blVersion}
      fetch(`${apiUrl}/projectSavedJSON/${request.blId}/${request.version}`,{method:'POST',body:request.json,headers:{'Content-Type': 'application/json'}})
    } else if(request.meta == 'myStuff') {
      sendResponse(await(await fetch(`${apiUrl}/userProjectsScratch/${await refreshUsername()}`)).json())
    } else if(request.meta == 'create') {
      // sendResponse(await(await fetch(`${apiUrl}/newProject/${request.scratchId}/${await refreshUsername()}?title=${encodeURIComponent(request.title)}`)).json())
      sendResponse(await(await fetch(`${apiUrl}/newProject/${await refreshUsername()}?title=${encodeURIComponent(request.title)}`,
      {
        method:'POST',
        body:request.json,
        headers:{'Content-Type': 'application/json'}
      })).json())
    } else if(request.meta == 'shareWith') {
      fetch(`${apiUrl}/share/${request.id}/${request.username}/${uname}?pk=${request.pk}`,{
        method:'PUT'
      })
    } else if(request.meta == 'unshareWith') {
      fetch(`${apiUrl}/unshare/${request.id}/${request.user}`,{
        method:'PUT'
      })
    } else if(request.meta == 'getShared') {
      sendResponse(await(await fetch(`${apiUrl}/share/${request.id}`)).json())
    } else if (request.meta == 'getTitle') {
      sendResponse((await(await fetch(`${apiUrl}/projectTitle/${request.blId}`)).json()).title)
    } else if(request.meta == 'leaveScratchId') {
      fetch(`${apiUrl}/leaveScratchId/${request.scratchId}/${await refreshUsername()}`,{
        method:'PUT'
      })
    } else if(request.meta == 'getActive') {
      sendResponse(await (await fetch(`${apiUrl}/active/${request.id}`)).json())
    }
  }