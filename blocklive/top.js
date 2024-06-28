
function goToDefaultProject() {
    if(window.location.search == '') {
        window.location.href='/?id=1'
    }
}
goToDefaultProject()
function reloadOnlineUsers() {
}


window.blId='6'
exId='whatever'


async function getUserInfo(username) {
    return getWithPic({username, pk:5097744})
}
function getPic(username) {
    return `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${username}`
}
function getWithPic(user) {
    user.pic = getPic(user.username)
    return user
}

let lastLoadingState = null
function addStoreListen(store) {

    store.subscribe(async ()=>{
        let loadingState = store.getState().scratchGui.projectState.loadingState;
        console.log('store says',loadingState)
        let showingNoId = 'SHOWING_WITHOUT_ID'
        let loadingFileUpload = 'LOADING_VM_FILE_UPLOAD'
        let newDefaultProject = 'LOADING_VM_NEW_DEFAULT'

        // save stuff when new thing uploaded
        if(loadingState==showingNoId && 
            (lastLoadingState==loadingFileUpload || 
            lastLoadingState == newDefaultProject)) {
                
            totallyNewProject()

        }


        lastLoadingState = loadingState
    })

}
async function totallyNewProject() {
    blVersion+=1;
    await saveNow(true)
    liveMessage({type:'forceReload'})
}