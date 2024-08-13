const videovlog = document.getElementById("videovlog");
const videoVlogButton = document.getElementById("videoVlogButton");
const videovlogContainer = document.getElementById("videovlogContainer"); 

const gyroGlove = document.getElementById("gyroGlove");
const gyroGloveContainer = document.getElementById("gyroGloveContainer");
const gyroGloveButton = document.getElementById("gyroGloveButton");

const glideButton = document.getElementById("glideButton");
const glide = document.getElementById("glide");
const glideContainer = document.getElementById("glideContainer");

const beamO = document.getElementById("beamO");
const beamOContainer = document.getElementById("beamOContainer");
const beamOButton = document.getElementById("beamOButton");

const toggleClass = (element) => {
    element.classList.toggle("hidden");
    element.classList.toggle("visible")
}

videoVlogButton.addEventListener("click", ()=>{ toggleClass(videovlog) })
videovlog.addEventListener("click", ()=>{ toggleClass(videovlog)})

gyroGloveButton.addEventListener("click", ()=>{ toggleClass(gyroGlove) })
gyroGlove.addEventListener("click", ()=>{ toggleClass(gyroGlove) })

glide.addEventListener("click", ()=>{ toggleClass(glide) })
glideButton.addEventListener("click", ()=>{ toggleClass(glide) })

beamOButton.addEventListener("click", ()=>{ toggleClass(beamO) })
beamO.addEventListener("click", ()=>{ toggleClass(beamO) })

videovlogContainer.addEventListener("click", (e)=>{e.stopPropagation()})
gyroGloveContainer.addEventListener("click", (e)=>{e.stopPropagation()})
glideContainer.addEventListener("click", (e)=>{e.stopPropagation()})
beamOContainer.addEventListener("click", (e)=>{e.stopPropagation()})


console.log("importado")