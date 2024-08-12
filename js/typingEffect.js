import TypeIt from "typeit";

const subtitle = new TypeIt("#mainSubTitle",{
    speed:50,
    waitUntilVisible: true,
    afterComplete: () => {subtitle.destroy();}
}) .pause(1000)
    .type("Por: ")
    .pause(400)
    .type("Luis Felipe Linares Perdomo")
    .pause(100)
    .type(".")
    .pause(500)

const title = new TypeIt("#mainTitle",{
    speed:100,
    waitUntilVisible: true,
    afterComplete : (async () => {subtitle.go(); title.destroy();}),
})
    .type("Metricas", {delay: 300})
    .delete(7)
    .type("étricas ")
    .pause(300)
    .type("de calidad de hardware")
    .pause(500)
    .delete(8)
    .type("Software")
    .pause(350)
    .type(".")
    .pause(500)
    .go();

const titleTrends = new TypeIt("#titleTrends",{
    speed:100,
    waitUntilVisible: true,
    afterComplete: ()=>{yearTrend.go(), titleTrends.destroy()}
}).pause(1500)
    .type("Tendencias tecnologicas.")
    .pause(500)
    .delete(7)
    .type("ógicas.")
    .pause(500)
    .go();

const yearTrend = new TypeIt("#yearTrends",{
    speed: 100,
    waitUntilVisible: true,
    afterComplete: ()=> {yearTrend.destroy()}
}).type("2024.");

const cycleTitle = new TypeIt("#cycleTitle",{
    speed: 100,
    waitUntilVisible: true,
    afterComplete: ()=>{cycleTitle.destroy()}
}).type("Ciclos")
    .pause(700)
    .type(" de vida del desarrollo de ")
    .pause(500)
    .type("software.")
    .pause(700)
    .go();

const components = new TypeIt("#components",{
    speed: 100,
    waitUntilVisible : true,
    afterComplete : ()=>{components.destroy()}
}).pause(500)
    .type("Componentes y métricas")
    .break()
    .type("de calidad de software.")
    .pause(500)
    .go();