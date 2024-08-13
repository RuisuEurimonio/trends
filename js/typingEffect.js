import TypeIt from "typeit";

const subtitle = new TypeIt("#mainSubTitle", {
    speed: 50,
    waitUntilVisible: true,
    afterComplete: () => { subtitle.destroy(); }
}).pause(1000)
    .type("Por: ")
    .pause(400)
    .type("Luis Felipe Linares Perdomo")
    .pause(100)
    .type(".")
    .pause(500)

const title = new TypeIt("#mainTitle", {
    speed: 100,
    waitUntilVisible: true,
    afterComplete: (async () => { subtitle.go(); title.destroy(); }),
})
    .type("Metricas", { delay: 300 })
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

const titleTrends = new TypeIt("#titleTrends", {
    speed: 100,
    waitUntilVisible: true,
    afterComplete: () => { yearTrend.go(), titleTrends.destroy() }
}).pause(1500)
    .type("Tendencias tecnologicas.")
    .pause(500)
    .delete(7)
    .type("ógicas.")
    .pause(500)
    .go();

const yearTrend = new TypeIt("#yearTrends", {
    speed: 100,
    waitUntilVisible: true,
    afterComplete: () => { yearTrend.destroy() }
}).type("2024.");

const cycleTitle = new TypeIt("#cycleTitle", {
    speed: 100,
    waitUntilVisible: true,
    afterComplete: () => { cycleTitle.destroy() }
}).type("Ciclos")
    .pause(700)
    .type(" de vida del desarrollo de ")
    .pause(500)
    .type("software.")
    .pause(700)
    .go();

const components = new TypeIt("#components", {
    speed: 100,
    waitUntilVisible: true,
    afterComplete: () => { components.destroy() }
}).pause(500)
    .type("Componentes y métricas")
    .break()
    .type("de calidad de software.")
    .pause(500)
    .go();

const bibliography = new TypeIt("#bibliography", {
    speed: 100,
    waitUntilVisible: true,
    afterComplete: () => bibliography.destroy()
}).pause(500)
    .type("Bibliografia")
    .pause(400)
    .delete(2)
    .type("ía.")
    .pause(300)
    .go();

new TypeIt("#thanks", {
    speed: 220,
    waitUntilVisible: true,
}).pause(500)
.type("Muchas")
.pause(400)
.type(" ")
.pause(300)
.type("gracias por su tiempo ")
.break()
.pause(800)
.delete(8)
.break()
.type("atención")
.delete(8)
.type("tiempo y atención")
.pause(1000)
.type(".")
.pause(2000)
.delete(41)
.pause(500)
.type(":D")
.pause(300)
.delete(2)
.type("Muchas gracias por su")
.break()
.type("tiempo y atención.")
.go()