const cascadeButton = document.getElementById("cascadeButton");
const prototypeButton = document.getElementById("prototypeButton");
const incrementalButton = document.getElementById("incrementalButton");
const scrumButton = document.getElementById("scrumButton");
const devopsButton = document.getElementById("devopsButton");
const kanbanButton = document.getElementById("kanbanButton")

const toggleClass = (element) => {
    element.classList.toggle("hidden");
    element.classList.toggle("visible")
}

const cascade = document.getElementById("cascade")
const cascadeContainer = document.getElementById("cascadeContainer")
const prototipe = document.getElementById("prototipe")
const prototipeContainer = document.getElementById("prototipeContainer")
const incremental = document.getElementById("incremental")
const incrementalContainer = document.getElementById("incrementalContainer")
const scrum = document.getElementById("scrum")
const scrumContainer = document.getElementById("scrumContainer")
const devops = document.getElementById("devops")
const devopsContainer = document.getElementById("devopsContainer")
const kanban = document.getElementById("kanban")
const kanbanContainer = document.getElementById("kanbanContainer");

cascadeButton.addEventListener("click", ()=>{ toggleClass(cascade)});
cascade.addEventListener("click", ()=>{ toggleClass(cascade)});
prototypeButton.addEventListener("click", ()=>{ toggleClass(prototipe)});
prototipe.addEventListener("click", ()=>{ toggleClass(prototipe)});
incrementalButton.addEventListener("click", ()=>{ toggleClass(incremental)});
incremental.addEventListener("click", ()=>{ toggleClass(incremental)});
scrumButton.addEventListener("click", ()=>{ toggleClass(scrum)});
scrum.addEventListener("click", ()=>{ toggleClass(scrum)});
devopsButton.addEventListener("click", ()=>{ toggleClass(devops)});
devops.addEventListener("click", ()=>{ toggleClass(devops)});
kanbanButton.addEventListener("click", ()=>{ toggleClass(kanban)});
kanban.addEventListener("click", ()=>{ toggleClass(kanban)});

cascadeContainer.addEventListener("click", (e)=>{ e.stopPropagation() });
prototipeContainer.addEventListener("click", (e)=>{ e.stopPropagation() });
incrementalContainer.addEventListener("click", (e)=>{ e.stopPropagation() });
scrumContainer.addEventListener("click", (e)=>{ e.stopPropagation() });
devopsContainer.addEventListener("click", (e)=>{ e.stopPropagation() });
kanbanContainer.addEventListener("click", (e)=>{ e.stopPropagation() });

console.log("Excelente")