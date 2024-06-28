// save periodically

setInterval(
    ()=>{
        console.log('saving now')
        chrome.runtime.sendMessage(exId,{meta:'projectSavedJSON',blId,json:vm.toJSON(),version:blVersion,})
    },
    1000 * 20
)